import React from 'react';
import { TouchableOpacity, StyleSheet, View, TouchableOpacityProps, ViewStyle } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';
import Text from '../Texts/Text';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    number: number;
    style?: ViewStyle | ViewStyle[];
}

export default function ButtonNotifications({ title, number, style, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.earringsContainer, style]} {...rest}>
            <View style={styles.contNotification}>
                <Text fontWeight='bold' style={styles.textNotification}>{number}</Text>
            </View>
            <Text fontWeight='extrabold' style={styles.textEarrings}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    earringsContainer: {
        backgroundColor: Colors.Blue2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        position: 'relative',
    },
    textEarrings: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    contNotification: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        width: 20,
        backgroundColor: Colors.Red2,
        position: 'absolute',
        top: -5,
        right: -5,
    },
    textNotification: {
        color: 'white',
        fontSize: 10,
    },
});
