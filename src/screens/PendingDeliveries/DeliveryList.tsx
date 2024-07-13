import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ScreenContainer from 'src/components/layout/ScreenContainer';
import Search from 'src/components/Search/Search';
import { Filter, FilterContainer } from 'src/components/Filter/Filter';
import { Colors } from 'src/models/Colors/Colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackParamList } from 'App';
import { prenda1 } from 'src/assets';
import Button from 'src/components/Buttons/Button';
import FilterForDeliveryStatus from './components/FilterForDeliveryStatus';
import DeliveryCard from './components/DeliveryCard';
import RecentFilterArrow from 'src/components/Filter/RecentFilterArrow';

type DeliveryStatus = 'sold' | 'canceled' | 'pending';

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
}

const deliveries: Delivery[] = [
    {
        id: '1',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: 270,
        buyer: 'Juan Perez',
        contact: '9612428401',
        image: prenda1,
        status: 'pending',
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
        status: 'sold',
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
        status: 'canceled',
    }

];

type Props = NativeStackScreenProps<stackParamList, 'DeliveryList'>

export default function DeliveryList({ navigation }: Props) {

    return (
        <ScreenContainer style={styles.container}>
            <Search style={styles.search} />

            <FilterContainer style={styles.filterContainer}>
                <View style={styles.statusFilterContainer}>
                    <FilterForDeliveryStatus />
                </View>
                <Filter title="Hoy" />
                <Filter title="Esta semana" />
                <RecentFilterArrow />
            </FilterContainer>

            <View style={styles.scrollContainer} >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={deliveries}
                    renderItem={DeliveryCard}
                    keyExtractor={item => item.id}
                />
            </View>
            <Button title='Agregar nueva entrega' style={styles.newDeliveryButton} onPress={() => navigation.navigate('Home')} />
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 50,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#000",
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

    scrollContainer: {
        flex: 1,
        marginBottom: 20,
    },
    newDeliveryButton: {
        backgroundColor: Colors.Blue2,
    },

});
