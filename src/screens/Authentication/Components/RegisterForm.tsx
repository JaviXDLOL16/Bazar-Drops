import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from 'src/components/Buttons/Button';
import AccountRadioButtons from 'src/components/form/AccountRadioButtons';
import Input from 'src/components/form/Input';
import Text from 'src/components/Texts/Text'

export default function RegisterForm() {
    return (
        <>

            <Input style={{ marginTop: 10 }} title='Nombre' requeriment='*Obligatorio' placeholder='Ingresa tu nombre' />
            <Input title='Correo' requeriment='*Obligatorio' placeholder='Correo electrónico' keyboardType='email-address' />
            <Input title='Contraseña' requeriment='*Obligatorio' placeholder='Crea tu contraseña' secureTextEntry />
            <Input title='Fecha de nacimiento' requeriment='*Obligatorio' placeholder='dd/mm/aaaa' />

            <Text fontWeight='extrabold' style={styles.notRegistedText}>Tipo de cuenta</Text>
            <View style={{ marginBottom: 20 }}>
                <AccountRadioButtons />
            </View>
            <Button
                title='Aceptar'
                shadow={true}
                size='ExtraLarge'
                style={{ marginBottom: 30 }}
            />
        </>

    )
}


const styles = StyleSheet.create({
    notRegistedText: {
        textAlign: 'left',
        fontSize: 18,
        marginBottom: 5,
        paddingLeft: 40
    },
});