import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Button from 'src/components/Buttons/Button';
import Input from 'src/components/form/Input';
import Text from 'src/components/Texts/Text';
import useStackNavigation from 'src/hooks/useStackNavigation';
import { createUserService } from 'src/lib/User/application/UserService';
import { LoginUser } from 'src/lib/User/domain/User';
import { createAxiosUserRepository } from 'src/lib/User/infrastructure/AxiosUserRepository';
import { Colors } from 'src/models/Colors/Colors';

const repository = createAxiosUserRepository();
const service = createUserService(repository);


function LoginForm() {

    const navigation = useStackNavigation();


    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<LoginUser>({ email: '', password: '' });

    const handleLogin = async () => {
        const { email, password } = user;

        if (!email || !password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            setLoading(false);
            return;
        }

        try {
            const response = await service.login(user);
            Alert.alert(response.token);
            navigation.navigate('Principal');
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'No se pudo iniciar sesión. Por favor, inténtelo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View>
            <Text style={styles.subtitle} fontWeight='bold'>
                Para acceder es necesario colocar tu correo electrónico
            </Text>

            <Input
                onChangeText={(value) => setUser({ ...user, email: value })}
                value={user.email}
                loading={loading}
                autoCapitalize='none'
                title='Correo'
                requeriment='*Obligatorio'
                placeholder='Correo electrónico'
                keyboardType='email-address'
            />
            <Input
                onChangeText={(value) => setUser({ ...user, password: value })}
                value={user.password}
                loading={loading}
                title='Contraseña'
                requeriment='*Obligatorio'
                placeholder='Ingresa tu contraseña'
                secureTextEntry
            />

            <Text style={styles.notRegistedText} fontWeight='semibold'>
                ¿Aún no te has registrado?
            </Text>

            <Text
                style={styles.registerLink}
                fontWeight='bold'
                suppressHighlighting={true}
                onPress={() => { navigation.navigate('Register'); }}
            >
                Regístrate Aquí
            </Text>

            <Button
                loading={loading}
                title='Aceptar'
                onPress={() => {
                    setLoading(true);
                    handleLogin();
                }}
                shadow={true}
                size='ExtraLarge'
            />
        </View>
    );
}

export default LoginForm;

const styles = StyleSheet.create({
    formContainer: {
        gap: 5,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 45,
        marginBottom: 45,
    },
    notRegistedText: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 12,
        marginBottom: 2,
    },
    registerLink: {
        textAlign: 'center',
        fontSize: 18,
        color: Colors.Blue3,
        marginBottom: 10,
    },
});
