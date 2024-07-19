import { FlatList, Platform, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import ScreenContainer from "src/components/layout/ScreenContainer";
import Search from "src/components/Search/Search";
import ButtonNotifications from "src/components/Buttons/ButtonNotifications";
import ButtonAllPeriods from "src/components/Buttons/ButtonAllPeriods";
import ButtonInformation from "src/components/Buttons/ButtonInformation";
import { CarouselCards } from 'src/components/Carousel/CarouselCards '
import { CarouselVertical } from 'src/components/Carousel/CarouselVertical'
import ButtonNewGarment from "src/components/Buttons/ButtonNewGarment";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "src/models/Colors/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { stackParamList } from "App";
import Button from "src/components/Buttons/Button";
import { Ionicons } from "@expo/vector-icons";
import RecentlySoldSection from "./components/RecentlySoldSection";
import ClothCardForPrincipal from "./components/ClothCardForPrincipal";

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

const dataForBuyerPrincipal = [
  { id: '1', name: 'Playera blanca Bears', size: 'Extra chica', price: 120 },
  { id: '2', name: 'Playera tie dye girasoles', size: 'Mediana', price: 120 },
  { id: '3', name: 'Playera negra Purple Rain', size: 'Mediana', price: 120 },
  { id: '4', name: 'Playera azul North Face', size: 'Mediana', price: 120 },
  { id: '5', name: 'Playera blanca Bears', size: 'Extra chica', price: 120 },
  { id: '6', name: 'Playera tie dye girasoles', size: 'Mediana', price: 120 },
  { id: '7', name: 'Playera negra Purple Rain', size: 'Mediana', price: 120 },
  { id: '8', name: 'Playera azul North Face', size: 'Mediana', price: 120 },
  // Agrega más objetos según sea necesario
];

type Props = NativeStackScreenProps<stackParamList, 'Principal'>;

function SellerPrincipal({ navigation }: Props) {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.containerHeader}>
          <ButtonNotifications
            title='Solicitudes de venta'
            number={5}
            onPress={() => { navigation.navigate('BuyerRequest') }}
          />
          <ButtonNotifications
            title='Entregas'
            number={5}
            style={{ backgroundColor: Colors.Blue, marginRight: 30 }}
            onPress={() => { navigation.navigate('DeliveryList') }}
          />
          <ButtonInformation />
        </View>

        <View style={styles.contSearch}>
          <Search />
        </View>
        <View style={styles.containerPeriods}>
          <ButtonAllPeriods />
        </View>
        <CarouselCards data={data} />

        <RecentlySoldSection style={{ marginTop: 30 }} />

        <View style={styles.bottomSpacer} />

      </ScrollView>
      <View style={styles.newGarmentContainer}>
        <Button title='Registrar nueva prenda' onPress={() => navigation.navigate('RegisterClothes')} icon={<Ionicons name="camera" size={32} color="white" />} />
      </View>
    </>
  )
}

function BuyerPrincipal({ navigation }: Props) {
  return (
    < >
      <View style={styles.containerHeader}>
        <ButtonNotifications
          title='Solicitudes de venta'
          number={5}
          onPress={() => { navigation.navigate('BuyerRequest') }}
        />
        <ButtonNotifications
          title='Entregas'
          number={5}
          style={{ backgroundColor: Colors.Blue, marginRight: 30 }}
          onPress={() => { navigation.navigate('DeliveryList') }}
        />
        <ButtonInformation />
      </View>

      <View style={styles.contSearch}>
        <Search />
      </View>

      <FlatList
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-around',
          marginBottom: 10,
        }}
        data={dataForBuyerPrincipal}
        renderItem={({ item }) => <ClothCardForPrincipal name={item.name} size={item.size} price={item.price} onPress={() => { navigation.navigate('ClothDetails') }} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />


    </>
  )
}


export default function Principal({ navigation, route }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <ScreenContainer style={{
      paddingTop: Platform.OS === 'ios' ? insets.top : insets.top + 10,
    }}>

      <BuyerPrincipal navigation={navigation} route={route} />

    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  containerPeriods: {
    marginBottom: 10
  },
  CaroselVertical: {
    marginTop: 10,
    marginBottom: 15
  },
  contSearch: {
    marginVertical: 20
  },
  newGarmentContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 30,
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15
  },
  bottomSpacer: {
    height: 100,
  },
});
