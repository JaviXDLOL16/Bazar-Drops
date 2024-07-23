import React from 'react'
import { Colors } from 'src/ui/models/Colors/Colors'
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from 'react-native';
import useStackNavigation from 'src/ui/hooks/useStackNavigation';


export default function ButtonInformation() {

    const navigation = useStackNavigation();

    return (
        <TouchableOpacity style={styles.containerInformation} onPress={() => navigation.navigate('Information')}>
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
