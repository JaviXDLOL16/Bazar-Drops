import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Text from 'src/components/Texts/Text'
import Input from 'src/components/form/Input'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import { Colors } from 'src/models/Colors/Colors'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { stackParamList } from 'App'
import Button from 'src/components/Buttons/Button'

type Props = NativeStackScreenProps<stackParamList, 'Login'>

export default function Login({ navigation }: Props) {
    return (
        <ScreenContainer>
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

            <Button
                title='Aceptar'
                onPress={() => { navigation.navigate('Principal') }}
                shadow={true}
                size='ExtraLarge'
            />


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
    image: {
        height: 125,
        width: '100%',
        objectFit: 'contain',
    }
})