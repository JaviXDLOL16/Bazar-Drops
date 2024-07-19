import { Image, StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import Text from 'src/components/Texts/Text'
import { Colors } from 'src/models/Colors/Colors';

interface Props extends TouchableOpacityProps {
    name: string;
    size: string;
    price: number;
    image?: string;
    style?: any;
}

export default function ClothCardForPrincipal({ name, size, price, image, style, ...rest }: Props) {
    return (
        <TouchableOpacity style={{
            width: '48%',
            marginBottom: 5,
        }} {...rest}>
            <Image
                source={image ? { uri: image } : require('src/assets/images/prenda1.png')}
                style={{
                    width: '100%',
                    height: 220, // Ajusta la altura según sea necesario
                    borderRadius: 30,
                    marginBottom: 5,
                }}
            />
            <View style={{}}>
                <Text fontWeight='bold' >{name}</Text>
                <Text style={{ fontSize: 14, color: Colors.default400 }} fontWeight='bold' >Talla {size}</Text>
                <Text style={{ fontSize: 18 }} fontWeight='bold' >{price}</Text>
            </View>
        </TouchableOpacity>
    )
}
