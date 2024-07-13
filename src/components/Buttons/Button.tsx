import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';
import Text from '../Texts/Text';

export type size = 'Small' | 'Medium' | 'Large' | 'ExtraLarge';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    size?: size;
    shadow?: boolean;
}

export default function Button({ title, onPress, style, textStyle, size = 'Large', shadow = false, ...rest }: ButtonProps) {
    const getButtonSizeStyle = () => {
        switch (size) {
            case 'Small':
                return styles.ButtonSmall;
            case 'Medium':
                return styles.ButtonMedium;
            case 'Large':
                return styles.ButtonLarge;
            case 'ExtraLarge':
                return styles.ButtonExtraLarge;
            default:
                return styles.ButtonLarge;
        }
    };

    const getTextSizeStyle = () => {
        switch (size) {
            case 'Small':
                return styles.TextSmall;
            case 'Medium':
                return styles.TextMedium;
            case 'Large':
                return styles.TextLarge;
            case 'ExtraLarge':
                return styles.TextExtraLarge;
            default:
                return styles.TextLarge;
        }
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, getButtonSizeStyle(), shadow && styles.shadow, style]}
            {...rest}
        >
            <Text fontWeight='bold' style={[styles.buttonText, getTextSizeStyle(), textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.Blue,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow: {
        shadowColor: Colors.Blue,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonText: {
        color: Colors.White,
        fontWeight: 'bold',
    },
    TextSmall: {
        fontSize: 12,
    },
    ButtonSmall: {
        padding: 8,
        borderRadius: 5,
    },
    TextMedium: {
        fontSize: 16,
    },
    ButtonMedium: {
        padding: 12,
        borderRadius: 8,
    },
    TextLarge: {
        fontSize: 22,
    },
    ButtonLarge: {
        padding: 16,
        borderRadius: 10,
    },
    TextExtraLarge: {
        fontSize: 34,
    },
    ButtonExtraLarge: {
        padding: 20,
        borderRadius: 15,
    },
});

