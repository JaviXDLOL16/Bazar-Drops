import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useRef } from 'react'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import Text from 'src/components/Texts/Text'
import Input from 'src/components/form/Input'
import Button from 'src/components/Buttons/Button'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { stackParamList } from 'App'
import BottomSheet, { BottomSheetTextInput, BottomSheetView } from '@gorhom/bottom-sheet';
import { Colors } from 'src/models/Colors/Colors'
import InputDate from 'src/components/form/InputDate'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


type Props = NativeStackScreenProps<stackParamList, 'NewSalesPeriod'>


export default function NewSalesPeriod({ navigation }: Props) {

    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ["60%"], []);

    const openBottomSheet = () => bottomSheetRef.current?.expand()


    return (
        <ScreenContainer>
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                extraScrollHeight={Platform.OS === "ios" ? 20 : 100}
                enableOnAndroid={true}
                enableAutomaticScroll={Platform.OS === "ios"}
            >
                <Text fontWeight='bold' style={styles.title}>Crear nuevo periodo de ventas</Text>

                <View style={styles.containerInpuDate}>
                    <View style={styles.containerDate}>
                        <InputDate
                            placeholder='Fecha de inicio'
                            title='Inicio'
                            requeriment='*Obligatorio'
                            mode='date'
                        />
                    </View>
                    <View style={styles.containerHour}>
                        <InputDate
                            placeholder='Fecha de fin'
                            title='Fin'
                            requeriment='*Obligatorio'
                            mode='date'
                        />
                    </View>
                </View>

                <Input style={styles.inputName} placeholder='Identifica el periodo más facilmente' requeriment='Recomendado' title='Nombre' />
                <Input style={styles.inputName} placeholder='Elige una ubicacion predeterminada' requeriment='*Obligatorio' title='Ubicacion de entregas' />

                <View style={styles.deliveryDaysContainer}>
                    <TouchableOpacity onPress={openBottomSheet}>
                        <Text style={styles.deliveryDays}>+ Agregar días de entrega</Text>
                    </TouchableOpacity>
                </View>

                <Button title='Crear periodo' onPress={() => { }} />
                <BottomSheet index={-1} snapPoints={snapPoints} enablePanDownToClose ref={bottomSheetRef} handleIndicatorStyle={{ backgroundColor: Colors.Gray }} backgroundStyle={{ backgroundColor: Colors.Dark2 }}>
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
                        <InputDate
                            placeholder='Dia de entrega'
                            title='Dia'
                            requeriment='*Obligatorio'
                            mode='date'
                        />
                        <InputDate
                            placeholder='Hora de entrega'
                            title='Hora'
                            requeriment='*Obligatorio'
                            mode='time'
                        />
                    </BottomSheetView>
                </BottomSheet>

            </KeyboardAwareScrollView>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        marginBottom: 35,
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
    containerInpuDate: {
        flexDirection: 'row',
    },
    containerDate: {
        paddingRight: 10,
        width: '50%',
    },
    containerHour: {
        width: '50%',
        paddingLeft: 10
    },
})