import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from 'src/ui/components/Buttons/Button'
import Text from 'src/ui/components/Texts/Text'
import { Colors } from 'src/ui/models/Colors/Colors'
import { FontAwesome5 } from '@expo/vector-icons';

export default function ContentModalPeriod() {
    return (
        <>
            <View style={styles.contButtons}>
                <Button
                    title='Solicitudes de venta'
                    size='Medium'
                    onPress={() => { }}
                    style={styles.buutonSell}
                />
                <Button
                    title='Entregas'
                    size='Medium'
                    onPress={() => { }}
                    style={styles.buttonDeliveries}
                />
            </View>
            <Text fontWeight='bold' style={styles.textSells}>Metas de venta</Text>
            <View style={styles.contClothes}>
                <View style={styles.contSellAll}>
                    <FontAwesome5 name="tshirt" size={20} color="white" />
                    <Text style={styles.textFont}>Prendas Vendidas totales</Text>
                </View>
                <Text fontWeight='bold' style={styles.textSendAll}>6/24</Text>
            </View>
            <View style={styles.contSellAllIcon}>
                <FontAwesome5 name="dollar-sign" size={20} color="white" />
                <Text style={styles.textFont}>Venta total</Text>
            </View>
            <Text fontWeight='bold' style={styles.textSendAll}>$180 / $720</Text>
            <View style={styles.contSellAllNumber}>
                <View style={styles.contSell}>
                    <View style={styles.contSellAllIcon}>
                        <FontAwesome5 name="dollar-sign" size={20} color="white" />
                        <Text style={styles.textFont}>Ganancia total</Text>
                    </View>
                    <Text fontWeight='bold' style={styles.textSendAll}>$1920</Text>
                </View>


                <View style={styles.contActually}>
                    <Text style={styles.textBlue} fontWeight='bold'>Actual</Text>
                    <Text fontWeight='bold' style={styles.textBlueFont}>$480</Text>
                </View>
            </View>
            <View style={styles.contSellAllNumberfirts}>
                <View style={styles.contSell}>
                    <View style={styles.contSellAllIcon}>
                        <FontAwesome5 name="dollar-sign" size={20} color="white" />
                        <Text style={styles.textFont}>Ganancias netas</Text>
                    </View>
                    <Text fontWeight='bold' style={styles.textSendAll}>$1200</Text>
                </View>


                <View style={styles.contActually}>
                    <Text style={styles.textBlue} fontWeight='bold'>Actual</Text>
                    <Text fontWeight='bold' style={styles.textBlueFont}>$480</Text>
                </View>
            </View>
            <Button
                title='Finalizar periodo de ventas'
                size='Medium'
                onPress={() => { }}
                style={styles.buttonEnd}
            />
        </>
    )
}


const styles = StyleSheet.create({
    contButtons: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buutonSell: {
        backgroundColor: Colors.Blue2
    },
    buttonDeliveries: {
        paddingHorizontal: 25,
        backgroundColor: Colors.Blue

    },
    textSells: {
        fontSize: 20,
        marginTop: 30,
        color: Colors.Gray2
    },
    contSellAll: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        gap: 10
    },
    textSendAll: {
        fontSize: 22,
        marginTop: 5,
        marginLeft: 35
    },
    contSellAllNumber: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        gap: 45
    },
    contActually: {
        gap: 5,
        alignItems: 'center'
    },
    textBlue: {
        color: Colors.Blue3,
        fontSize: 20
    },
    textBlueFont: {
        fontSize: 22,
        color: Colors.Blue3
    },
    textFont: {
        fontSize: 20
    },
    contSellAllIcon: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 25
    },
    contSell: {
        alignItems: 'flex-start'

    },
    contSellAllNumberfirts: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        gap: 30
    },
    contClothes: {
        marginBottom: 20
    },
    buttonEnd: {
        backgroundColor: Colors.Red,
        marginTop: 30
    }
});