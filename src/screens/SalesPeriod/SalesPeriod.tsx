import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import Search from 'src/components/Search/Search'
import { Filter, FilterContainer } from 'src/components/Filter/Filter'
import RecentFilterArrow from 'src/components/Filter/RecentFilterArrow'
import { Colors } from 'src/models/Colors/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Text from 'src/components/Texts/Text'
import { prenda1, prenda2 } from 'src/assets';
import CardSalesPeriod from './components/CardSalesPeriod'
import Button from 'src/components/Buttons/Button'
import {
    Entypo, FontAwesome
} from '@expo/vector-icons';
import CustomModal from 'src/components/Modal/Modal'
import ContentModalPeriod from './components/ContentModalPeriod'


export type DeliveryStatus = 'Disponibles' | 'Vendidos' | 'Oculto';

export interface Delivery {
    id: string;
    dateBuy: Date;
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
    status: DeliveryStatus;
    shopPlace: string;
    dateSale: Date | null;

}

const deliveries: Delivery[] = [
    {
        id: '1',
        dateBuy: new Date(2024, 8, 3), // 3 de septiembre de 2024
        time: '10:00 a.m.',
        location: 'Calle de los Tulipanes, 12',
        price: 150.00,
        buyer: 'Lucía Martínez',
        contact: '9876543210',
        image: Math.random() < 0.5 ? prenda1 : prenda2,
        description: 'Camisa de lino blanca marca Mango',
        size: 'Pequeña',
        type: 'Camisa',
        buysPrice: 45,
        status: 'Disponibles',
        shopPlace: 'Plaza de la Reina',
        dateSale: null,
    },
    {
        id: '2',
        dateBuy: new Date(2024, 8, 5), // 5 de septiembre de 2024
        time: '2:30 p.m.',
        location: 'Avenida Libertad, 45',
        price: 275.00,
        buyer: 'Carlos Gómez',
        contact: '6655443322',
        image: Math.random() < 0.5 ? prenda1 : prenda2,
        description: 'Chaqueta de cuero negra marca Levi\'s',
        size: 'Mediana',
        type: 'Chaqueta',
        buysPrice: 70,
        status: 'Vendidos',
        shopPlace: 'Centro Comercial El Corte Inglés',
        dateSale: new Date(2024, 8, 12), // 12 de septiembre de 2024
    },
    {
        id: '3',
        dateBuy: new Date(2024, 8, 7), // 7 de septiembre de 2024
        time: '11:00 a.m.',
        location: 'Calle Mayor, 20',
        price: 120.00,
        buyer: 'Ana Rodríguez',
        contact: '6443322110',
        image: Math.random() < 0.5 ? prenda1 : prenda2,
        description: 'Zapatos deportivos marca Nike',
        size: '42',
        type: 'Zapatos',
        buysPrice: 55,
        status: 'Oculto',
        shopPlace: 'Tienda de Deportes SportZone',
        dateSale: null,
    },
    {
        id: '4',
        dateBuy: new Date(2024, 8, 10), // 10 de septiembre de 2024
        time: '9:00 a.m.',
        location: 'Calle del Sol, 18',
        price: 200.00,
        buyer: 'Raúl Sánchez',
        contact: '9887766554',
        image: Math.random() < 0.5 ? prenda1 : prenda2,
        description: 'Pantalones vaqueros marca Levi\'s',
        size: 'Grande',
        type: 'Pantalones',
        buysPrice: 80,
        status: 'Disponibles',
        shopPlace: 'Centro Comercial Gran Plaza',
        dateSale: null,
    },
    {
        id: '5',
        dateBuy: new Date(2024, 8, 12), // 12 de septiembre de 2024
        time: '4:00 p.m.',
        location: 'Avenida de la Constitución, 32',
        price: 90.00,
        buyer: 'María Fernández',
        contact: '6112233445',
        image: Math.random() < 0.5 ? prenda1 : prenda2,
        description: 'Bufanda de lana marca H&M',
        size: 'Única',
        type: 'Accesorio',
        buysPrice: 25,
        status: 'Vendidos',
        shopPlace: 'Tienda H&M',
        dateSale: new Date(2024, 8, 18), // 18 de septiembre de 2024
    },
    {
        id: '6',
        dateBuy: new Date(2024, 8, 15), // 15 de septiembre de 2024
        time: '5:00 p.m.',
        location: 'Calle de las Flores, 25',
        price: 160.00,
        buyer: 'Javier Morales',
        contact: '6331122334',
        image: Math.random() < 0.5 ? prenda1 : prenda2,
        description: 'Vestido de verano marca Zara',
        size: 'Mediana',
        type: 'Vestido',
        buysPrice: 65,
        status: 'Oculto',
        shopPlace: 'Tienda de Moda Zara',
        dateSale: null,
    },
    {
        id: '7',
        dateBuy: new Date(2024, 8, 18), // 18 de septiembre de 2024
        time: '3:30 p.m.',
        location: 'Calle de la Libertad, 40',
        price: 220.00,
        buyer: 'Laura Gómez',
        contact: '6445566778',
        image: Math.random() < 0.5 ? prenda1 : prenda2,
        description: 'Chaqueta de plumas marca North Face',
        size: 'Grande',
        type: 'Chaqueta',
        buysPrice: 100,
        status: 'Disponibles',
        shopPlace: 'Tienda Outdoor',
        dateSale: null,
    },
    {
        id: '8',
        dateBuy: new Date(2024, 8, 20), // 20 de septiembre de 2024
        time: '6:00 p.m.',
        location: 'Calle de la Paz, 55',
        price: 180.00,
        buyer: 'Marta Ruiz',
        contact: '6889990001',
        image: Math.random() < 0.5 ? prenda1 : prenda2,
        description: 'Camisa de seda marca Mango',
        size: 'Pequeña',
        type: 'Camisa',
        buysPrice: 50,
        status: 'Vendidos',
        shopPlace: 'Plaza de los Comercios',
        dateSale: new Date(2024, 8, 28), // 28 de septiembre de 2024
    },
    {
        id: '9',
        dateBuy: new Date(2024, 8, 22), // 22 de septiembre de 2024
        time: '7:00 p.m.',
        location: 'Calle de los Olivos, 10',
        price: 140.00,
        buyer: 'David López',
        contact: '6998776655',
        image: Math.random() < 0.5 ? prenda1 : prenda2,
        description: 'Sombrero de ala ancha marca Gucci',
        size: 'Única',
        type: 'Accesorio',
        buysPrice: 70,
        status: 'Oculto',
        shopPlace: 'Tienda Gucci',
        dateSale: null,
    },
];


