import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Platform, Image, Alert } from 'react-native';
import ScreenContainer from 'src/components/layout/ScreenContainer'
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { Ionicons } from "@expo/vector-icons";
import { Colors } from 'src/models/Colors/Colors';
import Button from 'src/components/Buttons/Button';
import Input from 'src/components/form/Input';
import TextInput from 'src/components/form/TextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Text from 'src/components/Texts/Text';
import Switch from 'src/components/form/Switch';
import { ClothSize, NewCloth, TypeOfCloth } from 'src/lib/Inventory/domain/Cloth';
import Select from 'src/components/form/Select';
import { createAxiosClothRepository } from 'src/lib/Inventory/infrastructure/AxiosClothRepository';
import { createClothService } from 'src/lib/Inventory/application/ClothService';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackParamList } from 'App';

const repository = createAxiosClothRepository();
const service = createClothService(repository);

type Props = NativeStackScreenProps<stackParamList, 'RegisterClothes'>


export default function RegisterClothes({ navigation, route }: Props) {

    const newClothEmpty: Partial<NewCloth> = { buy: 0, description: '', image: '', location: '', period_id: 3, price: 0, sellPrice: 0, size: undefined, status_id: 'disponible', type: undefined }

    const [loading, setLoading] = useState(false);
    const [newCloth, setNewCloth] = useState<Partial<NewCloth>>(newClothEmpty);

    const typeOfClothValues: TypeOfCloth[] = ['playera', 'pantalon', 'sueter', 'short', 'otro'];
    const sizeValues: ClothSize[] = ['chico', 'mediano', 'grande', 'extra grande'];
    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const typeOfClothItems = typeOfClothValues.map((value, index) => ({
        value: value,
        label: capitalizeFirstLetter(value),
    }));

    const sizeItems = sizeValues.map((value, index) => ({
        value: value,
        label: capitalizeFirstLetter(value),
    }));


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,

        });

        if (!result.canceled) {
            setNewCloth({ ...newCloth, image: result.assets[0].uri });
        }
    };

    const saveCloth = async () => {
        setLoading(true);

        const { buy, price, description, location, type, size } = newCloth

        if (!buy || !price || !description || !type || !size) {
            Alert.alert('Error', 'Debes llegar todos los campos de tipo *Obligatorio');
            setLoading(false);
            return;
        }

        try {
            const manipulatedImage = await ImageManipulator.manipulateAsync(
                newCloth.image ?? '',
                [],
                { base64: true }
            );
            const base64Image = manipulatedImage.base64;
            await service.save({ ...newCloth, image: base64Image, sellPrice: newCloth.price } as NewCloth);

            Alert.alert('Correcto', 'Prenda guardada en el periodo de ventas', [
                { text: 'OK', onPress: () => navigation.navigate('SalesPeriod') }
            ]);

            setNewCloth(newClothEmpty);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

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
                <View style={{ gap: 10 }}>
                    <View style={styles.containerAll}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.buttonPerson} onPress={pickImage}>
                            {newCloth?.image ? (
                                <Image source={{ uri: newCloth?.image }} style={styles.image} />
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
                                onChangeText={(value) => setNewCloth({ ...newCloth, buy: parseInt(value) })}
                                value={newCloth.buy ? newCloth.buy.toString() : undefined}
                                loading={loading}
                                title='Compra'
                                placeholder='Precio de compra'
                                requeriment='*Obligatorio'
                                keyboardType='decimal-pad'
                                maxLength={5}
                            />
                        </View>
                        <View style={styles.containerSell}>
                            <Input
                                onChangeText={(value) => setNewCloth({ ...newCloth, price: parseInt(value) })}
                                value={newCloth.price ? newCloth.price.toString() : undefined}
                                loading={loading}
                                title='Venta'
                                placeholder='Precio de venta'
                                requeriment='*Obligatorio'
                                keyboardType='decimal-pad'
                                maxLength={5}

                            />
                        </View>
                    </View>
                    <Input
                        onChangeText={(value) => setNewCloth({ ...newCloth, description: value })}
                        value={newCloth.description}
                        loading={loading}
                        title='Nombre de la prenda'
                        placeholder='Descripcion'
                        requeriment='*Obligatorio'
                        inputMode='text'
                        numberOfLines={3}
                        multiline
                        maxLength={120}
                    />
                    <Input
                        onChangeText={(value) => setNewCloth({ ...newCloth, location: value })}
                        value={newCloth.location}
                        loading={loading}
                        title='Ubicacion de compra'
                        placeholder='Ubicacion'
                        requeriment='Recomendado'
                        inputMode='text'
                        maxLength={80}
                    />
                    <Select
                        onChange={(value) => setNewCloth({ ...newCloth, type: value })}
                        value={newCloth.type}
                        title='Tipo de prenda'
                        placeholder='Selecciona el tipo de prenda'
                        requeriment='*Obligatorio'
                        loading={loading}
                        items={typeOfClothItems}
                    />
                    <View style={styles.containerSize}>
                        <Select
                            onChange={(value) => setNewCloth({ ...newCloth, size: value })}
                            value={newCloth.size}
                            title='Talla'
                            placeholder='Talla'
                            requeriment='*Obligatorio'
                            loading={loading}
                            items={sizeItems}
                        />
                    </View>
                    {/*<View style={styles.containerSwicht}>
                        <Text fontWeight='extrabold' style={styles.textVisible}>Visible</Text>
                        <Text style={styles.textReadySell}>(Listo para vender)</Text>
                        <Switch />
                    </View>*/}

                    <Button
                        loading={loading}
                        onPress={saveCloth}
                        style={{ backgroundColor: Colors.Blue, marginBottom: 80, marginTop: 20 }}
                        title='Registrar prenda'
                        size='Large'
                        shadow={true}
                        textStyle={{ marginHorizontal: 15, fontSize: 16 }}
                    />
                </View>
            </KeyboardAwareScrollView>
        </ScreenContainer>
    )
}


const styles = StyleSheet.create({
    containerAll: {
        alignItems: 'center',
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
        marginTop: 20,
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



