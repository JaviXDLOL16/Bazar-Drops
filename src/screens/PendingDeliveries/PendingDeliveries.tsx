import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ScreenContainer from 'src/components/layout/ScreenContainer';
import Search from 'src/components/Search/Search';
import { Filter, FilterContainer } from 'src/components/Filter/Filter';
import deliveryCard from './components/deliveryCard';
import { Colors } from 'src/models/Colors/Colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackParamList } from 'App';
import { prenda1 } from 'src/assets';
import Button from 'src/components/Buttons/Button';

const deliveries = [
    {
        id: '1',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: '$270',
        contact: '9612428401',
        image: prenda1
    },
    {
        id: '2',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: '$270',
        contact: '9612428401',
        image: prenda1
    },
    {
        id: '3',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: '$270',
        contact: '9612428401',
        image: prenda1
    },
    {
        id: '4',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: '$270',
        contact: '9612428401',
        image: prenda1
    },
    {
        id: '5',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: '$270',
        contact: '9612428401',
        image: prenda1
    },
    {
        id: '6',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: '$270',
        contact: '9612428401',
        image: prenda1
    },
    {
        id: '7',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: '$270',
        contact: '9612428401',
        image: prenda1
    },
    {
        id: '8',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: '$270',
        contact: '9612428401',
        image: prenda1
    },
    {
        id: '9',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: '$270',
        contact: '9612428401',
        image: prenda1
    },
    {
        id: '10',
        date: new Date(2024, 8, 1),
        time: '12:30 p.m.',
        location: 'Parque central',
        price: '$270',
        contact: '9612428401',
        image: prenda1
    },



];

type Props = NativeStackScreenProps<stackParamList, 'PendingDeliveries'>

export default function PendingDeliveries({ navigation }: Props) {

    return (
        <ScreenContainer style={styles.container}>
            <Search style={styles.search} />

            <FilterContainer style={styles.filterContainer}>
                <Filter title="Incluir vendidos" icon={"checkmark-circle"} />
                <Filter title="Hoy" />
                <Filter title="Esta semana" />
                <Filter icon={"arrow-down"} />
            </FilterContainer>

            <View style={styles.scrollContainer} >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={deliveries}
                    renderItem={deliveryCard}
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

    scrollContainer: {
        flex: 1,
        marginBottom: 20,
    },
    newDeliveryButton: {
        backgroundColor: Colors.Blue2,
    },

});
