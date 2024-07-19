import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { Colors } from 'src/models/Colors/Colors';

interface Props extends TouchableOpacityProps {

}


export default function ButtonNewGarment({ style, ...rest }: Props) {
    return (
        <TouchableOpacity style={[styles.buttonGarment, style]} {...rest}>
            <Text style={styles.textGarment}>Registrar nueva prenda</Text>
            <Ionicons name="camera" size={32} color="white" />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonGarment: {
        backgroundColor: Colors.Blue2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 8,
        gap: 10,
    },
    textGarment: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    }
});