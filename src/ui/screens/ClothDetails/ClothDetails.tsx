import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenContainer from 'src/ui/components/layout/ScreenContainer'
import { stackParamList } from 'App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Text from 'src/ui/components/Texts/Text';
import { Colors } from 'src/ui/models/Colors/Colors';
import { Ionicons } from "@expo/vector-icons";
import Button from 'src/ui/components/Buttons/Button';
import { createClothService } from 'src/lib/Inventory/application/ClothService';
import { createAxiosClothRepository } from 'src/lib/Inventory/infrastructure/AxiosClothRepository';
import { ClothForBuyer } from 'src/lib/Inventory/domain/Cloth';
import { Skeleton } from 'moti/skeleton';
import CustomModal from 'src/ui/components/Modal/Modal';
import DetailsDeliverys from './components/DetailsDeliverys';
import { NewOffer } from 'src/lib/SellerBuyer/domain/Offer';
import { createAxiosOfferRepository } from 'src/lib/SellerBuyer/infrastructure/AxiosOfferRepository';
import { createOfferService } from 'src/lib/SellerBuyer/application/OfferService';
import { useFocusEffect } from '@react-navigation/native';
import { useAuth } from 'src/ui/contexts/AuthContext';

const repository = createAxiosClothRepository();
const service = createClothService(repository);

const offerRepository = createAxiosOfferRepository();
const offerService = createOfferService(offerRepository);

type Props = NativeStackScreenProps<stackParamList, 'ClothDetails'>;


export default function ClothDetails({ navigation, route }: Props) {

    const { clothId } = route.params as { clothId: number };
    const { getUserInformation } = useAuth();

    const [cloth, setCloth] = useState<ClothForBuyer>();
    const [loading, setLoading] = useState(true);
    const [newOffer, setNewOffer] = useState<Partial<NewOffer>>({ buyerId: undefined, sellerId: undefined, clothId: undefined, offer: undefined, statusId: 1 });
    const [isLoading, setIsLoading] = useState(false);
    const [isSold, setIsSold] = useState(false);
    const [seller, setSeller] = useState<any>();
    const [user, setUser] = useState<any>();

    const getCloth = async () => {

        const result = await getUserInformation!();
        setUser(result);

        const cloth = await service.getById(clothId);
        const data = await service.getUserByClothId(clothId);
        setSeller(data.user);
        if (cloth?.status_id === 'vendido') {
            setIsSold(true);
        }
        setCloth(cloth);
        setLoading(false);
    };

    const createNewOffer = async () => {
        try {
            setIsLoading(true);
            newOffer.clothId = clothId;
            newOffer.offer = cloth?.price;
            newOffer.sellerId = seller.id
            newOffer.buyerId = user.id;
            console.log(newOffer);
            await offerService.save(newOffer as NewOffer);
            alert('Oferta realizada con éxito');
            toggleModal();
            navigation.navigate('BuyerRequest');
        }
        catch (e) {
            alert('Error al realizar la oferta');
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            getCloth();
        }, [])
    );
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <ScreenContainer scrollEnable={true} style={{ paddingTop: 20, gap: 10 }}>
            <Skeleton colorMode="dark" height={400} width={'100%'} radius={30} >
                {loading ? null :
                    <Image
                        source={{ uri: cloth?.image }}
                        style={{
                            width: '100%',
                            height: 400,
                            borderRadius: 30,
                        }}
                    />
                }
            </Skeleton>
            <Skeleton colorMode="dark" height={44} width={'25%'} radius={15} >
                {loading ? null :
                    <Text fontWeight='bold' style={{ fontSize: 34 }}>${cloth?.price ?? '120'} </Text>
                }
            </Skeleton>
            <Skeleton colorMode="dark" height={90} width={'95%'} radius={15} >
                {loading ? null :
                    <View style={{ gap: 3 }}>
                        <Text fontWeight='bold' style={{ fontSize: 20, color: Colors.default400 }}>Descripción</Text>
                        <Text fontWeight='semibold' style={{ fontSize: 22 }}>{cloth?.description ?? 'Playera color naranja con diseño estili tie dye, estampado de girasole es muy buen estado'} </Text>
                    </View>
                }
            </Skeleton>
            <Skeleton colorMode="dark" height={30} width={'60%'} radius={12} >
                {loading ? null :
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text fontWeight='regular' style={{ fontSize: 18 }}>Talla </Text>
                        <TouchableOpacity disabled style={{ backgroundColor: Colors.Dark1, paddingVertical: 3, paddingHorizontal: 5, borderRadius: 8 }}>
                            <Text fontWeight='bold' style={{ fontSize: 18 }}>{cloth?.size ?? 'Chica / S'}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </Skeleton>
            <Skeleton colorMode="dark" height={34} width={'80%'} radius={12} >
                {loading ? null :
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text fontWeight='regular' style={{ fontSize: 18 }}>Vendedor </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('SellerDetails') }} style={{ flexDirection: 'row', paddingVertical: 3, paddingHorizontal: 5, borderRadius: 8, gap: 5 }}>
                            <View style={{ backgroundColor: Colors.Dark1, padding: 3, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <Ionicons name="person" size={20} color="white" />
                            </View>
                            <Text fontWeight='bold' style={{ fontSize: 18 }}>{seller.name}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </Skeleton>
            <Skeleton colorMode="dark" height={34} width={'90%'} radius={12} >
                {loading ? null :
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text fontWeight='regular' style={{ fontSize: 18 }}>Lugar de entrega </Text>
                        <TouchableOpacity disabled style={{ backgroundColor: Colors.Dark1, paddingVertical: 3, paddingHorizontal: 5, borderRadius: 8, }}>
                            <Text fontWeight='bold' style={{ fontSize: 18 }}>{'Parque central'}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </Skeleton>
            <Button loading={loading} style={{ marginTop: 20, ...(isSold && { backgroundColor: Colors.Gray }) }} title={!isSold ? 'Lo quieroo' : 'No disponible'} onPress={toggleModal} />
            <CustomModal isVisible={isModalVisible} onClose={toggleModal}>
                <DetailsDeliverys loading={isLoading} onPressRequest={() => { !isSold && createNewOffer() }} />
            </CustomModal>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({})