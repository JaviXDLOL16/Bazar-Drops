import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';

type CarouselCardsItemsProps = {
    imageSrc: string;
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
            (index - 2) * listItemWidth, // Elemento anterior al primero visible
            (index - 1) * listItemWidth, // Primer elemento visible
            index * listItemWidth,       // Segundo elemento visible (centrado)
            (index + 1) * listItemWidth, // Tercer elemento visible
        ];

        const scale = interpolate(
            scrollX.value,
            inputRange,
            [0.9, 1, 0.9, 0.8], // Ajusta los valores de escala para la animación
            Extrapolate.CLAMP
        );

        return {
            transform: [{ scale }],
        };
    });

    return (
        <Animated.View style={[styles.cardContainer, animatedStyle, { width: listItemWidth }]}>
            <TouchableOpacity activeOpacity={0.8}>
                <Image source={imageSrc} style={styles.image} />
                <View style={styles.contData}>
                    <Text style={styles.textName} numberOfLines={2} ellipsizeMode="tail">
                        {nombre}
                    </Text>
                    <View style={styles.contPrice}>
                        <Text style={styles.textTalla}>Talla: {talla}</Text>
                        <Text style={styles.textPrice}>${precio}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

export { CarouselCardsItems };

const styles = StyleSheet.create({
    cardContainer: {
        marginRight: 10,
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
        fontWeight: '300',
        height: 40,
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
        fontWeight: '700',
        fontSize: 12,
    },
    textTalla: {
        color: 'white',
        fontWeight: '700',
        fontSize: 12,
    },
});