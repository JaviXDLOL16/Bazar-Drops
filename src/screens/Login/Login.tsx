import React from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';
import Text from 'src/components/Texts/Text';
import Input from 'src/components/form/Input';
import ScreenContainer from 'src/components/layout/ScreenContainer';
import { Colors } from 'src/models/Colors/Colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackParamList } from 'App';
import Button from 'src/components/Buttons/Button';

type Props = NativeStackScreenProps<stackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.image} source={require('src/assets/images/logo_horizontal.png')} />

                <Text style={styles.title} fontWeight='black'>
                    Iniciar sesión
                </Text>

                <Text style={styles.subtitle} fontWeight='bold'>
                    Para acceder es necesario colocar tu correo electrónico
                </Text>

                <Input title='Correo' requeriment='*Obligatorio' placeholder='Correo electrónico' keyboardType='email-address' />
                <Input style={styles.inputPassword} title='Contraseña' requeriment='*Obligatorio' placeholder='*****' secureTextEntry />

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
            </View>

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
    inputPassword: {
        flex: 1,
    },
    notRegistedText: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 12,
        marginBottom: 10,
    },
    registerLink: {
        textAlign: 'center',
        fontSize: 18,
        color: Colors.Blue3,
        marginBottom: 20,
    },

});
