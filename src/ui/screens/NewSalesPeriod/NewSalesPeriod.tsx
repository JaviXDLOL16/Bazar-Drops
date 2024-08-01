import { Alert, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useRef, useState } from 'react'
import ScreenContainer from 'src/ui/components/layout/ScreenContainer'
import Text from 'src/ui/components/Texts/Text'
import Input from 'src/ui/components/form/Input'
import Button from 'src/ui/components/Buttons/Button'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { stackParamList } from 'App'
import BottomSheet, { BottomSheetTextInput, BottomSheetView } from '@gorhom/bottom-sheet';
import { Colors } from 'src/ui/models/Colors/Colors'
import InputDate from 'src/ui/components/form/InputDate'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NewPeriod } from 'src/lib/Inventory/domain/Period'
import { createAxiosPeriodRepository } from 'src/lib/Inventory/infrastructure/AxiosPeriodRepository'
import { createPeriodService } from 'src/lib/Inventory/application/PeriodService'
import { useFocusEffect } from '@react-navigation/native'
import { useAuth } from 'src/ui/contexts/AuthContext'
import { formatDateSimple } from 'src/ui/utils/formateDate'


type Props = NativeStackScreenProps<stackParamList, 'NewSalesPeriod'>

const repository = createAxiosPeriodRepository();
const service = createPeriodService(repository);

export default function NewSalesPeriod({ navigation }: Props) {

    const { getUserInformation } = useAuth();

    const newPeriodEmpty: Partial<NewPeriod> = { start: formatDateSimple(new Date().toString()), end: undefined, location: '', name: '', status_id: 'actual', user_id: undefined }

    const [newPeriod, setNewPeriod] = useState<Partial<NewPeriod>>(newPeriodEmpty)
    const [isLoading, setIsLoading] = useState(false)
    const [userId, setUserId] = useState(undefined)

    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ["60%"], []);

    const openBottomSheet = () => bottomSheetRef.current?.expand()

    useFocusEffect(
        React.useCallback(() => {
            const loadUser = async () => {
                const result = await getUserInformation!();
                setUserId(result.id);
            }
            loadUser();
        }, [])
    );

    const savePeriod = async () => {
        setIsLoading(true)
        newPeriod.user_id = userId
        console.log(newPeriod)

        const { start, end, location, name } = newPeriod

        if (!start || !end || !location) {
            Alert.alert('Error', 'Debes llegar todos los campos *Obligatorio')
            setIsLoading(false)
            return
        }


        try {
            await service.save(newPeriod as NewPeriod)
            Alert.alert('Correcto', 'Periodo de ventas creado', [
                { text: 'OK', onPress: () => navigation.navigate('SalesPeriodList') }
            ]);
        } catch (error) {
            alert(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <ScreenContainer style={{ paddingTop: 50 }}>
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                extraScrollHeight={Platform.OS === "ios" ? 20 : 100}
                enableOnAndroid={true}
                enableAutomaticScroll={Platform.OS === "ios"}
            >

                <View style={styles.containerInpuDate}>
                    <View style={styles.containerDate}>
                        <InputDate
                            value={newPeriod.start}
                            onChange={(value) => setNewPeriod({ ...newPeriod, start: value })}
                            disabled
                            placeholder='Fecha de inicio'
                            title='Inicio'
                            requeriment='*Obligatorio'
                            mode='date'
                        />
                    </View>
                    <View style={styles.containerHour}>
                        <InputDate
                            value={newPeriod.end}
                            onChange={(value) => setNewPeriod({ ...newPeriod, end: formatDateSimple(value) })}
                            loading={isLoading}
                            placeholder='Fecha de fin'
                            title='Fin'
                            requeriment='*Obligatorio'
                            mode='date'
                        />
                    </View>
                </View>

                <Input
                    value={newPeriod.name}
                    onChangeText={(value) => setNewPeriod({ ...newPeriod, name: value })}
                    loading={isLoading}
                    style={styles.inputName}
                    placeholder='Identifica el periodo más facilmente'
                    requeriment='Recomendado'
                    title='Nombre'
                />

                <Input
                    value={newPeriod.location}
                    onChangeText={(value) => setNewPeriod({ ...newPeriod, location: value })}
                    loading={isLoading}
                    style={styles.inputName}
                    placeholder='Elige una ubicacion predeterminada'
                    requeriment='*Obligatorio'
                    title='Ubicacion de entregas'
                />

                {/*<View style={styles.deliveryDaysContainer}>
                    <TouchableOpacity onPress={openBottomSheet}>
                        <Text style={styles.deliveryDays}>+ Agregar días de entrega</Text>
                    </TouchableOpacity>
                </View>*/}

                <Button title='Crear periodo' onPress={savePeriod} />

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