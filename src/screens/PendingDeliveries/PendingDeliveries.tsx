


import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';
import ScreenContainer from 'src/components/layout/ScreenContainer';
import { Colors } from 'src/models/Colors/Colors';
import Search from 'src/components/Search/Search';
import Filter from 'src/components/Filter/Filter';

const deliveries = [
    {
        id: '1',
        date: 'Para Domingo 01 de Septiembre 2024',
        time: '12:30',
        price: '$270',
        contact: '961 242 8401',
        image: '', // Cambia esto a la ruta correcta de tu imagen
    },
    {
        id: '2',
        date: 'Para Lunes 02 de Septiembre 2024',
        time: '16:20',
        price: '$180',
        contact: '961 242 8401',
        image: '', // Cambia esto a la ruta correcta de tu imagen
    },
];

export default function PendingDeliveries({ navigation }: { navigation: NavigationProp<any> }) {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.dateText}>{item.date}</Text>
                <Text style={styles.smallText}>Por: Raúl Espada</Text>
                <Text style={styles.smallText}>{item.contact}</Text>
                <Text style={styles.smallText}>Selecciona para ver detalles</Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{item.time}</Text>
                <Text style={styles.priceText}>{item.price}</Text>
            </View>
        </View>
    );

    return (
        <ScreenContainer>

            <Search />

            <View style={styles.filterContainer}>
                <Filter title='Incluir vendidos' icon={'checkmark-circle'} />
                <Filter title='Hoy' />
                <Filter title='Esta semana' />
                <Filter icon={'arrow-down'} />
            </View>

            <FlatList
                data={deliveries}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Agregar nueva entrega</Text>
                <Ionicons name="notifications" size={24} color="white" />
            </TouchableOpacity>
        </ScreenContainer>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#000',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 10,
    },
    sortButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        backgroundColor: '#444',
        borderRadius: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
    },
    dateText: {
        color: 'white',
        fontWeight: 'bold',
    },
    smallText: {
        color: 'gray',
    },
    timeContainer: {
        alignItems: 'flex-end',
    },
    timeText: {
        color: 'white',
    },
    priceText: {
        color: '#FFD700',
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        margin: 10,
        backgroundColor: '#0056D2',
        borderRadius: 10,
    },
    addButtonText: {
        color: 'white',
        marginRight: 10,
    },
});

