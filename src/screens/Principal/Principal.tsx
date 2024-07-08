import { StyleSheet, View } from "react-native";
import React from "react";
import ScreenContainer from "src/components/layout/ScreenContainer";
import Search from "src/components/Search/Search";
import ButtonEarrings from "src/components/Buttons/ButtonEarrings";
import ButtonAllPeriods from "src/components/Buttons/ButtonAllPeriods";
import ButtonInformation from "src/components/Buttons/ButtonInformation";
import { CarouselCards } from 'src/components/Carousel/CarouselCards '
import { CarouselVertical } from 'src/components/Carousel/CarouselVertical'
import ButtonNewGarment from "src/components/Buttons/ButtonNewGarment";


const data = [
  {
    nombre: 'Playera verde H&M',
    talla: 'M',
    precio: 122,
    image: require('src/assets/images/prenda1.jpeg'),
  },
  {
    nombre: 'Playera roja under armor',
    talla: 'L',
    precio: 188,
    image: require('src/assets/images/Prueba2.jpeg'),
  },
  {
    nombre: 'Playera gris trust',
    talla: 'XS',
    precio: 148,
    image: require('src/assets/images/prenda3.jpeg'),
  },
  {
    nombre: 'Card 4',
    talla: 'L',
    precio: 178,
    image: require('src/assets/images/prenda3.jpeg'),
  },
  {
    nombre: 'Card 5',
    talla: 'XXL',
    precio: 122,
    image: require('src/assets/images/prenda1.png'),
  },
];


const data2 = [
  {
    nombre: 'Playera verde H&M',
    talla: 'M',
    fecha: 'September 22, 1994',
    precio: 122,
    descripcion: 'Sueter de la marca nike talla con algunos detalles en el cuello.',
    image: require('src/assets/images/prenda1.jpeg'),
  },
  {
    nombre: 'Playera roja under armor',
    talla: 'L',
    fecha: 'September 22, 1994',
    precio: 122,
    descripcion: 'Sueter de la marca nike talla con algunos detalles en el cuello.',
    image: require('src/assets/images/Prueba2.jpeg'),
  },
  {
    nombre: 'Playera gris trust',
    talla: 'XS',
    fecha: 'September 22, 1994',
    precio: 122,
    descripcion: 'Sueter de la marca nike talla con algunos detalles en el cuello.',
    image: require('src/assets/images/prenda3.jpeg'),
  },
  {
    nombre: 'Card 4',
    talla: 'L',
    fecha: 'September 22, 1994',
    precio: 122,
    descripcion: 'Sueter de la marca nike talla con algunos detalles en el cuello.',
    image: require('src/assets/images/prenda3.jpeg'),
  },
  {
    nombre: 'Card 5',
    talla: 'XXL',
    fecha: 'September 22, 1994',
    precio: 122,
    descripcion: 'Sueter de la marca nike talla con algunos detalles en el cuello.',
    image: require('src/assets/images/prenda1.png'),
  },
]

export default function Principal() {
  return (
    <ScreenContainer>
      <View style={styles.containerHeader}>
        <View style={styles.containerSearch}>
          <Search />
        </View>
        <ButtonEarrings />
        <ButtonInformation />
      </View>
      <View style={styles.containerPeriods}>
        <ButtonAllPeriods />
      </View>
      <CarouselCards data={data} />
      <View style={styles.CaroselVertical}>
        <CarouselVertical data={data2} />
      </View>
      <ButtonNewGarment />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15
  },
  containerSearch: {
    width: "55%",
  },
  containerPeriods: {
    marginBottom: 15
  },
  CaroselVertical: {
    marginTop: 10,
    marginBottom: 15
  },
});
