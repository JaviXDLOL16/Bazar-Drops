
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Platform, KeyboardAvoidingView } from 'react-native';
import ScreenContainer from "src/components/layout/ScreenContainer";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from 'src/models/Colors/Colors';
import EditableSection from '../../components/Modal/EditableSection';
import Input from 'src/components/form/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Information() {

    return (
        <ScreenContainer style={{ paddingHorizontal: 0, height: '100%' }}>
            <KeyboardAwareScrollView
                contentContainerStyle={styles.scrollContainer}
                extraScrollHeight={Platform.OS === "ios" ? 20 : 100}
                enableOnAndroid={true}
                keyboardOpeningTime={0}
                enableAutomaticScroll={Platform.OS === "ios"}
            >
                <View style={styles.containerInformation}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.buttonPerson}>
                        <Ionicons name="person" size={95} color="white" />
                        <View style={styles.containerCamera}>
                            <Ionicons name="camera" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.containerAccount}>
                        <Text style={styles.textName}>Raul Arroyo</Text>
                        <Text style={styles.textAccount}>Vendedor</Text>
                    </View>
                </View>
                <View style={styles.contSection}>
                    <EditableSection title={'Editar datos'} style={{ marginTop: 60 }}>
                        <Input title='Nombre de usuario' placeholder='Nombre' requeriment='' keyboardType='default' />
                        <Input title='Correo electronico' placeholder='Correo@gmail.com' requeriment='' keyboardType='email-address' />
                        <Input title='Celular' placeholder='xxx-xxx-xxxx' requeriment='' keyboardType='number-pad' />
                        <Input title='Contraseña' placeholder='Escribe la nueva contraseña' requeriment='' keyboardType='default' />
                    </EditableSection>
                    <EditableSection title={'Preferencias'}>
                        <TouchableOpacity>
                            <Text style={styles.textCreateAccount}>Crear cuenta de comprador</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textLeave}>Cerrar sesión</Text>
                        </TouchableOpacity>
                    </EditableSection>
                    <EditableSection styleText={{ color: Colors.Red }} style={{ backgroundColor: '#1A1414' }} title={'Configuraciones críticas'}>
                        <TouchableOpacity>
                            <Text style={styles.textErase}>Borrar todos los registros de venta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textDelete}>Eliminar cuenta permanenteme</Text>
                        </TouchableOpacity>
                    </EditableSection>
                </View>
            </KeyboardAwareScrollView>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    containerInformation: {
        height: 145,
        backgroundColor: Colors.Gray,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 30,
        marginHorizontal: 20,
        marginTop: 35,

    },
    buttonPerson: {
        backgroundColor: Colors.Gray2,
        height: 125,
        width: 125,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderColor: Colors.Blue3,
        borderWidth: 2,
    },
    textName: {
        color: Colors.White,
        fontSize: 26,
    },
    textAccount: {
        color: Colors.White,
        fontWeight: '700',
        fontSize: 18
    },
    containerAccount: {
        marginLeft: 20
    },
    containerCamera: {
        backgroundColor: Colors.Blue3,
        height: 32,
        width: 32,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 1,
        right: 10,

    },
    scrollContainer: {
        flexGrow: 1,
    },
    contSection: {
        justifyContent: 'flex-end',
        height: '70%',
    },
    textCreateAccount: {
        color: Colors.White,
        fontSize: 20,
        height: 33

    },
    textLeave: {
        color: Colors.White,
        fontSize: 20,
        fontWeight: '700',
        height: 33
    },
    textErase: {
        color: Colors.Red,
        fontSize: 20,
        height: 33
    },
    textDelete: {
        color: Colors.Red,
        fontSize: 20,
        height: 33,
        marginBottom: 20
    }

});