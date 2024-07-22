import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Button from 'src/components/Buttons/Button';
import Input from 'src/components/form/Input';
import Text from 'src/components/Texts/Text';
import AccountRadioButtons from 'src/components/form/AccountRadioButtons';
import { createUserService } from 'src/lib/User/application/UserService';
import { RegisterUser } from 'src/lib/User/domain/User';
import { createAxiosUserRepository } from 'src/lib/User/infrastructure/AxiosUserRepository';
import useStackNavigation from 'src/hooks/useStackNavigation';
import * as SecureStore from 'expo-secure-store';


const repository = createAxiosUserRepository();
const service = createUserService(repository);

function RegisterForm() {

    const navigation = useStackNavigation();

    const [loading, setLoading] = useState(false);
    const [newUser, setNewUser] = useState<Partial<RegisterUser>>({
        email: '',
        password: '',
        name: '',
        phoneNumber: '',
        accountType: undefined,
    });

    const handleRegister = async () => {
        const { email, password, name, phoneNumber, accountType } = newUser;

        if (!email || !password || !name || !phoneNumber || !accountType) {
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

        try {
            const response = await service.register(newUser as RegisterUser);
            await SecureStore.setItemAsync('role', response.id.toString());
            await SecureStore.setItemAsync('name', response.userName);

            navigation.replace('Principal');
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'No se pudo registrar. Por favor, inténtelo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View>

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
                onChangeText={(value) => setNewUser({ ...newUser, phoneNumber: value })}
                value={newUser.phoneNumber}
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
                    value={newUser.accountType}
                    onValueChange={(value) => setNewUser({ ...newUser, accountType: value })}
                />
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
