import React, { useState } from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from 'src/components/Texts/Text';
import { Colors } from 'src/models/Colors/Colors';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import Icon from 'src/components/Buttons/Icon';

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

    const getStatusBackgroundColor = (status: string) => {
        switch (status) {
            case 'Vendidos':
                return Colors.Red;
            case 'Oculto':
                return Colors.Blue3;
            default:
                return Colors.Green;
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Vendidos':
                return <MaterialIcons name="cancel" size={18} color={Colors.White} />;
            case 'Oculto':
                return <MaterialIcons name="visibility-off" size={18} color={Colors.White} />;
            default:
                return <MaterialIcons name="check-circle" size={18} color={Colors.White} />;
        }
    };

    return (
        <View key={delivery.id} style={styles.itemContainer}>
            <View style={styles.contData}>
                <View style={styles.contImage}>
                    <Image source={delivery.image} style={styles.image} />
                </View>
                <View style={styles.contDataText}>
                    <View style={styles.textContainerDescription}>
                        <Text style={{ textAlign: 'center' }} numberOfLines={showMore ? 2 : 1}>{delivery.description}</Text>
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
                    <Icon
                        status={delivery.status}
                    />
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
                    <View style={styles.contTypeSize}>
                        <View>
                            <Text style={styles.textTitle}>Estado</Text>
                            <View style={[styles.contStatus, { backgroundColor: getStatusBackgroundColor(delivery.status) }]}>
                                {getStatusIcon(delivery.status)}
                                <Text style={styles.textStatus}>{delivery.status}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textTitle}>Fecha de venta</Text>
                            <Text style={styles.textPlace}>{formatDate(delivery.dateBuy)}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonSeeLess} onPress={() => setShowMore(false)}>
                        <Text style={styles.ViewAll}>Ver menos</Text>
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
        paddingVertical: 10,
        paddingHorizontal: 15,
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
        flex: 1,
        justifyContent: 'space-around'
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
        marginTop: 10
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
    },
    contType: {
        flexDirection: 'row'
    },
    contStatus: {
        paddingVertical: 5,
        paddingHorizontal: 25,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    textStatus: {
        color: Colors.White,
        marginLeft: 5,
    },
    buttonSeeLess: {
        marginTop: 15
    }
});

export default CardSalesPeriod;
