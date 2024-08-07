import { View, Text, StyleSheet, TextInput, TextInputProps, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from 'src/ui/models/Colors/Colors';
import { Ionicons } from '@expo/vector-icons';

interface SearchProps extends TextInputProps {
    style?: ViewStyle;
}

export default function Search({ style, ...rest }: SearchProps) {
    return (
        <View style={[styles.searchContainer, style]}>
            <Ionicons name="search" size={24} color="white" />
            <TextInput style={styles.searchInput} placeholderTextColor="#888" {...rest} />
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
        backgroundColor: Colors.Dark1,
        borderRadius: 30,
    },
    searchInput: {
        flex: 1,
        color: 'white',
        marginLeft: 10,
        fontSize: 20,
    },
})