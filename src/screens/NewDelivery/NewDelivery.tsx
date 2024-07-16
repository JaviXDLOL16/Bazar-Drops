import React from 'react'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import InputDate from 'src/components/form/InputDate'
import { Platform, StyleSheet, View } from 'react-native'
import { Colors } from 'src/models/Colors/Colors'
import Button from 'src/components/Buttons/Button'
import TextInput from 'src/components/form/TextInput'
import Input from 'src/components/form/Input'
import Text from 'src/components/Texts/Text'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputSelect from 'src/components/form/InputSelect'


export default function NewDelivery() {
    return (
        <ScreenContainer>
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                extraScrollHeight={Platform.OS === "ios" ? 80 : 100}
                enableOnAndroid={true}
                enableAutomaticScroll={Platform.OS === "ios"}
            >
                <View style={styles.containerInpuDate}>
                    <View style={styles.containerDate}>
                        <InputDate
                            placeholder='Dia de entrega'
                            title='Fecha'
                            requeriment='*Obligatorio'
                            mode='date'
                        />
                    </View>
                    <View style={styles.containerHour}>
                        <InputDate
                            placeholder='Agregar hora'
                            title='Hora'
                            requeriment='*Obligatorio'
                            mode='time'
                        />
                    </View>
                </View>
                <InputSelect
                    title='Selecciona la prenda'
                    placeholder='Elige la prenda para la entrega'
                />
                <Input
                    title='Ubicacion de entrega'
                    placeholder='Agregar lugar de encuentro'
                    requeriment='*Obligatorio'
                    inputMode='text'
                />
                <Text style={styles.textData} fontWeight='light'>Datos del contacto</Text>
                <Input
                    title='Nombre del comprador'
                    placeholder='Agregar nombre'
                    requeriment='*Obligatorio'
                    inputMode='text'
                />
                <Input
                    title='Celular'
                    placeholder='XXX-XXX-XXXX'
                    requeriment='*Obligatorio'
                    inputMode='text'
                />
                <TextInput
                    title='Comentarios'
                    placeholder='Comentario'
                    requeriment=''
                    inputMode='text'
                />
                <Button
                    onPress={console.log}
                    style={{ backgroundColor: Colors.Blue, marginBottom: 80, marginTop: 20 }}
                    title='Agregar entrega'
                    size='Large'
                    shadow={true}
                    textStyle={{ marginHorizontal: 15, fontSize: 16 }}
                />
            </KeyboardAwareScrollView>
        </ScreenContainer>
    )
}


const styles = StyleSheet.create({
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
    textData: {
        marginBottom: 10,
        marginTop: 30
    }
});

