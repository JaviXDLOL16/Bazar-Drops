import { Image, StyleSheet, View, ViewProps } from 'react-native'
import React from 'react'
import { Colors } from 'src/models/Colors/Colors'
import Text from '../Texts/Text';
import InputClothSimplified from '../form/InputClothSimplified';

interface Props {
    date: string;
    price: number;
    time: string;
}

export default function ClothCardForPendingDelivery({ date = 'Domingo 1 de Septiembre 2024', price = 120, time = '02:40 p.m.' }: Props) {
    return (
        <View style={{ backgroundColor: Colors.Dark1, width: '100%', padding: 10, borderRadius: 10, gap: 10, flexDirection: 'row' }} >
            <Image
                source={require('src/assets/images/prenda1.png')}
                style={{ width: 80, height: 80, borderRadius: 10 }}
            />
            <View style={{ flex: 1, justifyContent: 'center', gap: 10 }}>
                <Text numberOfLines={1} fontWeight='bold' style={{ fontSize: 17 }}>{date}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20 }}>
                    <InputClothSimplified label='Precio' value={'$' + price.toString() + '.00'} />
                    <InputClothSimplified label='Hora de entrega' value={time} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})