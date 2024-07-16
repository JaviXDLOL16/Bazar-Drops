import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useRef } from 'react'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import Text from 'src/components/Texts/Text'
import Input, { inputStyles } from 'src/components/form/Input'
import Button from 'src/components/Buttons/Button'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { stackParamList } from 'App'
import BottomSheet, { BottomSheetTextInput, BottomSheetView } from '@gorhom/bottom-sheet';
import { Colors } from 'src/models/Colors/Colors'


type Props = NativeStackScreenProps<stackParamList, 'NewSalesPeriod'>


export default function NewSalesPeriod({ navigation }: Props) {

    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ["60%"], []);

    const openBottomSheet = () => bottomSheetRef.current?.expand()


    return (
        <ScreenContainer>
            <Text fontWeight='bold' style={styles.title}>Crear nuevo periodo de ventas</Text>

            <View style={styles.intervalOfSales}>
                <Input style={styles.inputPeriodStart} placeholder='Fecha de inicio' requeriment='*Obligatorio' title='Inicio' />
                <Input style={styles.inputPeriodStart} placeholder='Fecha de fin' requeriment='*Obligatorio' title='Final' />
            </View>

            <Input style={styles.inputName} placeholder='Identifica el periodo más facilmente' requeriment='Recomendado' title='Nombre' />

            <View style={styles.deliveryDaysContainer}>
                <TouchableOpacity onPress={openBottomSheet}>
                    <Text style={styles.deliveryDays}>+ Agregar días de entrega</Text>
                </TouchableOpacity>
            </View>

            <Button title='Crear periodo' onPress={() => { }} />
            <BottomSheet index={-1} snapPoints={snapPoints} enablePanDownToClose ref={bottomSheetRef} handleIndicatorStyle={{ backgroundColor: 'white' }} backgroundStyle={{ backgroundColor: Colors.Dark2 }}>
                <BottomSheetView style={{ paddingHorizontal: 20, gap: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text fontWeight='bold'
                            style={{ fontSize: 20, paddingTop: 30 }}
                        >Añadir nuevo día de entrega</Text>
                        <TouchableOpacity onPress={() => { }}>
                            <Text
                                fontWeight='extrabold'
                                style={{ fontSize: 30, paddingTop: 30, lineHeight: 30, paddingHorizontal: 10 }}
                            >+</Text>
                        </TouchableOpacity>
                    </View>
                    <Input title='Hora' requeriment='*Obligatorio' />
                </BottomSheetView>
            </BottomSheet>


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