import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Platform, Image } from 'react-native';
import ScreenContainer from 'src/components/layout/ScreenContainer'
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from "@expo/vector-icons";
import { Colors } from 'src/models/Colors/Colors';
import Button from 'src/components/Buttons/Button';
import Input from 'src/components/form/Input';
import TextInput from 'src/components/form/TextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Text from 'src/components/Texts/Text';
import Switch from 'src/components/form/Switch';



export default function RegisterClothes() {

    const [image, setImage] = useState<string | null>(null);

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
    return (

        <ScreenContainer>
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                extraScrollHeight={Platform.OS === "ios" ? 75 : 100}
                enableOnAndroid={true}
                keyboardOpeningTime={0}
                enableAutomaticScroll={Platform.OS === "ios"}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.containerAll}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.buttonPerson} onPress={pickImage}>
                        {image ? (
                            <Image source={{ uri: image }} style={styles.image} />
                        ) : (
                            <>
                                <Ionicons name="images" size={64} color="white" />
                                <View style={styles.containerIconCard}>
                                    <Ionicons style={styles.containerIconCard} name="add-circle" size={38} color="white" />
                                </View>
                            </>

                        )}

                    </TouchableOpacity>
                    <Button
                        onPress={pickImage}
                        style={{ backgroundColor: Colors.Blue }}
                        title='Agregar imagen'
                        size='Small'
                        shadow={true}
                        textStyle={{ marginHorizontal: 15, fontSize: 16 }}
                    />
                </View>

                <View style={styles.containerInput}>
                    <View style={styles.containerbuy}>
                        <Input
                            title='Compra'
                            placeholder='Precio de compra'
                            requeriment='*Obligatorio'
                            inputMode='numeric'

                        />
                    </View>
                    <View style={styles.containerSell}>
                        <Input
                            title='Venta'
                            placeholder='Precio de venta'
                            requeriment='*Obligatorio'
                            inputMode='numeric'

                        />
                    </View>
                </View>
                <TextInput
                    title='Nombre de la prenda'
                    placeholder='Descripcion'
                    requeriment='*Obligatorio'
                    inputMode='text'
                />
                <Input
                    title='Ubicacion de compra'
                    placeholder='Ubicacion'
                    requeriment='Recomendado'
                    inputMode='text'

                />
                <Input
                    title='Tipo de prenda'
                    placeholder='Prenda'
                    requeriment='*Obligatorio'
                    inputMode='text'
                />
                <View style={styles.containerSize}>
                    <Input
                        title='Talla'
                        placeholder='Talla'
                        requeriment='*Obligatorio'
                        inputMode='text'
                    />
                </View>
                <View style={styles.containerSwicht}>
                    <Text fontWeight='extrabold' style={styles.textVisible}>Visible</Text>
                    <Text style={styles.textReadySell}>(Listo para vender)</Text>
                    <Switch />
                </View>

                <Button
                    onPress={console.log}
                    style={{ backgroundColor: Colors.Blue, marginBottom: 80 }}
                    title='Registrar prenda'
                    size='Large'
                    shadow={true}
                    textStyle={{ marginHorizontal: 15, fontSize: 16 }}
                />
            </KeyboardAwareScrollView>
        </ScreenContainer>
    )
}


const styles = StyleSheet.create({
    containerAll: {
        alignItems: 'center'
    },
    buttonPerson: {
        backgroundColor: Colors.Dark3,
        height: 125,
        width: 125,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginBottom: 20
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        position: 'absolute'
    },
    containerIconCard: {

        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: Colors.Dark3,
        borderColor: Colors.Dark3,
        borderWidth: 1,
    },
    containerInput: {
        flexDirection: 'row',
        marginTop: 20
    },
    containerbuy: {
        paddingRight: 10,
        width: '50%',

    },
    containerSell: {
        width: '50%',
        paddingLeft: 10
    },
    expandedContent: {
        paddingTop: 15,
    },
    containerSize: {
        paddingRight: '50%'
    },
    containerSwicht: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    textVisible: {
        fontSize: 18,
        paddingLeft: 15,
        marginRight: 5
    },
    textReadySell: {
        marginRight: 20
    }

});



