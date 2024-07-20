import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from 'src/components/Texts/Text'
import { Colors } from 'src/models/Colors/Colors';
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Delivery } from '../DeliveryList';
import formatDate from 'src/utils/formateDate';
import Button from 'src/components/Buttons/Button';




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
                    <View>
                        <Text>Fecha</Text>
                        <View style={styles.contTextData}>
                            <Text fontWeight='bold' >{formatDate(item.date)}</Text>
                        </View>
                    </View>
                    <View>
                        <Text>Fecha</Text>
                        <View style={styles.contTextTime}>
                            <Text fontWeight='bold'>{item.time}</Text>
                        </View>
                    </View>
                    <View style={styles.contSell}>
                        <Text >Precio de venta</Text>
                        <Text fontWeight='semibold' >$ {item.price}</Text>

                    </View>
                </View>
            </View>
            <View style={styles.viewDataLocation}>
                <View>
                    <View>
                        <View style={styles.viewLocation}>
                            <MaterialIcons name="location-pin" size={22} color={Colors.White} />
                            <Text>Ubicacion</Text>
                        </View>
                    </View>
                    <View style={styles.contTextLocation}>
                        <Text numberOfLines={3} fontWeight='semibold' style={styles.textData}>{item.location}</Text>
                    </View>
                </View>
                <View style={styles.viewDataSize}>
                    <View style={styles.contSize}>
                        <Text>Talla</Text>
                        <View style={styles.viewSize}>
                            <MaterialCommunityIcons name="tshirt-crew" size={22} color={Colors.White} />
                            <Text>{item.size}</Text>
                        </View>
                    </View>
                    <Text style={styles.textBuyer}>Para: {item.buyer}</Text>
                    <View style={styles.viewSize}>
                        <MaterialIcons name="content-copy" size={22} color="white" />
                        <Text>{item.contact}</Text>
                    </View>
                </View>

            </View>
            <View style={styles.contButton}>
                <Button
                    style={styles.buttonRed}
                    size='Medium'
                    title='Cancelar'
                    onPress={() => { }}
                />
                <Button
                    style={styles.buttonGreen}
                    size='Medium'
                    title='Completar entrega'
                    onPress={() => { }}
                />
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
        gap: 15,
        paddingLeft: 30,
    },
    contSell: {
        gap: 5
    },
    textData: {
    },
    viewLocation: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5,
        gap: 2
    },
    inputlocation: {
        marginTop: 10,
        width: 100,
    },
    contTextData: {
        marginTop: 5,
        paddingTop: 5,
        backgroundColor: Colors.Dark1,
        paddingBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '72%'
    },
    contTextTime: {
        marginTop: 5,
        paddingTop: 5,
        backgroundColor: Colors.Dark1,
        paddingBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '45%'
    },
    contTextLocation: {
        width: 170,
        height: 85,
        marginTop: 5,
        paddingTop: 5,
        backgroundColor: Colors.Dark1,
        paddingBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    viewDataLocation: {
        flexDirection: 'row'
    },
    viewSize: {
        gap: 5,
        flexDirection: 'row',
        marginTop: 5,
    },
    viewDataSize: {
        paddingLeft: 30
    },
    contSize: {
        paddingTop: 10
    },
    textBuyer: {
        marginTop: 10,
        marginBottom: 5
    },
    contButton: {
        marginTop: 30,
        marginBottom: 20,
        flexDirection: 'row',
        width: '100%'
    },
    buttonRed: {
        flex: 1,
        backgroundColor: Colors.Red,
        marginRight: 18,

    },
    buttonGreen: {
        flex: 1,
        backgroundColor: Colors.Green,
        marginLeft: 18,
    }
});


