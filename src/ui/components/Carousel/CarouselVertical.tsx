import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from 'src/ui/models/Colors/Colors';
import { CarouseItemsVertical } from './CarouseItemsVertical';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';

type CarouselVerticalProps = {
    data: { nombre: string; talla: string; fecha: string; precio: number; descripcion: string; image: string; }[];
};

const { height: windowHeight } = Dimensions.get('window');
const ListItemHeight = windowHeight / 7.5;

const CarouselVertical: React.FC<CarouselVerticalProps> = ({ data }) => {
    const scrollY = useSharedValue(0); // Asegura que scrollY inicie desde el principio

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });

    return (
        <>
            <View style={styles.containerAdd}>
                <View style={styles.contText}>
                    <View style={styles.contRecents}>
                        <Text style={styles.textRecents}>Vendidos recientemente</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.textAll}>Ver todo</Text>
                    </TouchableOpacity>
                </View>

                <Animated.FlatList
                    scrollEventThrottle={16}
                    onScroll={scrollHandler}
                    data={data}
                    keyExtractor={(_, index) => index.toString()}
                    snapToInterval={ListItemHeight}
                    decelerationRate="fast"
                    pagingEnabled
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    renderItem={({ item, index }) => {
                        return (
                            <CarouseItemsVertical
                                nombre={item.nombre}
                                talla={item.talla}
                                fecha={item.fecha}
                                precio={item.precio}
                                descripcion={item.descripcion}
                                imageSrc={item.image}
                                index={index}
                                scrollY={scrollY}
                                listItemHeight={ListItemHeight}
                            />
                        );
                    }}
                />
            </View>
        </>
    );
};

export { CarouselVertical };

const styles = StyleSheet.create({
    contText: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    textRecents: {
        color: 'white',
        marginVertical: 12,
        fontWeight: '600',
    },
    textAll: {
        color: '#FFFFFF60',
        marginVertical: 12,
        fontWeight: '400',
        textAlign: 'right'
    },
    contRecents: {
        width: '50%'
    },
    contAll: {
        width: '50%',
    },
    containerAdd: {
        borderRadius: 10,
        height: windowHeight / 3,
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
        fontWeight: '700',
        color: Colors.Blue,
    },
});
