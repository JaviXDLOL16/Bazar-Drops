import React from 'react'
import { Colors } from 'src/models/Colors/Colors'
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from 'react-native';


export default function ButtonInformation() {
    return (
        <TouchableOpacity style={styles.containerInformation}>
            <Ionicons name="person" size={28} color="white" />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    containerInformation: {
        backgroundColor: Colors.Gray2,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
    },
})
