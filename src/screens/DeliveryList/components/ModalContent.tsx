import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from 'src/components/Texts/Text'
import { Colors } from 'src/models/Colors/Colors';
import { MaterialIcons } from "@expo/vector-icons";
import { Delivery } from '../DeliveryList';
import formatDate from 'src/utils/formateDate';
import Input from 'src/components/form/Input';



export default function ModalContent({ item }: { item: Delivery }) {
    return (
        <>
            <View style={styles.contTitle}>
                <Text fontWeight='bold' style={styles.textDetail}>Detalles de la entrega</Text>
                <TouchableOpacity style={styles.buttonEdit}>
                    <MaterialIcons name="edit" size={22} color={Colors.Blue3} />
                    <Text fontWeight='medium' style={styles.textEdit}>Editar</Text>
                </TouchableOpacity>
            </View>
            <Text fontWeight='bold' style={styles.textDescription}>{item.description}</Text>
            <View style={styles.contData}>
                <View style={styles.contDataImage}>
                    <View style={styles.contImage}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                    <View style={styles.contTextType}>
                        <Text fontWeight='regular' style={styles.textType}>{item.type}</Text>
                    </View>
                </View>
                <View style={styles.contDataText}>
                    <Input
                        title='Fecha'
                        placeholder={formatDate(item.date)}
                    />

                </View>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    contTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textDetail: {
        fontSize: 20
    },
    textEdit: {
        color: Colors.Blue3,
        fontSize: 20,
        marginLeft: 6
    },
    buttonEdit: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    textDescription: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    contDataImage: {
    },
    contImage: {
        height: 200,
        width: 170
    },
    image: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        height: '100%'
    },
    contTextType: {
        backgroundColor: Colors.Dark1,
        alignItems: 'center',
        height: 33,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    contData: {
        flexDirection: 'row'
    },
    textType: {
        marginTop: 2,
        color: Colors.Gray2
    },
    contDataText: {
        marginLeft: 10
    }
});


