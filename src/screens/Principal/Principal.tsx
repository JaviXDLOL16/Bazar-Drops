import { FlatList, Platform, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenContainer from "src/components/layout/ScreenContainer";
import Search from "src/components/Search/Search";
import ButtonNotifications from "src/components/Buttons/ButtonNotifications";
import ButtonAllPeriods from "src/components/Buttons/ButtonAllPeriods";
import ButtonInformation from "src/components/Buttons/ButtonInformation";
import { CarouselCards } from 'src/components/Carousel/CarouselCards '
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "src/models/Colors/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { stackParamList } from "App";
import Button from "src/components/Buttons/Button";
import { Ionicons } from "@expo/vector-icons";
import RecentlySoldSection from "./components/RecentlySoldSection";
import ClothCardForPrincipal from "./components/ClothCardForPrincipal";
import { createClothService } from "src/lib/Inventory/application/ClothService";
import { Cloth, ClothForBuyer } from "src/lib/Inventory/domain/Cloth";
import { createAxiosClothRepository } from "src/lib/Inventory/infrastructure/AxiosClothRepository";
import Text from "src/components/Texts/Text";


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
  { id: '1', description: 'Playera blanca Bears', size: 'Extra chica', price: 120, image: require('src/assets/images/prenda1.jpeg') },
  { id: '2', description: 'Playera tie dye girasoles', size: 'Mediana', price: 120, image: require('src/assets/images/Prueba2.jpeg') },
  { id: '3', description: 'Playera negra Purple Rain', size: 'Mediana', price: 120, image: require('src/assets/images/prenda3.jpeg') },
  { id: '4', description: 'Playera azul North Face', size: 'Mediana', price: 120, image: require('src/assets/images/prenda3.jpeg') },
  { id: '5', description: 'Playera blanca Bears', size: 'Extra chica', price: 120, image: require('src/assets/images/prenda1.png') },
  { id: '6', description: 'Playera tie dye girasoles', size: 'Mediana', price: 120, image: require('src/assets/images/prenda1.png') },
  { id: '7', description: 'Playera negra Purple Rain', size: 'Mediana', price: 120, image: require('src/assets/images/prenda1.png') },
  { id: '8', description: 'Playera azul North Face', size: 'Mediana', price: 120, image: require('src/assets/images/prenda1.png') },
  // Agrega más objetos según sea necesario
];

const repository = createAxiosClothRepository();
const service = createClothService(repository);

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
  const [isLoading, setIsLoading] = useState(true);
  const [clothes, setClothes] = useState<ClothForBuyer[]>([]);
  const [search, setSearch] = useState('');

  const getCloth = async () => {
    try {
      const clothes = await service.getAll();
      setClothes(clothes.reverse());
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCloth();
  }, []);

  const filteredClothes = clothes.filter(cloth =>
    cloth.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
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
        <Search onChangeText={(text) => setSearch(text)} value={search} />
      </View>

      <FlatList
        data={isLoading ? dataForBuyerPrincipal : filteredClothes.map(cloth => ({
          id: cloth.id.toString(),
          image: cloth.image,
          description: cloth.description,
          size: cloth.size,
          price: cloth.price,
        }))}
        renderItem={({ item }) =>
          <>
            <ClothCardForPrincipal
              image={item.image}
              name={item.description}
              size={item.size}
              price={item.price}
              onPress={() => { navigation.navigate('ClothDetails', { clothId: parseInt(item.id) }) }}
              loading={isLoading}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        ListEmptyComponent={<Text style={styles.noResultsText}>No results found</Text>}
        ListFooterComponent={<View style={{ height: 50 }} />}
      />
    </>
  );
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
  caroselVertical: {
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
  noResultsText: {
    textAlign: 'center',
    marginVertical: 20,
    color: Colors.default400,
    fontSize: 16,
  }
});
