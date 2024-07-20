import React, { useState } from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'src/components/Buttons/Icon';
import Text from 'src/components/Texts/Text';
import { Colors } from 'src/models/Colors/Colors';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


export interface Delivery {
    id: string;
    dateBuy: Date;
    time: string;
    location: string;
    price: number;
    buyer: string;
    contact: string;
    image: any;
    description: string;
    size: string;
    type: string;
    buysPrice: number;
    status: string;
    shopPlace: string;

}

interface CardSalesPeriodProps {
    delivery: Delivery;
}

const CardSalesPeriod: React.FC<CardSalesPeriodProps> = ({ delivery }) => {
    const [showMore, setShowMore] = useState(false);

    const formatDate = (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of year
        return `${day}/${month}/${year}`;
    };
    return (

        <View
            key={delivery.id}
            style={styles.itemContainer}
        >
            <View style={styles.contData}>
                <View style={styles.contImage}>
                    <Image source={delivery.image} style={styles.image} />
                </View>
                <View style={styles.contDataText}>
                    <View style={styles.textContainerDescription}>
                        <Text style={{ textAlign: 'center' }} numberOfLines={2}>{delivery.description}</Text>
                    </View>
                    <View style={styles.contPrices}>
                        <View style={styles.contTextPrice}>
                            <Text style={styles.textPrice}>Precio compra</Text>
                            <Text fontWeight='extrabold'>$ {delivery.buysPrice}</Text>
                        </View>
                        <View style={styles.contTextPrice}>
                            <Text style={styles.textPrice}>Precio venta</Text>
                            <Text fontWeight='extrabold'>$ {delivery.price}</Text>
                        </View>
                    </View>
                </View>
            </View>
            {!showMore && (
                <TouchableOpacity
                    style={styles.contViewAll}
                    onPress={() => setShowMore(true)}
                >
                    <Text style={styles.ViewAll}>Ver todo</Text>
                    <Icon status={delivery.status} />
                </TouchableOpacity>
            )}
            {showMore && (
                <>
                    <View style={styles.contPlaceDate}>
                        <View style={styles.contPlace}>
                            <Text style={styles.textTitle}>Lugar de compra</Text>
                            <Text style={styles.textPlace}>{delivery.shopPlace}</Text>
                        </View>
                        <View style={styles.contDate}>
                            <Text style={styles.textTitle}>Fecha de compra</Text>
                            <Text style={styles.textPlace}>{formatDate(delivery.dateBuy)}</Text>
                        </View>
                    </View>
                    <View style={styles.contTypeSize}>
                        <View>
                            <Text style={styles.textTitle}>Tipo</Text>
                            <Text style={styles.textType}>{delivery.type}</Text>
                        </View>
                        <View >
                            <Text style={styles.textTitle}>Talla</Text>
                            <View style={styles.textSize}>
                                <FontAwesome5 name="tshirt" size={12} color="white" />
                                <Text>{delivery.size}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => setShowMore(false)}
                    >
                        <Text style={styles.ViewAll}>Ver todo</Text>
                    </TouchableOpacity>
                </>

            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    contImage: {
        width: 80,
        height: 86,
        marginRight: 15,
    },
    contData: {
        marginTop: 5,
        flexDirection: 'row'
    },
    contTitle: {
        width: '100%',
        alignItems: 'center',
    },
    itemContainer: {
        backgroundColor: Colors.Dark2,
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
    },
    contDataText: {
        alignItems: 'center',
        gap: 10,
        flex: 1
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
    },
    contViewAll: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ViewAll: {
        textAlign: 'center',
        flex: 1,
        marginLeft: '7%',
        fontSize: 14,
        color: Colors.Gray2
    },
    additionalInfo: {
    },
    contPlaceDate: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        marginTop: 5
    },
    contPlace: {
        width: '60%',
        paddingRight: 20
    },
    textPlace: {
        backgroundColor: Colors.Dark1,
        padding: 5,
        borderRadius: 5
    },
    textTitle: {
        color: Colors.Gray2,

    },
    contDate: {
        width: '40%',
    },
    contTypeSize: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        gap: 15
    },
    textType: {
        backgroundColor: Colors.Dark3,
        paddingVertical: 5,
        paddingHorizontal: 25,
        borderRadius: 5
    },
    textSize: {
        paddingVertical: 5,
        backgroundColor: Colors.Blue4,
        borderRadius: 5,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    }
});

export default CardSalesPeriod;
