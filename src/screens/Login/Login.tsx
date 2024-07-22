import React from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';
import Text from 'src/components/Texts/Text';
import Input from 'src/components/form/Input';
import ScreenContainer from 'src/components/layout/ScreenContainer';
import { Colors } from 'src/models/Colors/Colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackParamList } from 'App';
import Button from 'src/components/Buttons/Button';
import TabButton from 'src/components/Buttons/TabButton';

type Props = NativeStackScreenProps<stackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.image} source={require('src/assets/images/logo_horizontal.png')} />
                <View style={styles.tabsContainer}>
                    <TabButton title='Iniciar Sesión' active />
                    <TabButton title='Registrarse' onPress={() => { navigation.replace('Register') }} />
                </View>

                <Text style={styles.subtitle} fontWeight='bold'>
                    Para acceder es necesario colocar tu correo electrónico
                </Text>

                <View style={styles.formContainer}>
                    <Input title='Correo' requeriment='*Obligatorio' placeholder='Correo electrónico' keyboardType='email-address' maxLength={50} autoCapitalize='none' />
                    <Input title='Contraseña' requeriment='*Obligatorio' placeholder='Ingresa tu contraseña' secureTextEntry maxLength={30} />
                </View>


            </View>
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
    image: {
        height: 125,
        width: '100%',
        objectFit: 'contain',
        marginBottom: 10,
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    formContainer: {
        gap: 5
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        marginTop: -10
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 60,
        marginBottom: 55,
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
