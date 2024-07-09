import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import { Ionicons } from "@expo/vector-icons";

type CarouseItemsVerticalProps = {
    imageSrc: string;
    index: number;
    nombre: string;
    talla: string;
    fecha: string;
    precio: number;
    descripcion: string;
    scrollY: Animated.SharedValue<number>;
    listItemHeight: number;
};

const CarouseItemsVertical: React.FC<CarouseItemsVerticalProps> = ({ imageSrc, index, nombre, talla, precio, fecha, scrollY, listItemHeight, descripcion }) => {
    const animatedStyle = useAnimatedStyle(() => {
        const inputRange = [
            (index - 2) * listItemHeight,
            (index - 1) * listItemHeight,
            index * listItemHeight,
            (index + 1) * listItemHeight,
        ];

        const scale = interpolate(
            scrollY.value,
            inputRange,
            [0.5, 1, 1, 0.5],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ scale }],
        };
    });

    return (
        <Animated.View style={[styles.cardContainer, animatedStyle, { height: listItemHeight }]}>
            <TouchableOpacity style={styles.contButton} activeOpacity={0.8}>
                <View style={styles.contImage} >
                    <Image source={imageSrc} style={styles.image} />
                </View>
                <View style={styles.contText}>
                    <Text style={styles.textName}>{nombre}</Text>
                    <View style={styles.contsizedate}>
                        <Text style={styles.textSizeDate}>{talla} |{fecha} </Text>
                    </View>
                    <Text style={styles.textDescription}>{descripcion}</Text>
                </View>
                <View style={styles.contPrice}>
                    <Ionicons name="pricetag" size={23} color="white" />
                    <View style={styles.contSignal}>
                        <Text style={styles.textPrice}>${precio}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

export { CarouseItemsVertical };

const styles = StyleSheet.create({
    contButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        flex: 1,
    },
    cardContainer: {
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: Colors.Dark2,
        overflow: 'hidden',
    },
    contImage: {
        height: 90,
        width: 70,
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 10
    },
    contText: {
        width: '75%',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    contsizedate: {
        flexDirection: 'row'
    },
    contPrice: {
        width: 40,
        height: 50,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        backgroundColor: Colors.Blue2,
        position: 'absolute',
        right: 25,
        bottom: 57,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 3
    },
    textPrice: {
        color: 'white',
        fontWeight: '800',
        fontSize: 12
    },
    contSignal: {
        alignItems: 'center',
        width: '100%'
    },
    textName: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    },
    textSizeDate: {
        color: '#FFFFFF60',
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 5,
        marginTop: 2,
    },
    textDescription: {
        fontSize: 14,
        color: 'white',
        width: '95%'
    }
});
