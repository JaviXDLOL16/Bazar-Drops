import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Text from 'src/components/Texts/Text';
import { Delivery } from '../NewDelivery';
import SelectButton from 'src/components/Buttons/SelectButton';
import { Colors } from 'src/models/Colors/Colors';

interface ContentClothesProps {
    deliveries: Delivery[];
    onSelect: (delivery: Delivery) => void;
}

export default function ContentClothes({ deliveries, onSelect }: ContentClothesProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
    };
    return (
        <>
            <View style={styles.contTitle}>
                <Text>Seleccionar prenda</Text>
            </View>
            <SelectButton
                title="Filtrar prendas"
                placeholder="Seleccione"
                options={['Opción uno', 'Opción dos', 'Opción tres']}
                onSelect={handleSelect}
            />
            <ScrollView contentContainerStyle={styles.container}>
                {deliveries.map((delivery) => (
                    <TouchableOpacity
                        key={delivery.id}
                        style={styles.itemContainer}
                        onPress={() => onSelect(delivery)}
                    >
                        <View style={styles.contImage}>
                            <Image source={delivery.image} style={styles.image} />
                        </View>
                        <View style={styles.contDataText} >
                            <View style={styles.textContainerDescription}>
                                <Text numberOfLines={2}>{delivery.description}</Text>
                            </View >
                            <View style={styles.contPrices} >
                                <View style={styles.contTextPrice}>
                                    <Text style={styles.textPrice}>Precio compra</Text>
                                    <Text fontWeight='extrabold'>$ {delivery.buysPrice}</Text>
                                </View>
                                <View style={styles.contTextPrice}>
                                    <Text style={styles.textPrice}>Precio venta</Text>
                                    <Text fontWeight='extrabold'>$ {delivery.buysPrice}</Text>
                                </View>
                            </View>
                        </View>

                    </TouchableOpacity>
                ))}
            </ScrollView>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
    },
    contImage: {
        width: 90,
        height: 96,
        marginRight: 15,

    },
    contTitle: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    itemContainer: {
        backgroundColor: Colors.Dark1,
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10,
        borderRadius: 15,

    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10

    },
    textContainerDescription: {
        alignItems: 'center',
        marginTop: 5
    },
    contDataText: {
        gap: 15
    },
    contPrices: {
        gap: 15,
        flexDirection: 'row'
    },
    textPrice: {
        color: Colors.Gray2,
        marginBottom: 5
    },
    contTextPrice: {
        alignItems: 'center'
    }

});