export default function SalesPeriod() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <ScreenContainer>
            <View style={styles.contHeader}>
                <Search />
                <FilterContainer style={styles.filterContainer}>
                    <View style={styles.contFilter}>
                        <Filter
                            style={styles.Filter}
                            color={Colors.Green}
                            iconName='checkmark-circle-sharp'
                            title='Disponible'
                        />
                        <Filter
                            style={styles.Filter}
                            iconName='eye-off-outline'
                            title='Oculto'
                            color={Colors.Blue3}
                        />
                        <Filter color={Colors.Red} iconName='close-circle-sharp' title='Vendidos' />
                    </View>
                    <RecentFilterArrow />
                </FilterContainer>
            </View>
            <View>
                <View style={styles.contTitle}>
                    <Text>Prendas:24</Text>
                    <Text>Total:270</Text>
                </View>
            </View>
            <ScrollView>
                {deliveries.map((delivery) => (
                    <CardSalesPeriod key={delivery.id} delivery={delivery} />
                ))}
            </ScrollView>
            <View style={styles.contInformation}>
                <TouchableOpacity style={styles.buttonMore}>
                    <Entypo name='plus' size={45} color={Colors.White} />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal} style={styles.buttonList}>
                    <FontAwesome name='list-alt' size={34} color={Colors.White} />
                </TouchableOpacity >
                <CustomModal isVisible={isModalVisible} onClose={toggleModal}>
                    <ContentModalPeriod />
                </CustomModal>
            </View>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    filterContainer: {
        marginTop: 10,
        justifyContent: 'space-between',
    },
    contHeader: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: Colors.Dark2,
        borderRadius: 10,
        marginBottom: 15,
    },
    contFilter: {
        flexDirection: 'row',
    },
    Filter: {
        marginRight: 5,
    },
    buttonInformation: {
        backgroundColor: Colors.Dark3,
    },
    contInformation: {
        position: 'absolute',
        bottom: -10,
        right: 20,
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20,
    },
    contTitle: {
        flexDirection: 'row',
        gap: 30,
        marginBottom: 10,
    },
    buttonMore: {
        height: 60,
        width: 60,
        backgroundColor: Colors.Blue3,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonList: {
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Gray2,
        borderRadius: 100,
    },
});