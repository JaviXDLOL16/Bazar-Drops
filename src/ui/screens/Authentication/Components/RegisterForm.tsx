import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Button from 'src/ui/components/Buttons/Button';
import Input from 'src/ui/components/form/Input';
import Text from 'src/ui/components/Texts/Text';
import AccountRadioButtons from 'src/ui/components/form/AccountRadioButtons';
import { RegisterUser } from 'src/lib/User/domain/User';
import useStackNavigation from 'src/ui/hooks/useStackNavigation';
import { useAuth } from 'src/ui/contexts/AuthContext';

function RegisterForm({ tabToLogin }: { tabToLogin: () => void }) {

    const navigation = useStackNavigation();

    const { onRegister, onLogin } = useAuth();

    const [loading, setLoading] = useState(false);
    const [newUser, setNewUser] = useState<Partial<RegisterUser>>({
        email: '',
        password: '',
        name: '',
        cellphone: '',
        role_id: undefined,
    });

    const handleRegister = async () => {
        const { email, password, name, cellphone, role_id } = newUser;

        if (!email || !password || !name || !cellphone || !role_id) {
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

        const result = await onRegister!(newUser as RegisterUser);
        if (result && result.error) {
            setLoading(false);
            alert(result.msg)
        } else {
            alert('Usuario registrado correctamente');
            setLoading(false);
            await onLogin!(newUser as RegisterUser);
        }

    };

    return (
        <View style={{ flex: 1, justifyContent: 'space-between', paddingBottom: 40 }}>
            <View style={{ gap: 20 }}>
                <Input
                    onChangeText={(value) => setNewUser({ ...newUser, name: value })}
                    value={newUser.name}
                    title='Nombre'
                    requeriment='*Obligatorio'
                    placeholder='Ingresa tu nombre'
                    maxLength={50}
                    autoCapitalize='words'
                />

                <Input
                    onChangeText={(value) => setNewUser({ ...newUser, cellphone: value })}
                    value={newUser.cellphone}
                    loading={loading}
                    title='Número de celular'
                    requeriment='*Obligatorio'
                    placeholder='123-456-7890'
                    maxLength={10}
                    keyboardType='numeric'
                />

                <Input
                    onChangeText={(value) => setNewUser({ ...newUser, email: value })}
                    value={newUser.email}
                    loading={loading}
                    title='Correo'
                    requeriment='*Obligatorio'
                    placeholder='Correo electrónico'
                    keyboardType='email-address'
                    maxLength={50}
                    autoCapitalize='none'
                />

                <Input
                    onChangeText={(value) => setNewUser({ ...newUser, password: value })}
                    value={newUser.password}
                    loading={loading}
                    title='Contraseña'
                    requeriment='*Obligatorio'
                    placeholder='Crea tu contraseña'
                    secureTextEntry maxLength={30}
                />

                <Text fontWeight='extrabold' style={styles.notRegistedText}>Tipo de cuenta</Text>
                <View style={{ marginBottom: 20 }}>
                    <AccountRadioButtons
                        value={newUser.role_id}
                        onValueChange={(value) => {
                            console.log(value);
                            setNewUser({ ...newUser, role_id: value })
                        }}
                    />
                </View>

            </View>

            <Button
                loading={loading}
                title='Registrar'
                onPress={() => {
                    setLoading(true);
                    handleRegister();
                }}
                shadow={true}
                size='ExtraLarge'
            />
        </View>
    );
}

export default RegisterForm;

const styles = StyleSheet.create({
    notRegistedText: {
        textAlign: 'left',
        fontSize: 18,
        marginBottom: 5,
        paddingLeft: 10
    },
});
