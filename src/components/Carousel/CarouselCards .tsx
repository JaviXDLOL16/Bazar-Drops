
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';
import { CarouselCardsItems } from './CarouselCardsItems ';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';

type CarouselCardsProps = {
    data: { nombre: string; talla: string; precio: number; image: string; }[];
};

const { width: windowWidth } = Dimensions.get('window');
const ListItemWidth = windowWidth / 3.75;

const CarouselCards: React.FC<CarouselCardsProps> = ({ data }) => {
    const scrollX = useSharedValue(ListItemWidth);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollX.value = event.contentOffset.x;
    });

    return (
        <>
            <View style={styles.containerAdd}>
                <Text style={styles.textAdd}>Últimos agregados disponibles</Text>
                <Animated.FlatList
                    scrollEventThrottle={16}
                    onScroll={scrollHandler}
                    data={data}
                    keyExtractor={(_, index: any) => index.toString()}
                    horizontal
                    snapToInterval={ListItemWidth} // Hace que las tarjetas se alineen al centro
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <CarouselCardsItems
                                nombre={item.nombre}
                                talla={item.talla}
                                precio={item.precio}
                                imageSrc={item.image}
                                index={index}
                                scrollX={scrollX}
                                listItemWidth={ListItemWidth}
                            />
                        );
                    }}
                />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonSell}>
                <Text style={styles.textSell}>Ir a periodo actual de ventas</Text>
            </TouchableOpacity>
        </>
    );
};

export { CarouselCards };

const styles = StyleSheet.create({
    containerAdd: {
        backgroundColor: Colors.Dark2,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        paddingHorizontal: 10,
    },
    textAdd: {
        color: 'white',
        marginVertical: 12,
        fontWeight: '600',
    },
    buttonSell: {
        height: 40,
        backgroundColor: Colors.Dark1,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSell: {
        fontSize: 16,
        color: 'white',
    },
});