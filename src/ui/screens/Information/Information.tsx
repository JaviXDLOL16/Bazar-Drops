import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Platform, Image, Alert } from 'react-native';
import ScreenContainer from "src/ui/components/layout/ScreenContainer";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from 'src/ui/models/Colors/Colors';
import EditableSection from '../../components/Modal/EditableSection';
import Input from 'src/ui/components/form/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'expo-image-picker';
import * as SecureStore from 'expo-secure-store';


export default function Information({ navigation }: any) {
    const [image, setImage] = useState<string | null>(null);
    const [name, setName] = useState<string>('');


    useEffect(() => {

        const getName = async () => {
            try {
                let result = await SecureStore.getItemAsync('name');
                setName(result || '');
            } catch (error: any) {
                alert(error.message);
            }
        }

        getName();

    }, [])


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const logout = () => {
        Alert.alert(
            'Cerrar sesión',
            '¿Estás seguro de que quieres cerrar sesión?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Aceptar',
                    onPress: async () => {
                        await SecureStore.deleteItemAsync('role');
                        await SecureStore.deleteItemAsync('name');
                        navigation.replace('Authentication');
                    }
                }
            ]
        );
    };

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
                    <TouchableOpacity activeOpacity={0.8} style={styles.buttonPerson} onPress={pickImage}>
                        {image ? (
                            <Image source={{ uri: image }} style={styles.image} />
                        ) : (
                            <Ionicons name="person" size={95} color="white" />
                        )}
                        <View style={styles.containerCamera}>
                            <Ionicons name="camera" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.containerAccount}>
                        <Text style={styles.textName}>{name}</Text>
                        <Text style={styles.textAccount}>Vendedor</Text>
                    </View>
                </View>
                <View style={styles.contSection}>
                    <EditableSection title={'Editar datos'} >
                        <Input title='Nombre de usuario' placeholder='Nombre' requeriment='' keyboardType='default' />
                        <Input title='Correo electronico' placeholder='Correo@gmail.com' requeriment='' keyboardType='email-address' />
                        <Input title='Celular' placeholder='xxx-xxx-xxxx' requeriment='' keyboardType='number-pad' />
                        <Input title='Contraseña' placeholder='Escribe la nueva contraseña' requeriment='' keyboardType='default' />
                    </EditableSection>
                    <EditableSection title={'Preferencias'}>
                        <TouchableOpacity>
                            <Text style={styles.textCreateAccount}>Crear cuenta de comprador</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={logout}>
                            <Text style={styles.textLeave}>Cerrar sesión</Text>
                        </TouchableOpacity>
                    </EditableSection>
                    <EditableSection styleText={{ color: Colors.Red }} style={{ backgroundColor: '#1A1414' }} title={'Configuraciones críticas'}>
                        <TouchableOpacity style={styles.buttonEraser}>
                            <Text style={styles.textErase}>Borrar todos los registros de venta</Text>
                            <Ionicons name="help-circle-outline" size={22} color={Colors.Red} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonDelete}>
                            <Text style={styles.textDelete}>Eliminar cuenta permanenteme</Text>
                            <Ionicons name="help-circle-outline" size={22} color={Colors.Red} />
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
        textTransform: 'capitalize',
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
        height: 33,
        marginRight: 10

    },
    textDelete: {
        color: Colors.Red,
        fontSize: 20,
        height: 33,
        marginRight: 10
    },
    buttonDelete: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 30

    },
    buttonEraser: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    }

});