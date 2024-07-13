import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';
import { CarouselItemsBuyer } from './CarouselItemsBuyer';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';

type CarouselBuyerProps = {
    data: {
        nombre: string;
        talla: string;
        fecha: string;
        precio: number;
        numero: string;
        comprador: string;
        image: string;
    }[];
};

const CarouselBuyer: React.FC<CarouselBuyerProps> = ({ data }) => {


    return (
        <>
            <View style={styles.containerAdd}>
                <Animated.FlatList
                    scrollEventThrottle={16}
                    data={data}
                    keyExtractor={(_, index) => index.toString()}
                    decelerationRate="fast"
                    horizontal={false}
                    renderItem={({ item, index }) => {
                        return (
                            <CarouselItemsBuyer
                                nombre={item.nombre}
                                talla={item.talla}
                                fecha={item.fecha}
                                precio={item.precio}
                                numero={item.numero}
                                comprador={item.comprador}
                                imageSrc={item.image}
                                index={index}
                            />
                        );
                    }}
                />
            </View>
        </>
    );
};

export { CarouselBuyer };

const styles = StyleSheet.create({

    containerAdd: {
        borderRadius: 10,
        marginTop: 15,
        flex: 1,
    },
});
