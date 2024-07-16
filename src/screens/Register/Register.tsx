import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ScreenContainer from 'src/components/layout/ScreenContainer';
import Input from 'src/components/form/Input';
import { Colors } from 'src/models/Colors/Colors';
import Text from 'src/components/Texts/Text';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackParamList } from 'App';
import Button from 'src/components/Buttons/Button';
import TabButton from 'src/components/Buttons/TabButton';
import AccountRadioButtons from 'src/components/form/AccountRadioButtons';

type Props = NativeStackScreenProps<stackParamList, 'Register'>;

export default function Register({ navigation }: Props) {
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.image} source={require('src/assets/images/logo_horizontal.png')} />
                <View style={styles.tabsContainer}>
                    <TabButton title='Iniciar Sesión' onPress={() => { navigation.replace('Login') }} />
                    <TabButton title='Registrarse' active />
                </View>

                <Input title='Nombre' requeriment='*Obligatorio' placeholder='Ingresa tu nombre' />
                <Input title='Correo' requeriment='*Obligatorio' placeholder='Correo electrónico' keyboardType='email-address' />
                <Input title='Contraseña' requeriment='*Obligatorio' placeholder='Crea tu contraseña' secureTextEntry />
                <Input title='Fecha de nacimiento' requeriment='*Obligatorio' placeholder='dd/mm/aaaa' />

                <Text fontWeight='extrabold' style={styles.notRegistedText}>Tipo de cuenta</Text>
                <AccountRadioButtons />
            </View>

            <Button
                title='Aceptar'
                onPress={() => { navigation.goBack(); }}
                shadow={true}
                size='ExtraLarge'
            />
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',

    },
    content: {
        flex: 1,
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 30,
        fontWeight: '900',
        textAlign: 'center',
        marginTop: -10
    },
    notRegistedText: {
        textAlign: 'left',
        fontSize: 18,
        marginBottom: 20,
    },
    image: {
        height: 125,
        width: '100%',
        objectFit: 'contain',
    }
});
