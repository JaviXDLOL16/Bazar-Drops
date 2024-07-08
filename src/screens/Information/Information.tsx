import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import ScreenContainer from "src/components/layout/ScreenContainer";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from 'src/models/Colors/Colors';
import EditableSection from '../../components/Modal/EditableSection';
import Input from 'src/components/form/Input';

export default function Information() {

    return (
        <ScreenContainer style={{ paddingHorizontal: 0 }}>
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
                <EditableSection>
                    <Input title='Nombre de usuario' placeholder='Nombre' requeriment='' />
                    <Input title='Celular' placeholder='xxx-xxx-xxxx' requeriment='' />
                    <Input title='Contraseña' placeholder='Escribe la nueva contraseña' requeriment='' />
                </EditableSection>
            </View>
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
        marginBottom: 25,
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
        right: 10
    },
    contSection: {
        height: '60%',
        justifyContent: 'flex-end'

    }
});
