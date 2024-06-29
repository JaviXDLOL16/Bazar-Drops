import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Text from 'src/components/Texts/Text'
import Input from 'src/components/form/Input'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import { NavigationProp } from '@react-navigation/native';

export default function Login({ navigation }: { navigation: NavigationProp<any> }) {
    return (
        <ScreenContainer style={styles.body}>
            <Image style={styles.image} source={require('src/assets/images/logo_horizontal.png')} />

            <Text style={styles.title}>
                Iniciar sesión
            </Text>

            <Text style={styles.subtitle}>
                Para accerder es necesario colocar tu correo electrónico
            </Text>

            <Input title='Correo' requeriment='*Obligatorio' placeholder='Correo electronico' keyboardType='email-address' />
            <Input title='Contraseña' requeriment='*Obligatorio' secureTextEntry />

            <Text>¿Aun no te haz registrado?</Text>

            <Text onPress={() => { navigation.navigate('Register') }}>Presiona Aqui</Text>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 34,
        fontWeight: '900',
        textAlign: 'center'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 60
    },
    image: {
        height: 150,
        width: '100%',
        objectFit: 'contain',
    }
})