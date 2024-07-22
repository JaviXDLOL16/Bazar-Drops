import React, { useState } from 'react'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import InputDate from 'src/components/form/InputDate'
import { Platform, StyleSheet, View } from 'react-native'
import { Colors } from 'src/models/Colors/Colors'
import Button from 'src/components/Buttons/Button'
import TextInput from 'src/components/form/TextInput'
import Input from 'src/components/form/Input'
import Text from 'src/components/Texts/Text'
import { prenda1, prenda2 } from 'src/assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputSelect from 'src/components/form/InputSelect'
import CustomModal from 'src/components/Modal/Modal'
import ContentClothes from './components/ContentClothes'
import { createAxiosDeliveryRepository } from 'src/lib/SellerBuyer/infrastructure/AxiosDeliveryRepository'
import { createDeliveryService } from 'src/lib/SellerBuyer/application/DeliveryService'
import { NewPendingDelivery } from 'src/lib/SellerBuyer/domain/Delivery'

export interface Delivery {
    id: string;
    date: Date;
    time: string;
    location: string;
    price: number;
    buyer: string;
    contact: string;
    image: any;
    description: string;
    size: string;
    type: string;
    buysPrice: number;
}

const deliveries: Delivery[] = [
    {
        id: '1',
        date: new Date(2024, 8, 7),
        time: '1:30 p.m.',
        location: '9vena suer entre 5 poniente y 13 sur calle los manguitossssssssssssss',
        price: 270.00,
        buyer: 'Javier Tunn',
        contact: '9612428401',
        image: prenda2,
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera',
        buysPrice: 30,
    },
    {
        id: '2',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: 270,
        buyer: 'Juan Perez',
        contact: '9612428401',
        image: prenda1,
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera',
        buysPrice: 30,
    },
    {
        id: '3',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: 270,
        buyer: 'Juan Perez',
        contact: '9612428401',
        image: prenda1,
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera',
        buysPrice: 30,
    },
    {
        id: '4',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: 270,
        buyer: 'Juan Perez',
        contact: '9612428401',
        image: prenda1,
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera',
        buysPrice: 30,
    },
    {
        id: '5',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: 270,
        buyer: 'Juan Perez',
        contact: '9612428401',
        image: prenda1,
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera',
        buysPrice: 30,
    },
    {
        id: '6',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: 270,
        buyer: 'Juan Perez',
        contact: '9612428401',
        image: prenda1,
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera',
        buysPrice: 30,
    },
    {
        id: '7',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: 270,
        buyer: 'Juan Perez',
        contact: '9612428401',
        image: prenda1,
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera',
        buysPrice: 30,
    },
    {
        id: '8',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: 270,
        buyer: 'Juan Perez',
        contact: '9612428401',
        image: prenda1,
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera',
        buysPrice: 30,
    },
    {
        id: '9',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: 270,
        buyer: 'Juan Perez',
        contact: '9612428401',
        image: prenda1,
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera',
        buysPrice: 30,
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
                    onPress={console.log}
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
