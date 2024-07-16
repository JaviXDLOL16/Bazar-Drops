import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { Colors } from 'src/models/Colors/Colors';

export default function AccountRadioButtons() {

    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: '1',
            label: 'Vendedor',
            value: 'vendedor',
            color: Colors.Blue,
        },
        {
            id: '2',
            label: 'Comprador',
            value: 'comprador',
            color: Colors.Blue
        }
    ]), []);

    const [selectedId, setSelectedId] = useState<string | undefined>();

    return (
        <RadioGroup
            layout='row'
            containerStyle={{ justifyContent: 'space-around', alignItems: 'flex-start' }}
            labelStyle={{ fontSize: 20, color: '#fff' }}
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
        />
    )
}

const styles = StyleSheet.create({})