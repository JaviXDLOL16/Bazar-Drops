import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Colors } from 'src/models/Colors/Colors';
import { Ionicons } from '@expo/vector-icons';


export default function Search() {
    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} color="white" />
            <TextInput style={styles.searchInput} placeholderTextColor="#888" />
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: Colors.Dark1,
        borderRadius: 30,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        color: 'white',
        marginLeft: 10,
        fontSize: 20,
    },
})