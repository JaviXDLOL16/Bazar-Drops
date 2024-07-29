import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { CarouselBuyer } from 'src/ui/components/Carousel/CarouselBuyer';
import { Filter, FilterContainer } from 'src/ui/components/Filter/Filter';
import ScreenContainer from 'src/ui/components/layout/ScreenContainer';
import Search from 'src/ui/components/Search/Search';




const data2 = [
    {
        nombre: 'Playera verde H&M',
        talla: 'M',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/ui/assets/images/Prueba2.jpeg'),
        lugar: 'Calle central y 6 norte poniente'
    },
    {
        nombre: 'Playera roja under armor',
        talla: 'L',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/ui/assets/images/Prueba2.jpeg'),
        lugar: 'Calle central y 6 norte poniente'

    },
    {
        nombre: 'Playera gris trust',
        talla: 'XS',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/ui/assets/images/prenda3.jpeg'),
        lugar: 'Calle central y 6 norte poniente'

    },
    {
        nombre: 'Card 4',
        talla: 'L',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/ui/assets/images/prenda3.jpeg'),
        lugar: 'Calle central y 6 norte poniente'

    },
    {
        nombre: 'Card 5',
        talla: 'XXL',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/ui/assets/images/prenda1.png'),
        lugar: 'Calle central y 6 norte poniente'

    },
    {
        nombre: 'Playera roja under armor',
        talla: 'L',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/ui/assets/images/Prueba2.jpeg'),
        lugar: 'Calle central y 6 norte poniente'

    },
    {
        nombre: 'Playera gris trust',
        talla: 'XS',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/ui/assets/images/prenda3.jpeg'),
        lugar: 'Calle central y 6 norte poniente'

    },
    {
        nombre: 'Card 4',
        talla: 'L',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/ui/assets/images/prenda3.jpeg'),
        lugar: 'Calle central y 6 norte poniente'

    },
    {
        nombre: 'Card 5',
        talla: 'XXL',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/ui/assets/images/prenda1.png'),
        lugar: 'Calle central y 6 norte poniente'

    },
    {
        nombre: 'Playera verde H&M',
        talla: 'M',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/ui/assets/images/prenda1.png'),
        oferta: 200,
        lugar: 'Calle central y 6 norte poniente',
    },
    {
        nombre: 'Playera roja under armor',
        talla: 'L',
        fecha: 'Miercoles 2:33',
        comprador: 'Diego Alberto',
        precio: 122,
        numero: '961 - 132 - 7185',
        image: require('src/ui/assets/images/Prueba2.jpeg'),
        oferta: 10,
        lugar: 'Calle central y 6 norte poniente',
    },
]

export default function BuyerRequest() {
    return (
        <ScreenContainer>
            <Search style={styles.search} />

            <CarouselBuyer data={data2} />
        </ScreenContainer>
    );
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
    },
});
