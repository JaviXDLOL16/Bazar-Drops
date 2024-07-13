import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import Text from 'src/components/Texts/Text'
import Input from 'src/components/form/Input'
import Button from 'src/components/Buttons/Button'

export default function NewSalesPeriod() {
    return (
        <ScreenContainer>
            <Text fontWeight='bold' style={styles.title}>Crear nuevo periodo de ventas</Text>

            <View style={styles.intervalOfSales}>
                <Input style={styles.inputPeriodStart} placeholder='Fecha de inicio' requeriment='*Obligatorio' title='Inicio' />
                <Input style={styles.inputPeriodStart} placeholder='Fecha de fin' requeriment='*Obligatorio' title='Final' />
            </View>

            <Input style={styles.inputName} placeholder='Identifica el periodo más facilmente' requeriment='Recomendado' title='Nombre' />

            <View style={styles.deliveryDaysContainer}>
                <TouchableOpacity>
                    <Text style={styles.deliveryDays}>+ Agregar días de entrega</Text>
                </TouchableOpacity>
            </View>

            <Button title='Crear periodo' onPress={() => { }} />


        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        marginBottom: 35,
    },
    intervalOfSales: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
    },
    inputPeriodStart: {
        width: '100%',
    },
    deliveryDaysContainer: {
        borderColor: 'white',
        height: 80,
        marginBottom: 40,
    },
    inputName: {
        marginBottom: 20,

    },
    deliveryDays: {
        fontSize: 20,
    },
})