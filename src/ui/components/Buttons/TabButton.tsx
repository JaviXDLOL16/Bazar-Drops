import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import Text from '../Texts/Text'
import { Colors } from 'src/ui/models/Colors/Colors';

interface Props extends TouchableOpacityProps {
    title: string;
    active?: boolean;
}

export default function TabButton({ title = 'tab1', active = false, ...rest }: Props) {
    return (
        <TouchableOpacity disabled={active} style={[styles.container, active && { backgroundColor: Colors.Blue2 }]} {...rest}>
            <Text fontWeight='semibold' style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 46,
        justifyContent: 'center',
        paddingHorizontal: 17.5,
        borderRadius: 24,
        marginBottom: 20
    },
    title: {
        fontSize: 20,
    }
})