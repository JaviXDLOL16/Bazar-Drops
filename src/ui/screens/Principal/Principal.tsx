import { FlatList, Platform, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenContainer from "src/ui/components/layout/ScreenContainer";
import Search from "src/ui/components/Search/Search";
import ButtonNotifications from "src/ui/components/Buttons/ButtonNotifications";
import ButtonAllPeriods from "src/ui/components/Buttons/ButtonAllPeriods";
import ButtonInformation from "src/ui/components/Buttons/ButtonInformation";
import { CarouselCards } from 'src/ui/components/Carousel/CarouselCards '
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "src/ui/models/Colors/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { stackParamList } from "App";
import Button from "src/ui/components/Buttons/Button";
import { Ionicons } from "@expo/vector-icons";
import RecentlySoldSection from "./components/RecentlySoldSection";
import ClothCardForPrincipal from "./components/ClothCardForPrincipal";
import { createClothService } from "src/lib/Inventory/application/ClothService";
import { Cloth, ClothForBuyer } from "src/lib/Inventory/domain/Cloth";
import { createAxiosClothRepository } from "src/lib/Inventory/infrastructure/AxiosClothRepository";
import Text from "src/ui/components/Texts/Text";
import * as SecureStore from 'expo-secure-store';




const dataForBuyerPrincipal = [
  { id: '1', description: 'Playera blanca Bears', size: 'Extra chica', price: 120, image: require('src/ui/assets/images/prenda1.jpeg') },
  { id: '2', description: 'Playera tie dye girasoles', size: 'Mediana', price: 120, image: require('src/ui/assets/images/Prueba2.jpeg') },
  { id: '3', description: 'Playera negra Purple Rain', size: 'Mediana', price: 120, image: require('src/ui/assets/images/prenda3.jpeg') },
  { id: '4', description: 'Playera azul North Face', size: 'Mediana', price: 120, image: require('src/ui/assets/images/prenda3.jpeg') },
  { id: '5', description: 'Playera blanca Bears', size: 'Extra chica', price: 120, image: require('src/ui/assets/images/prenda1.png') },
  { id: '6', description: 'Playera tie dye girasoles', size: 'Mediana', price: 120, image: require('src/ui/assets/images/prenda1.png') },
  { id: '7', description: 'Playera negra Purple Rain', size: 'Mediana', price: 120, image: require('src/ui/assets/images/prenda1.png') },
  { id: '8', description: 'Playera azul North Face', size: 'Mediana', price: 120, image: require('src/ui/assets/images/prenda1.png') },
  // Agrega más objetos según sea necesario
];

const repository = createAxiosClothRepository();
const service = createClothService(repository);

type Props = NativeStackScreenProps<stackParamList, 'Principal'>;

function SellerPrincipal({ navigation }: Props) {

  const [clothes, setClothes] = useState<Cloth[]>([]);
  const [clothesAvailable, setClothesAvailable] = useState<Cloth[]>([]);
  const [clothesSold, setClothesSold] = useState<Cloth[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  const getClothes = async () => {
    try {
      const clothes = await service.getAllByPeriod(3);
      setClothes(clothes.reverse());
      const available = clothes.filter(cloth => cloth.status_id === 'disponible');
      setClothesAvailable(available);
      const sold = clothes.filter(cloth => cloth.status_id === 'vendido');
      setClothesSold(sold);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    getClothes();
  }, [])

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.containerHeader}>
          <Text fontWeight="semibold" style={{ fontSize: 18 }}>Hola de nuevo</Text>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <ButtonNotifications
              title='Entregas'
              number={5}
              style={{ backgroundColor: Colors.Blue }}
              onPress={() => { navigation.navigate('DeliveryList') }}
            />

            <ButtonInformation />
          </View>

        </View>

        <View style={styles.contSearch}>
          <Search />
        </View>
        <View style={styles.containerPeriods}>
          <ButtonAllPeriods />
        </View>
        <CarouselCards loading={isLoading} data={clothesAvailable} />

        <RecentlySoldSection data={clothesSold} style={{ marginTop: 30 }} />

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
    } catch (error: any) {
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
        <Text fontWeight="semibold" style={{ fontSize: 18 }}>Hola de nuevo</Text>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <ButtonNotifications
            title='Entregas'
            number={5}
            style={{ backgroundColor: Colors.Blue }}
            onPress={() => { navigation.navigate('DeliveryList') }}
          />

          <ButtonInformation />
        </View>

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

  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {

    const getSecretToken = async () => {
      try {
        let result = await SecureStore.getItemAsync('role');
        setRole(result);
      } catch (error: any) {
        alert(error.message);
      }
    }

    getSecretToken();

  }, [])


  return (
    <ScreenContainer style={{
      paddingTop: Platform.OS === 'ios' ? insets.top : insets.top + 10,
    }}>
      {
        <BuyerPrincipal navigation={navigation} route={route} />
      }
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    gap: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingLeft: 20
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
