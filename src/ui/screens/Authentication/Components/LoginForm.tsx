import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Button from 'src/ui/components/Buttons/Button';
import Input from 'src/ui/components/form/Input';
import Text from 'src/ui/components/Texts/Text';
import useStackNavigation from 'src/ui/hooks/useStackNavigation';
import { createUserService } from 'src/lib/User/application/UserService';
import { LoginUser } from 'src/lib/User/domain/User';
import { createAxiosUserRepository } from 'src/lib/User/infrastructure/AxiosUserRepository';
import { Colors } from 'src/ui/models/Colors/Colors';
import * as SecureStore from 'expo-secure-store';

const repository = createAxiosUserRepository();
const service = createUserService(repository);


function LoginForm({ tabToRegister }: { tabToRegister: () => void }) {

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

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'El correo electrónico no es válido');
            setLoading(false);
            return;
        }

        try {
            const response = await service.login(user);
            await SecureStore.setItemAsync('role', response.id.toString());
            await SecureStore.setItemAsync('name', response.userName);
            navigation.navigate('Principal'); //CHECA ESTO DE REPLACE
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'No se pudo iniciar sesión. Por favor, inténtelo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'space-between', paddingBottom: 40 }}>
            <Text style={styles.subtitle} fontWeight='bold'>
                Para acceder es necesario colocar tu correo electrónico
            </Text>


            <View style={{ gap: 20 }}>
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
            </View>
            <View style={{ justifyContent: 'flex-end', gap: 20 }}>
                <View>
                    <Text style={styles.notRegistedText} fontWeight='semibold'>
                        ¿Aún no te has registrado?
                    </Text>

                    <Text
                        style={styles.registerLink}
                        fontWeight='bold'
                        suppressHighlighting={true}
                        onPress={tabToRegister}
                    >
                        Regístrate Aquí
                    </Text>
                </View>
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
    },
    notRegistedText: {
        textAlign: 'center',
        fontSize: 20,
    },
    registerLink: {
        textAlign: 'center',
        fontSize: 18,
        color: Colors.Blue3,
    },
});
