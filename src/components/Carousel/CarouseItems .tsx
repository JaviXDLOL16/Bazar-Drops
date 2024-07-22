import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import Text from '../Texts/Text';

type CarouselCardsItemsProps = {
    imageSrc: any;
    index: number;
    nombre: string;
    talla: string;
    precio: number;
    scrollX: Animated.SharedValue<number>;
    listItemWidth: number;
};

const CarouselCardsItems: React.FC<CarouselCardsItemsProps> = ({ imageSrc, index, nombre, talla, precio, scrollX, listItemWidth }) => {
    const animatedStyle = useAnimatedStyle(() => {
        const inputRange = [
            (index - 2) * listItemWidth,
            (index - 1) * listItemWidth,
            index * listItemWidth,
            (index + 1) * listItemWidth,
            (index + 2) * listItemWidth,
        ];

        const scale = interpolate(
            scrollX.value,
            inputRange,
            [0.9, 1, 0.9, 0.9, 0.9],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ scale }],
        };
    });

    return (
        <Animated.View style={[styles.cardContainer, animatedStyle, { width: listItemWidth }]}>
            <TouchableOpacity activeOpacity={0.8}>
                <Image source={{ uri: imageSrc }} style={styles.image} />
                <View style={styles.contData}>
                    <Text fontWeight='light' style={styles.textName} numberOfLines={2} ellipsizeMode="tail">
                        {nombre}
                    </Text>
                    <View style={styles.contPrice}>
                        <Text fontWeight='bold' style={styles.textTalla}>Talla: {talla}</Text>
                        <Text fontWeight='bold' style={styles.textPrice}>${precio}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

export { CarouselCardsItems };

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 15,
        backgroundColor: Colors.Dark2,
    },
    image: {
        width: '100%',
        height: 135,
        borderRadius: 15,
    },
    contData: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 1,
    },
    textName: {
        color: 'white',
        textAlign: 'center',
        marginTop: 2,
        height: 40,
        fontSize: 14
    },
    contPrice: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 4,
        marginBottom: 6,
    },
    textPrice: {
        color: Colors.Blue3,
        fontSize: 13,
    },
    textTalla: {
        color: 'white',
        fontSize: 13,
    },
});
