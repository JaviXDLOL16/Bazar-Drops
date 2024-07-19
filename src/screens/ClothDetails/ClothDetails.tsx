import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import { stackParamList } from 'App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Text from 'src/components/Texts/Text';
import { Colors } from 'src/models/Colors/Colors';
import { Ionicons } from "@expo/vector-icons";
import Button from 'src/components/Buttons/Button';


type Props = NativeStackScreenProps<stackParamList, 'ClothDetails'>;

export default function ClothDetails({ navigation, route }: Props) {

    const [cloth, setCloth] = useState({})

    return (
        <ScreenContainer scrollEnable={true} style={{ paddingTop: 20, gap: 10 }}>
            <Image
                source={require('src/assets/images/prenda1.png')}
                style={{
                    width: '100%',
                    height: 400, // Ajusta la altura según sea necesario
                    borderRadius: 30,
                    marginBottom: 5,
                }}
            />
            <Text fontWeight='bold' style={{ fontSize: 34 }}>${cloth?.price ?? '120'} </Text>
            <View>
                <Text style={{ fontSize: 24 }}>Descripción</Text>
                <Text fontWeight='light' style={{ fontSize: 18, color: Colors.default400 }}>{cloth?.description ?? 'Playera color naranja con diseño estili tie dye, estampado de girasole es muy buen estado'} </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text fontWeight='regular' style={{ fontSize: 18 }}>Talla </Text>
                <TouchableOpacity disabled style={{ backgroundColor: Colors.Dark1, paddingVertical: 3, paddingHorizontal: 5, borderRadius: 8 }}>
                    <Text fontWeight='bold' style={{ fontSize: 18 }}>{cloth.size ?? 'Chica / S'}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text fontWeight='regular' style={{ fontSize: 18 }}>Vendedor </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('SellerDetails') }} style={{ flexDirection: 'row', paddingVertical: 3, paddingHorizontal: 5, borderRadius: 8, gap: 5 }}>
                    <View style={{ backgroundColor: Colors.Dark1, padding: 3, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="person" size={20} color="white" />
                    </View>
                    <Text fontWeight='bold' style={{ fontSize: 18 }}>{cloth.selledId ?? 'Leonardo Espinosa'}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text fontWeight='regular' style={{ fontSize: 18 }}>Lugar de entrega </Text>
                <TouchableOpacity disabled style={{ backgroundColor: Colors.Dark1, paddingVertical: 3, paddingHorizontal: 5, borderRadius: 8, }}>
                    <Text fontWeight='bold' style={{ fontSize: 18 }}>{cloth.location ?? 'Parque central'}</Text>
                </TouchableOpacity>
            </View>
            <Button style={{ marginTop: 20 }} title='Lo quiero' onPress={() => { }} />
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({})