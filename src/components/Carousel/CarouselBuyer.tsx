import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Animated from 'react-native-reanimated';
import { CarouselItemsBuyer } from './CarouselItemsBuyer';

type CarouselBuyerProps = {
    data: {
        nombre: string;
        talla: string;
        fecha: string;
        precio: number;
        numero: string;
        comprador: string;
        image: any;
        oferta?: number;
    }[];
};

const CarouselBuyer: React.FC<CarouselBuyerProps> = React.memo(({ data }) => {
    return (
        <View style={styles.containerAdd}>

            <Animated.FlatList
                scrollEventThrottle={16}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                decelerationRate="fast"
                horizontal={false}
                initialNumToRender={3}
                windowSize={10}
                automaticallyAdjustKeyboardInsets
                renderItem={({ item, index }) => (
                    <CarouselItemsBuyer
                        nombre={item.nombre}
                        talla={item.talla}
                        fecha={item.fecha}
                        precio={item.precio}
                        numero={item.numero}
                        comprador={item.comprador}
                        imageSrc={item.image}
                        index={index}
                        oferta={item.oferta}
                    />
                )}
            />
        </View>
    );
});

export { CarouselBuyer };

const styles = StyleSheet.create({
    containerAdd: {
        borderRadius: 10,
        marginTop: 15,
        flex: 1,
    },
});
