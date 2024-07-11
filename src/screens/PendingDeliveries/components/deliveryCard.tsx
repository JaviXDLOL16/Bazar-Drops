
import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'src/models/Colors/Colors'
import Text from 'src/components/Texts/Text'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import formatDate, { getDateWithoutDayOfWeek, getDayOfWeekFormatted } from 'src/utils/formateDate';


export default function deliveryCard({ item }) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.deliveryStatusContainer}>
                <MaterialCommunityIcons name="clock-time-four-outline" size={30} color="white" />
                <Text fontWeight='regular' style={styles.delivetyTo}>Entrega a las <Text fontWeight='extrabold' style={styles.time}>{item.time}</Text></Text>
                <Text fontWeight='bold' style={styles.statusText}>Pendiente</Text>
                {/*<FontAwesome name="check" size={30} color="white" />*/}
                {/*<FontAwesome name="close" size={30} color="white" />*/}
            </View>
            <View style={styles.principal}>
                <View style={styles.details}>
                    <Text fontWeight='semibold' style={styles.date}>{formatDate(item.date)}</Text>
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationText}>Lugar de entrega {item.location}</Text>
                        <Ionicons name="location" size={14} color={Colors.Gray2} />
                    </View>
                    <View style={styles.buyerContainer}>
                        <Text fontWeight='bold' style={styles.buyerTitle}>Comprador</Text>
                        <Text fontWeight='regular' style={styles.buyerName} numberOfLines={1}>Leonardo Yahel Espinosa</Text>
                    </View>
                    <View style={styles.cellNumberContainer}>

                        <Text fontWeight='bold' style={styles.buyerCellNumber}>{item.contact}</Text>
                        <MaterialIcons name="local-phone" size={18} color={Colors.White} />
                        <MaterialIcons name="content-copy" size={16} color="white" />

                    </View>
                    <Text style={styles.moreDetails}>Selecciona para ver detalles</Text>
                </View>
                <View style={styles.imageAndPriceSide}>
                    <Image source={item.image} style={styles.image} />
                    <Text fontWeight='900' style={styles.price}>{item.price}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 10,
        backgroundColor: Colors.Dark2,
        borderRadius: 10,
        overflow: 'hidden',
    },
    deliveryStatusContainer: {
        backgroundColor: Colors.Dark3,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    delivetyTo: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 10,
    },
    time: {
        fontSize: 18,
    },
    statusText: {
        fontSize: 16,
    },
    principal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        gap: 10,
    },
    details: {
        paddingVertical: 10,
        width: '70%',
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 5,
    },
    locationText: {
        fontSize: 14,
        color: Colors.Gray2,

    },
    buyerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        gap: 5,

    },
    buyerTitle: {
        fontSize: 16,
    },
    buyerName: {
        fontSize: 16,
        width: '60%',
    },
    cellNumberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
    },
    buyerCellNumber: {
        fontSize: 18,
    },
    moreDetails: {
        fontSize: 14,
        color: 'gray',

    },
    imageAndPriceSide: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        width: '25%',
        overflow: 'hidden',

    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 5,
    },

    price: {
        fontSize: 18,
    },




})
