


import React from 'react';
import { View, TouchableOpacity, FlatList, Image, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';
import ScreenContainer from 'src/components/layout/ScreenContainer';
import Search from 'src/components/Search/Search';
import Filter from 'src/components/Filter/Filter';
import Text from 'src/components/Texts/Text';
import deliveryCard from './components/deliveryCard';
import { Colors } from 'src/models/Colors/Colors';

const deliveries = [
    {
        id: '1',
        date: new Date(2024, 8, 1),
        time: '12:30',
        price: '$270',
        contact: '961 242 8401',
        image: '', // Cambia esto a la ruta correcta de tu imagen
    },
    {
        id: '2',
        date: new Date(2024, 8, 2),
        time: '16:20',
        price: '$180',
        contact: '961 242 8401',
        image: '', // Cambia esto a la ruta correcta de tu imagen
    },
];

export default function PendingDeliveries({ navigation }: { navigation: NavigationProp<any> }) {

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
                renderItem={deliveryCard}
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
        marginBottom: 20,
    },
    sortButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: Colors.Blue2,
        borderRadius: 10,
        marginHorizontal: 'auto',
        width: '80%',
    },
    addButtonText: {
        color: 'white',
        marginRight: 10,
    },
});
