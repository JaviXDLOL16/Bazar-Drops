import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Filter, FilterContainer } from 'src/components/Filter/Filter';
import Search from 'src/components/Search/Search';
import ScreenContainer from "src/components/layout/ScreenContainer";
import { CarouselBuyer } from 'src/components/Carousel/CarouselBuyer'


const data2 = [
    {
        nombre: 'Playera verde H&M',
        talla: 'M',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/assets/images/prenda1.jpeg'),
    },
    {
        nombre: 'Playera roja under armor',
        talla: 'L',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/assets/images/Prueba2.jpeg'),
    },
    {
        nombre: 'Playera gris trust',
        talla: 'XS',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/assets/images/prenda3.jpeg'),
    },
    {
        nombre: 'Card 4',
        talla: 'L',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/assets/images/prenda3.jpeg'),
    },
    {
        nombre: 'Card 5',
        talla: 'XXL',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/assets/images/prenda1.png'),
    },
    {
        nombre: 'Playera roja under armor',
        talla: 'L',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/assets/images/Prueba2.jpeg'),
    },
    {
        nombre: 'Playera gris trust',
        talla: 'XS',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/assets/images/prenda3.jpeg'),
    },
    {
        nombre: 'Card 4',
        talla: 'L',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/assets/images/prenda3.jpeg'),
    },
    {
        nombre: 'Card 5',
        talla: 'XXL',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/assets/images/prenda1.png'),
    },
]


export default function BuyerRequest() {
    return (
        <ScreenContainer>
            <Search style={styles.search} />
            <FilterContainer>
                <Filter title="Todos" icon={"checkmark-circle"} style={{ paddingHorizontal: 30, }} />
                <View style={styles.contButtons}>
                    <Filter title="Hoy" style={{ paddingHorizontal: 20, marginRight: 10 }} />
                    <Filter title="Esta semana" style={{ paddingHorizontal: 20, }} />
                </View>
            </FilterContainer>
            <CarouselBuyer data={data2} />
        </ScreenContainer>
    )
}



const styles = StyleSheet.create({
    search: {
        marginBottom: 20,
    },
    contButtons: {
        flexDirection: 'row',
    },
    contFilterAll: {
        paddingHorizontal: 40,
    }
});
