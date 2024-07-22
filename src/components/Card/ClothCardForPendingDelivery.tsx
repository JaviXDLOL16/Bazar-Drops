import { Image, StyleSheet, View, ViewProps } from 'react-native'
import React from 'react'
import { Colors } from 'src/models/Colors/Colors'
import Text from '../Texts/Text';
import InputClothSimplified from '../form/InputClothSimplified';
import { Cloth } from 'src/lib/Inventory/domain/Cloth';
import formatDate from 'src/utils/formateDate';

interface Props {
    cloth: Cloth;

}

export default function ClothCardForPendingDelivery({ cloth }: Props) {
    return (
        <View style={{ backgroundColor: Colors.Dark1, width: '100%', padding: 10, borderRadius: 10, gap: 10, flexDirection: 'row' }} >
            <Image
                source={{ uri: cloth.image }}
                style={{ width: 80, height: 80, borderRadius: 10 }}
            />
            <View style={{ flex: 1, justifyContent: 'center', gap: 10 }}>
                <Text numberOfLines={1} fontWeight='bold' style={{ fontSize: 17 }}>{formatDate(new Date(cloth.sold_at))}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20 }}>
                    <InputClothSimplified label='Precio' value={'$' + cloth.sellPrice.toString() + '.00'} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})