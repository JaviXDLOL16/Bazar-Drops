import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';
import { CarouselCardsItems } from './CarouseItems ';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';
import Text from '../Texts/Text';
import useStackNavigation from 'src/hooks/useStackNavigation';

type CarouselCardsProps = {
    data: { nombre: string; talla: string; precio: number; image: string; }[];
};

const { width: windowWidth } = Dimensions.get('window');
const ListItemWidth = windowWidth / 3.5; // Ajuste para mostrar tres tarjetas completas

const CarouselCards: React.FC<CarouselCardsProps> = ({ data }) => {

    const navigation = useStackNavigation();

    const scrollX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollX.value = event.contentOffset.x;
    });

    return (
        <>
            <View style={styles.containerAdd}>
                <Text fontWeight='bold' style={styles.textAdd}>Últimos agregados disponibles</Text>
                <Animated.FlatList
                    scrollEventThrottle={16}
                    onScroll={scrollHandler}
                    data={data}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    snapToInterval={ListItemWidth}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <CarouselCardsItems
                            nombre={item.nombre}
                            talla={item.talla}
                            precio={item.precio}
                            imageSrc={item.image}
                            index={index}
                            scrollX={scrollX}
                            listItemWidth={ListItemWidth}
                        />
                    )}
                    contentContainerStyle={{ paddingHorizontal: 5 }} // Ajuste de padding horizontal
                />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonSell} onPress={() => navigation.navigate('SalesPeriod')}>
                <Text fontWeight='extrabold' style={styles.textSell}>Ir a periodo actual de ventas</Text>
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
        marginVertical: 15,
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
        color: Colors.Blue,
    },
});
