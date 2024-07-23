import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { prenda1 } from 'src/ui/assets';
import Text from 'src/ui/components/Texts/Text';
import { Colors } from 'src/ui/models/Colors/Colors';

export default function CardClothes() {
    return (
        <View style={styles.contCard}>
            <Image source={prenda1} style={styles.contImage} />
            <Text numberOfLines={1}>Playera blanca Bears de color</Text>
            <View style={styles.contClothes}>
                <Text style={styles.textShirt}>Playeras</Text>
                <Text style={styles.textShirt}>Talla extra chica</Text>
            </View>
            <Text fontWeight='bold' style={styles.textPrice}>$120</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contCard: {
        flexBasis: '46%', // Adjust to have two cards per row with some margin
        margin: '2%',
    },
    contImage: {
        height: 190,
        width: '100%',
        borderRadius: 10,
        marginBottom: 10
    },
    contClothes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textShirt: {
        fontSize: 11,
        color: Colors.Gray2
    },
    textPrice: {
        fontSize: 18,
        marginTop: 5
    }
});
