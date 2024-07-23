import React, { useState } from 'react'
import ScreenContainer from 'src/ui/components/layout/ScreenContainer'
import InputDate from 'src/ui/components/form/InputDate'
import { Platform, StyleSheet, View } from 'react-native'
import { Colors } from 'src/ui/models/Colors/Colors'
import Button from 'src/ui/components/Buttons/Button'
import TextInput from 'src/ui/components/form/TextInput'
import Input from 'src/ui/components/form/Input'
import Text from 'src/ui/components/Texts/Text'
import { prenda1, prenda2 } from 'src/ui/assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputSelect from 'src/ui/components/form/InputSelect'
import CustomModal from 'src/ui/components/Modal/Modal'
import ContentClothes from './components/ContentClothes'
import { createAxiosDeliveryRepository } from 'src/lib/SellerBuyer/infrastructure/AxiosDeliveryRepository'
import { createDeliveryService } from 'src/lib/SellerBuyer/application/DeliveryService'
import { Delivery, NewPendingDelivery } from 'src/lib/SellerBuyer/domain/Delivery'

const deliveries: Delivery[] = [
    {
        id: 1,
        date: '2024-08-01',
        location: '9vena suer entre 5 poniente y 13 sur calle los manguitossssssssssssss',
        buyerId: 1,
        sellerId: 1,
        offerId: 1,
        clothId: 1,
        statusId: 'pendiente',
        cellPhone: '9612428401',
        comments: 'comentario',
        uuid: '6eb49275-4154-481f-848b-90d69c8c8c8b',
    },
    {
        id: 1,
        date: '2024-08-01',
        location: '9vena suer entre 5 poniente y 13 sur calle los manguitossssssssssssss',
        buyerId: 1,
        sellerId: 1,
        offerId: 1,
        clothId: 1,
        statusId: 'pendiente',
        cellPhone: '9612428401',
        comments: 'comentario',
        uuid: '6eb49275-4154-481f-848b-90d69c8c8c8b',
    },
    {
        id: 1,
        date: '2024-08-01',
        location: '9vena suer entre 5 poniente y 13 sur calle los manguitossssssssssssss',
        buyerId: 1,
        sellerId: 1,
        offerId: 1,
        clothId: 1,
        statusId: 'pendiente',
        cellPhone: '9612428401',
        comments: 'comentario',
        uuid: '6eb49275-4154-481f-848b-90d69c8c8c8b',
    },
    {
        id: 1,
        date: '2024-08-01',
        location: '9vena suer entre 5 poniente y 13 sur calle los manguitossssssssssssss',
        buyerId: 1,
        sellerId: 1,
        offerId: 1,
        clothId: 1,
        statusId: 'pendiente',
        cellPhone: '9612428401',
        comments: 'comentario',
        uuid: '6eb49275-4154-481f-848b-90d69c8c8c8b',
    },
    {
        id: 1,
        date: '2024-08-01',
        location: '9vena suer entre 5 poniente y 13 sur calle los manguitossssssssssssss',
        buyerId: 1,
        sellerId: 1,
        offerId: 1,
        clothId: 1,
        statusId: 'pendiente',
        cellPhone: '9612428401',
        comments: 'comentario',
        uuid: '6eb49275-4154-481f-848b-90d69c8c8c8b',
    },
    {
        id: 1,
        date: '2024-08-01',
        location: '9vena suer entre 5 poniente y 13 sur calle los manguitossssssssssssss',
        buyerId: 1,
        sellerId: 1,
        offerId: 1,
        clothId: 1,
        statusId: 'pendiente',
        cellPhone: '9612428401',
        comments: 'comentario',
        uuid: '6eb49275-4154-481f-848b-90d69c8c8c8b',
    },
];

const repository = createAxiosDeliveryRepository();
const service = createDeliveryService(repository);

export default function NewDelivery() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedDelivery, setSelectedDelivery] = useState<Delivery | null>(null);

    const newClothEmpty: Partial<NewPendingDelivery> = { date: '', buyerId: undefined, cellPhone: '', clothId: undefined, comments: '', location: '', offerId: undefined, sellerId: undefined, statusId: 'pendiente' };



    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleSelectDelivery = (delivery: Delivery) => {
        setSelectedDelivery(delivery);
        toggleModal();
    };

    return (
        <ScreenContainer>
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                extraScrollHeight={Platform.OS === "ios" ? 80 : 100}
                enableOnAndroid={true}
                enableAutomaticScroll={Platform.OS === "ios"}
            >
                <View style={styles.containerInpuDate}>
                    <View style={styles.containerDate}>
                        <InputDate
                            placeholder='Día de entrega'
                            title='Fecha'
                            requeriment='*Obligatorio'
                            mode='date'
                        />
                    </View>
                    <View style={styles.containerHour}>
                        <InputDate
                            placeholder='Agregar hora'
                            title='Hora'
                            requeriment='*Obligatorio'
                            mode='time'
                        />
                    </View>
                </View>
                <InputSelect
                    title='Selecciona la prenda'
                    placeholder='Elige la prenda para la entrega'
                    onPress={toggleModal}
                />
                <CustomModal maxHeight={0.8} isVisible={isModalVisible} onClose={toggleModal}>
                    <ContentClothes
                        deliveries={deliveries}
                        onSelect={handleSelectDelivery}
                    />
                </CustomModal>
                <Input
                    title='Ubicación de entrega'
                    placeholder='Agregar lugar de encuentro'
                    requeriment='*Obligatorio'
                    inputMode='text'
                />
                <Text style={styles.textData} fontWeight='light'>Datos del contacto</Text>
                <Input
                    title='Nombre del comprador'
                    placeholder='Agregar nombre'
                    requeriment='*Obligatorio'
                    inputMode='text'
                />
                <Input
                    title='Celular'
                    placeholder='XXX-XXX-XXXX'
                    requeriment='*Obligatorio'
                    inputMode='text'
                />
                <TextInput
                    title='Comentarios'
                    placeholder='Comentario'
                    requeriment=''
                    inputMode='text'
                />
                <Button
                    style={{ backgroundColor: Colors.Blue, marginBottom: 80, marginTop: 20 }}
                    title='Agregar entrega'
                    size='Large'
                    shadow={true}
                    textStyle={{ marginHorizontal: 15, fontSize: 16 }}
                />
            </KeyboardAwareScrollView>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    containerInpuDate: {
        flexDirection: 'row',
    },
    containerDate: {
        paddingRight: 10,
        width: '50%',
    },
    containerHour: {
        width: '50%',
        paddingLeft: 10
    },
    textData: {
        marginBottom: 10,
        marginTop: 30
    }
});
