
import React, { useState } from 'react'
import { Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from 'src/components/Texts/Text'
import { Colors } from 'src/models/Colors/Colors';
import formatDate, { getDateWithoutDayOfWeek, getDayOfWeekFormatted } from 'src/utils/formateDate';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { Delivery, DeliveryStatus } from '../DeliveryList';
import CustomModal from 'src/components/Modal/Modal';
import ModalContent from './ModalContent';
const statusIcon: { [key in DeliveryStatus]: keyof typeof FontAwesome.glyphMap } = {
    pendiente: 'clock-o',
    vendido: 'check-circle',
    cancelado: 'times-circle',
};

const statusColors: { [key in DeliveryStatus]: string } = {
    pendiente: Colors.Dark3,
    vendido: Colors.Green,
    cancelado: Colors.Red,
};

export default function DeliveryCard({ item }: { item: Delivery }) {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View style={styles.contCard}>
            <View style={styles.contImage}>
                <Image source={item.image} style={styles.image} />
            </View >
            <View style={styles.contData}>
                <Text numberOfLines={1} style={styles.textDate} fontWeight='bold'>{formatDate(item.date)}</Text>
                <View style={styles.contBuyer}>
                    <Ionicons style={styles.iconAccount} name="person-circle" size={18} color="white" />
                    <Text fontWeight='semibold'>{item.buyer}</Text>
                </View>
                <View style={styles.contNumber}>
                    <TouchableOpacity>
                        <MaterialIcons name="content-copy" size={16} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="local-phone" size={16} color={Colors.White} />
                    </TouchableOpacity>
                    <Text fontWeight='bold'>{item.contact}</Text>
                </View>
                <TouchableOpacity style={styles.buttonSeeMore} onPress={toggleModal}>
                    <Text style={styles.textSeeMore} fontWeight='light'>Ver mas detalles</Text>
                </TouchableOpacity>
                <CustomModal isVisible={isModalVisible} onClose={toggleModal}>
                    <ModalContent
                        item={item}
                    />
                </CustomModal>
            </View>
            <View style={[styles.contHour, { backgroundColor: statusColors[item.status] }]}>
                <Text style={styles.textTime} fontWeight='extrabold'>{item.time}</Text>
                <FontAwesome name={statusIcon[item.status]} size={32} color="white" />
                <Text fontWeight='extrabold' style={styles.price}>${item.price}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    contImage: {
        height: 100,
        width: 80,
        marginVertical: 10
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 5
    },
    contCard: {
        backgroundColor: Colors.Dark2,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        borderRadius: 10
    },
    textDate: {
        fontSize: 16,
    },
    contHour: {
        backgroundColor: Colors.Dark3,
        width: 75,
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    contData: {
        width: '50%',
        gap: 3,
        paddingVertical: 10
    },
    price: {
        fontSize: 18,
    },
    textTime: {
        fontSize: 16,
        textAlign: 'center'
    },
    iconAccount: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5

    },
    contBuyer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    contNumber: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
    },
    buttonSeeMore: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    textSeeMore: {
        fontSize: 14,

    }
});

















/*
import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'src/models/Colors/Colors'
import Text from 'src/components/Texts/Text'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


import formatDate, { getDateWithoutDayOfWeek, getDayOfWeekFormatted } from 'src/utils/formateDate';
import { Delivery, DeliveryStatus } from '../DeliveryList';

const statusColors: { [key in DeliveryStatus]: string } = {
    pendiente: Colors.Dark3,
    vendido: Colors.Green,
    cancelado: Colors.Red,
};

const statusIcon: { [key in DeliveryStatus]: keyof typeof FontAwesome.glyphMap } = {
    pendiente: 'clock-o',
    vendido: 'check-circle',
    cancelado: 'times-circle',
};


export default function DeliveryCard({ item }: { item: Delivery }) {
    return (
        <View style={styles.cardContainer}>
            <View style={[styles.deliveryStatusContainer, { backgroundColor: statusColors[item.status] }]}>
                <FontAwesome name={statusIcon[item.status]} size={24} color="white" />
                <Text fontWeight='regular' style={styles.delivetyTo}>Entrega a las <Text fontWeight='extrabold' style={styles.time}>{item.time}</Text></Text>
                <Text fontWeight='extrabold' style={styles.statusText}>{item.status}</Text>
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
        backgroundColor: Colors.Dark1,
        borderRadius: 10,
        overflow: 'hidden',
    },
    deliveryStatusContainer: {
        backgroundColor: Colors.Dark3,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
        textTransform: 'capitalize',
        textAlign: 'center',
        width: '25%',
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
    */