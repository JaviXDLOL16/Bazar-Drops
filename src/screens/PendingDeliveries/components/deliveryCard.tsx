
import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { getDayOfWeekFormatted, getDateWithoutDayOfWeek } from 'src/utils/formateDate'
import { Colors } from 'src/models/Colors/Colors'
import Text from 'src/components/Texts/Text'
import { Ionicons } from '@expo/vector-icons';


export default function deliveryCard({ item }) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.principalContent}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.center}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateTitle}>{`Fecha de entrega ${getDayOfWeekFormatted(item.date)}`}</Text>
                        <Text style={styles.date}>{getDateWithoutDayOfWeek(item.date)}</Text>
                    </View>
                    <View styles={styles.locationContainer}>
                        <Ionicons name="location" size={0} color="white" />
                        <Text style={styles.buyerText}>{item.location}</Text>
                    </View>
                    <View style={styles.contactContainer}>
                        <Text style={styles.contactName}>Para: Raúl Espada</Text>
                        <Text style={styles.contactCellNumber}>{item.contact}</Text>
                    </View>
                    <Text style={styles.details}>Selecciona para ver detalles</Text>
                </View>
            </View>
            <View style={styles.sideContainer}>
                <Text style={styles.timeText}>{item.time}</Text>
                <Text style={styles.priceText}>{item.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: Colors.Dark2,
        borderRadius: 10,
        height: 100,
        overflow: 'hidden',
    },
    principalContent: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    center: {
        flex: 1,
        marginLeft: 10,
    },

    dateContainer: {
        marginBottom: 5,
    },
    dateTitle: {
        fontSize: 14,
    },
    date: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    buyerText: {
        color: 'white',
    },
    sideContainer: {
        alignItems: 'flex-end',
        backgroundColor: Colors.Dark1,
    },
})
