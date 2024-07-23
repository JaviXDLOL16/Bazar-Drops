import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Button from 'src/ui/components/Buttons/Button';
import Input from 'src/ui/components/form/Input';
import Text from 'src/ui/components/Texts/Text';
import { LoginUser } from 'src/lib/User/domain/User';
import { Colors } from 'src/ui/models/Colors/Colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { stackParamList } from 'App';
import { useAuth } from 'src/ui/contexts/AuthContext';



function LoginForm({ tabToRegister }: { tabToRegister: () => void }) {

    const { onLogin } = useAuth();

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

        if (password.length < 8) {
            Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres');
            setLoading(false);
            return;
        }


        const result = await onLogin!(user);
        if (result && result.error) {
            setLoading(false);
            alert(result.msg)
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
