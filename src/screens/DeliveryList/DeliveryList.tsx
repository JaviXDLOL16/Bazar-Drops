import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ScreenContainer from 'src/components/layout/ScreenContainer';
import Search from 'src/components/Search/Search';
import { FilterContainer } from 'src/components/Filter/Filter';
import { Colors } from 'src/models/Colors/Colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackParamList } from 'App';
import Button from 'src/components/Buttons/Button';
import FilterForDeliveryStatus, { DeliveryFilterStates } from './components/FilterForDeliveryStatus';
import DeliveryCard from './components/DeliveryCard';
import { createAxiosDeliveryRepository } from 'src/lib/SellerBuyer/infrastructure/AxiosDeliveryRepository';
import { createDeliveryService } from 'src/lib/SellerBuyer/application/DeliveryService';
import { useFocusEffect } from '@react-navigation/native';
import { Delivery } from 'src/lib/SellerBuyer/domain/Delivery';
import { UserRole } from 'src/lib/User/domain/User';


const repository = createAxiosDeliveryRepository();
const service = createDeliveryService(repository);

type Props = NativeStackScreenProps<stackParamList, 'DeliveryList'>

const sellerName = [
    { id: 1, name: 'Ximena Villanueva' },
    { id: 2, name: 'Joaquín Rivas' },
    { id: 3, name: 'Renata Mendoza' },
    { id: 4, name: 'Emilio Salazar' },
    { id: 5, name: 'Valeria Pineda' },
    { id: 6, name: 'Sebastián Arriaga' },
    { id: 7, name: 'Regina Duarte' },
    { id: 8, name: 'Leonardo Valdez' },
    { id: 9, name: 'Natalia Castro' },
    { id: 10, name: 'Mateo Villalobos' },
    { id: 11, name: 'Camila Espinoza' },
    { id: 12, name: 'Bruno Márquez' },
    { id: 13, name: 'Victoria Olivares' },
    { id: 14, name: 'Gael Figueroa' },
    { id: 15, name: 'Montserrat Rubio' },
    { id: 16, name: 'Andrés Escamilla' },
    { id: 17, name: 'Mariana Quintero' },
    { id: 18, name: 'Iván Camacho' },
    { id: 19, name: 'Diana Alcántara' },
    { id: 20, name: 'Pablo Nava' },
];

export function getSellerName(id: number) {
    const result = sellerName.find(item => item.id === id);
    return result ? result.name : 'Sin nombre';
}

const buyerName = [
    { id: 1, name: 'Ana Sánchez' },
    { id: 2, name: 'Carlos López' },
    { id: 3, name: 'María Hernández' },
    { id: 4, name: 'Juan Pérez' },
    { id: 5, name: 'Laura Ramírez' },
    { id: 6, name: 'José Rodríguez' },
    { id: 7, name: 'Sofía Martínez' },
    { id: 8, name: 'Francisco González' },
    { id: 9, name: 'Paula Gómez' },
    { id: 10, name: 'Miguel Flores' },
    { id: 11, name: 'Diana Castillo' },
    { id: 12, name: 'Alejandro Vargas' },
    { id: 13, name: 'Fernanda Guzmán' },
    { id: 14, name: 'Ricardo Morales' },
    { id: 15, name: 'Gabriela Cervantes' },
    { id: 16, name: 'Jorge Jiménez' },
    { id: 17, name: 'Patricia Aguilar' },
    { id: 18, name: 'Manuel Ortega' },
    { id: 19, name: 'Carmen Reyes' },
    { id: 20, name: 'Antonio Torres' },
];

export function getBuyerName(id: number) {
    const result = buyerName.find(item => item.id === id);
    return result ? result.name : 'Sin nombre';
}


export default function DeliveryList({ navigation, route }: Props) {
    const { status } = route.params ?? {};

    const [rol, setRol] = useState<UserRole>('vendedor');

    const [deliveryList, setDeliveryList] = useState<Delivery[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getDeliveryList = async () => {
        try {
            const deliveries = await service.getAllForSeller(3);
            setDeliveryList(deliveries);
        } catch (error) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePressCancel = (id: number) => {
        setDeliveryList(prevList => prevList.map(delivery =>
            delivery.id === id ? { ...delivery, statusId: 'cancelado' } : delivery
        ));
    };

    const handlePressComplete = (id: number) => {
        setDeliveryList(prevList => prevList.map(delivery =>
            delivery.id === id ? { ...delivery, statusId: 'vendido' } : delivery
        ));
    };

    useFocusEffect(
        useCallback(() => {
            setIsLoading(true);
            getDeliveryList();
        }, [])
    );

    const [filterForStatus, setFilterForStatus] = useState<DeliveryFilterStates>(status || 'pendiente');

    const applyFilters = (deliveries: Delivery[]) => {
        let filteredDeliveries = deliveries;

        filteredDeliveries = filteredDeliveries.filter(delivery =>
            filterForStatus === 'todos' ? true : delivery.statusId === filterForStatus
        );

        return filteredDeliveries;
    };

    const filteredDeliveries = applyFilters(deliveryList);

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
                    renderItem={({ item, index }) => <DeliveryCard onPressCancel={() => { handlePressCancel(item.id) }} onPressComplete={() => { handlePressComplete(item.id) }} item={item} index={index + 1} rol={rol} name={rol === 'comprador' ? getBuyerName(index + 1) : getSellerName(index + 1)} />}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={styles.listContentContainer}
                />
            </View>

            {
                rol === 'vendedor' && (
                    <Button
                        title='Nueva entrega'
                        onPress={() => navigation.navigate('NewDelivery')}
                        style={styles.newDeliveryButton}
                    />
                )

            }
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