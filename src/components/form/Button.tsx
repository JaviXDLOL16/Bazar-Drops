import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';

interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.Blue,
        paddingVertical: 2,
        paddingHorizontal: 25,
        borderRadius: 15,
        shadowColor: Colors.Blue,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
        alignItems: 'center',
        marginHorizontal: 'auto',
        height: 80,
        justifyContent: 'center',
    },
    buttonText: {
        color: Colors.White,
        fontSize: 32,
        fontWeight: 'bold',
    },
});

export default Button;
