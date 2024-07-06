import { StyleSheet, View } from "react-native";
import React from "react";
import ScreenContainer from "src/components/layout/ScreenContainer";
import Search from "src/components/Search/Search";
import ButtonLeave from "src/components/Buttons/ButtonLeave";
import ButtonEarrings from "src/components/Buttons/ButtonEarrings";
import ButtonAllPeriods from "src/components/Buttons/ButtonAllPeriods";
import { CarouselCards } from 'src/components/Carousel/CarouselCards '

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

export default function Principal() {
  return (
    <ScreenContainer>
      <View style={styles.containerHeader}>
        <View style={styles.containerSearch}>
          <Search />
        </View>
        <ButtonEarrings />
        <ButtonLeave />
      </View>
      <View style={styles.containerPeriods}>
        <ButtonAllPeriods />
      </View>
      <CarouselCards data={data} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  },
  containerSearch: {
    width: "55%",
  },
  containerPeriods: {
    marginBottom: 20
  }
});
