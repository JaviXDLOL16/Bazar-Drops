import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';

import { Ionicons } from "@expo/vector-icons";
import Text from '../Texts/Text';
import Button from '../Buttons/Button';

type CarouselItemsBuyerProps = {
    imageSrc: any;
    index: number;
    nombre: string;
    talla: string;
    fecha: string;
    precio: number;
    numero: any;
    comprador: string;

};

const CarouselItemsBuyer: React.FC<CarouselItemsBuyerProps> = ({ imageSrc, index, nombre, precio, fecha, comprador, numero }) => {


    return (
        <View style={styles.cardContainer}>
            <Text fontWeight='bold' style={[styles.textAcceptBuyer]}>¡Un comprador ha aceptado tu oferta!</Text>
            <View style={styles.contData}>
                <View style={styles.contImage}>
                    <Image source={imageSrc} style={styles.image} />
                </View>
                <View style={styles.contTex}>
                    <Text style={styles.textData}>{nombre}</Text>
                    <Text style={styles.textData}>Precio: ${precio}</Text>
                    <Text style={styles.textData}>Fecha: {fecha}</Text>
                    <Text style={styles.textData}>Comprador: {comprador}</Text>
                    <Text style={styles.textData}>Numero: {numero}</Text>
                </View>
            </View>
            <View style={styles.contButtons}>
                <View style={{ flex: 1, paddingRight: 5 }}>
                    <Button
                        title='Aceptar'
                        size='Small'
                    >

                    </Button>
                </View>
                <View style={{ flex: 1, paddingLeft: 5 }}>
                    <Button
                        title='Aceptar'
                        size='Small'
                    >

                    </Button>
                </View>

            </View>
        </View>
    );
};

export { CarouselItemsBuyer };

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 15,
        borderRadius: 15,
        backgroundColor: Colors.Dark2,
        overflow: 'hidden',
        paddingHorizontal: 15
    },
    textAcceptBuyer: {
        color: Colors.White,
        marginVertical: 20,
    },
    contData: {
        flexDirection: 'row',
        paddingBottom: 15
    },
    contImage: {
        height: 100,
        width: 100,
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 10
    },
    contTex: {
        marginLeft: 15,
    },
    textData: {
        fontSize: 14
    },
    contButtons: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'red'
    }
});
