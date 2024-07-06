import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import Input from 'src/components/form/Input'
import Button from 'src/components/form/Button'
import { Colors } from 'src/models/Colors/Colors'
import Text from 'src/components/Texts/Text'

export default function Register({ navigation }: { navigation: NavigationProp<any> }) {
    return (
        <ScreenContainer style={styles.body}>
            <Image style={styles.image} source={require('src/assets/images/logo_horizontal.png')} />

            <Text style={styles.title}>
                Registrarse
            </Text>

            <Input title='Nombre' requeriment='*Obligatorio' placeholder='Ingresa tu nombre' secureTextEntry />
            <Input title='Correo' requeriment='*Obligatorio' placeholder='Correo electronico' keyboardType='email-address' />
            <Input title='Contraseña' requeriment='*Obligatorio' placeholder='*****' secureTextEntry />
            <Input title='Contraseña' requeriment='*Obligatorio' placeholder='*****' secureTextEntry />

            <Text style={styles.notRegistedText}>Tipo de cuenta</Text>

            <Button title='Aceptar' onPress={() => { navigation.goBack() }} style={styles.button} />


        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
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
    notRegistedText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20
    },
    registerLink: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: Colors.Blue3
    },
    button: {
        backgroundColor: Colors.Blue,
        padding: 15,
        marginVertical: 20,
        width: '80%'
    },
    image: {
        height: 125,
        width: '100%',
        objectFit: 'contain',
    }
})