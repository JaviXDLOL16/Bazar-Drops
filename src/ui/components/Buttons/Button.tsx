import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, TextStyle, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { Colors } from 'src/ui/models/Colors/Colors';
import Text from '../Texts/Text';

export type size = 'Small' | 'Medium' | 'Large' | 'ExtraLarge';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    onPress?: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    size?: size;
    shadow?: boolean;
    icon?: React.ReactNode,
    loading?: boolean;
}

export default function Button({ title, onPress, style, textStyle = {}, size = 'Large', shadow = false, icon, loading, ...rest }: ButtonProps) {
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
        >{
                loading ? <ActivityIndicator size={size === 'ExtraLarge' ? 'large' : 'small'} color={Colors.White} /> :
                    <>
                        <Text fontWeight='bold' style={[styles.buttonText, getTextSizeStyle(), textStyle]}>{title}</Text>
                        {icon}
                    </>

            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.Blue,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    shadow: {
        shadowColor: Colors.Blue,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    buttonText: {
        color: Colors.White,
    },
    TextSmall: {
        fontSize: 14,
    },
    ButtonSmall: {
        height: 40,
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
        height: 60,
        borderRadius: 10,
    },
    TextExtraLarge: {
        fontSize: 34,
    },
    ButtonExtraLarge: {
        padding: 20,
        borderRadius: 15,
        height: 83,
    },
});

