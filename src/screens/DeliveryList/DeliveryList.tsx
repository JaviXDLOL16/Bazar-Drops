import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ScreenContainer from 'src/components/layout/ScreenContainer';
import Search from 'src/components/Search/Search';
import { Filter, FilterContainer } from 'src/components/Filter/Filter';
import { Colors } from 'src/models/Colors/Colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackParamList } from 'App';
import { prenda1, prenda2 } from 'src/assets';
import Button from 'src/components/Buttons/Button';
import FilterForDeliveryStatus, { DeliveryFilterStates } from './components/FilterForDeliveryStatus';
import RecentFilterArrow from 'src/components/Filter/RecentFilterArrow';
import DeliveryCard from './components/DeliveryCard';

export type DeliveryStatus = 'vendido' | 'cancelado' | 'pendiente';

export interface Delivery {
    id: string;
    date: Date;
    time: string;
    location: string;
    price: number;
    buyer: string;
    contact: string;
    image: any;
    status: DeliveryStatus;
    description: string;
    size: string;
    type: string;
}

const deliveries: Delivery[] = [
    {
        id: '1',
        date: new Date(2024, 8, 7),
        time: '1:30 p.m.',
        location: 'Calle central',
        price: 270,
        buyer: 'Javier Tunn',
        contact: '9612428401',
        image: prenda2,
        status: 'pendiente',
        description: 'Manga larga azul marca Reebok',
        size: 'Grandota pa',
        type: 'Playera'
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
        status: 'vendido',
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera'

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
        status: 'pendiente',
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera'

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
        status: 'pendiente',
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera'

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
        status: 'vendido',
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera'

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
        status: 'pendiente',
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera'

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
        status: 'cancelado',
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera'

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
        status: 'vendido',
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera'

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
        status: 'pendiente',
        description: 'Manga larga azul marca Reebok',
        size: 'Mediana',
        type: 'Playera'

    },
];

type Props = NativeStackScreenProps<stackParamList, 'DeliveryList'>

export default function DeliveryList({ navigation, route }: Props) {
    const { status } = route.params ?? {};
    const [filterForStatus, setFilterForStatus] = useState<DeliveryFilterStates>(status || 'pendiente');

    console.log(status)

    const applyFilters = (deliveries: Delivery[]) => {
        let filteredDeliveries = deliveries;

        filteredDeliveries = filteredDeliveries.filter(delivery =>
            filterForStatus === 'todos' ? true : delivery.status === filterForStatus
        );

        return filteredDeliveries;
    };

    const filteredDeliveries = applyFilters(deliveries);

    return (

        <ScreenContainer style={styles.container}>
            <Search style={styles.search} />
            <FilterContainer style={styles.filterContainer}>
                <FilterForDeliveryStatus onChange={setFilterForStatus} value={filterForStatus} />
            </FilterContainer>
            <View style={styles.scrollContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={filteredDeliveries}
                    renderItem={({ item }) => <DeliveryCard item={item} />}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContentContainer}
                />
            </View>

            <Button title="Agregar nueva entrega" style={styles.newDeliveryButton} onPress={() => { }} />
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
    },
    search: {
        marginBottom: 20,
    },
    filterContainer: {
        marginBottom: 10,
    },
    statusFilterContainer: {
        flex: 1,
    },
    listContentContainer: {
        marginBottom: 20
    },
    footerSpacing: {
        height: 20,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 20
    },
    newDeliveryButton: {
        backgroundColor: Colors.Blue2,

    },
});