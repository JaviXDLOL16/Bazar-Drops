import { View } from 'react-native'
import React from 'react'
import Text from '../Texts/Text';
import { Colors } from 'src/models/Colors/Colors';

interface Props {
    label: string;
    value: string;
}

export default function InputClothSimplified({ label = 'Precio', value = '$ 120.00' }: Props) {
    return (
        <View style={{ gap: 2 }}>
            <Text style={{ color: Colors.default400 }}>{label}</Text>
            <Text fontWeight='extrabold' style={{ paddingHorizontal: 10 }}>{value}</Text>
        </View>
    )
}
