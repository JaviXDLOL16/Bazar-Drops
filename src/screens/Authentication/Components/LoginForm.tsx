import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import Button from 'src/components/Buttons/Button';
import Input from 'src/components/form/Input';
import Text from 'src/components/Texts/Text'
import { Colors } from 'src/models/Colors/Colors';

function LoginForm() {
    return (

        <View>
            <Text style={styles.subtitle} fontWeight='bold'>
                Para acceder es necesario colocar tu correo electrónico
            </Text>

            <Input title='Correo' requeriment='*Obligatorio' placeholder='Correo electrónico' keyboardType='email-address' />
            <Input title='Contraseña' requeriment='*Obligatorio' placeholder='Ingresa tu contraseña' secureTextEntry />


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
                title='Aceptar'
                onPress={() => { navigation.navigate('Principal'); }}
                shadow={true}
                size='ExtraLarge'
            />
        </View>
    )
}

export default LoginForm


const styles = StyleSheet.create({

    formContainer: {
        gap: 5
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