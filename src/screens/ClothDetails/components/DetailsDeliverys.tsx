import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Button from 'src/components/Buttons/Button';
import Input from 'src/components/form/Input';
import Text from 'src/components/Texts/Text';
import { Colors } from 'src/models/Colors/Colors';

const daysAndHours = [
    'Lunes 2:30',
    'Martes 3:00',
    'Miércoles 4:15',
    'Jueves 1:45',
    'Viernes 5:30'
];

export default function DetailsDeliverys() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <>
            <View style={styles.contTitle}>
                <Text fontWeight='bold' style={styles.textData}>Datos para la entrega</Text>
            </View>
            <Text style={styles.textSelect}>Selecciona la fecha de entrega</Text>
            <ScrollView horizontal>
                <View style={styles.contHours}>
                    {daysAndHours.map((item, index: number) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.textHour,
                                selectedIndex === index && styles.selectedHour
                            ]}
                            onPress={() => setSelectedIndex(index)}
                        >
                            <Text fontWeight='bold'>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <Input
                title='Precio'
                requeriment='Puedes establecer tu propia cantidad'
                placeholder='Precio'
                style={styles.inputStyle}
            />
            <Button
                onPress={() => { }}
                title='Solicitar compra'
                size='ExtraLarge'
                style={{ marginTop: 60 }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    contTitle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textData: {
        fontSize: 28,
    },
    contHours: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 10
    },
    TitleHour: {
        fontSize: 20,
    },
    textHour: {
        backgroundColor: Colors.Dark1,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5
    },
    selectedHour: {
        borderColor: Colors.InputOutline,
        borderWidth: 2
    },
    textSelect: {
        marginTop: 15
    },
    inputStyle: {
        marginTop: 20
    }
});
