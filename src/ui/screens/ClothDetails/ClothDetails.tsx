import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenContainer from 'src/ui/components/layout/ScreenContainer'
import { stackParamList } from 'App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Text from 'src/ui/components/Texts/Text';
import { Colors } from 'src/ui/models/Colors/Colors';
import { Ionicons } from "@expo/vector-icons";
import Button from 'src/ui/components/Buttons/Button';
import { createClothService } from 'src/lib/Inventory/application/ClothService';
import { createAxiosClothRepository } from 'src/lib/Inventory/infrastructure/AxiosClothRepository';
import { Cloth, ClothForBuyer } from 'src/lib/Inventory/domain/Cloth';
import { Skeleton } from 'moti/skeleton';
import CustomModal from 'src/ui/components/Modal/Modal';
import DetailsDeliverys from './components/DetailsDeliverys';

const repository = createAxiosClothRepository();
const service = createClothService(repository);

type Props = NativeStackScreenProps<stackParamList, 'ClothDetails'>;

export default function ClothDetails({ navigation, route }: Props) {

    const { clothId } = route.params as { clothId: number };

    const [cloth, setCloth] = useState<ClothForBuyer>();
    const [loading, setLoading] = useState(true);

    const getCloth = async () => {
        const cloth = await service.getById(clothId);
        setCloth(cloth);
        setLoading(false);
    };

    useEffect(() => {
        getCloth();
    }, [])
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
                            <Text fontWeight='bold' style={{ fontSize: 18 }}>{'Leonardo Espinosa NO EN API'}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </Skeleton>
            <Skeleton colorMode="dark" height={34} width={'90%'} radius={12} >
                {loading ? null :
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text fontWeight='regular' style={{ fontSize: 18 }}>Lugar de entrega </Text>
                        <TouchableOpacity disabled style={{ backgroundColor: Colors.Dark1, paddingVertical: 3, paddingHorizontal: 5, borderRadius: 8, }}>
                            <Text fontWeight='bold' style={{ fontSize: 18 }}>{'Parque central NO EN API'}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </Skeleton>
            <Button style={{ marginTop: 20 }} title='Lo quieroo' onPress={toggleModal} />
            <CustomModal isVisible={isModalVisible} onClose={toggleModal}>
                <DetailsDeliverys />
            </CustomModal>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({})