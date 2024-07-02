import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'src/models/Colors/Colors'
import { Ionicons } from '@expo/vector-icons';


interface FilterProps {
    title?: string
    icon?: any
    width?: number
    fontSize?: number
    iconSize?: number
    color?: string
}

export default function Filter({ title, icon, width, fontSize = 11, iconSize = 24, color = 'white' }: FilterProps) {
    return (
        <TouchableOpacity style={[styles.filterButton, { width: width }]}>
            {title && <Text style={[styles.filterText, { fontSize: fontSize }]}>{title}</Text>}
            {icon && <Ionicons name={icon} size={iconSize} color={color} />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: Colors.Dark1,
        borderRadius: 20,
    },
    filterText: {
        color: 'white',
        marginRight: 5,
        fontWeight: 'bold',
    },
})

