import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Text from 'src/components/Texts/Text'
import Input from 'src/components/form/Input'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import { NavigationProp } from '@react-navigation/native';
import { Colors } from 'src/models/Colors/Colors'
import Button from 'src/components/form/Button'

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
            <Input title='Contraseña' requeriment='*Obligatorio' placeholder='*****' secureTextEntry />

            <Text style={styles.notRegistedText}>¿Aun no te haz registrado?</Text>

            <Text style={styles.registerLink} suppressHighlighting={true} onPress={() => { navigation.navigate('Register') }}>Presiona Aqui</Text>

            <Button title='Aceptar' onPress={() => { navigation.navigate('Principal') }} style={styles.button} />


        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 25,
        paddingHorizontal: 20,
        height: '100%',
        paddingBottom: 20
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
        marginTop: 60,
        marginBottom: 68
    },
    notRegistedText: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '600',
        marginTop: 12,
        marginBottom: 22
    },
    registerLink: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: Colors.Blue3,
    },
    button: {
        backgroundColor: Colors.Blue,
        padding: 15,
        marginVertical: 10,
        width: '80%',
    },
    image: {
        height: 125,
        width: '100%',
        objectFit: 'contain',
    }
})