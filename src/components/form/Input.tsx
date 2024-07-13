import React from 'react';
import { View, TextInput as TextInputNative, StyleSheet, TextInputProps as TextInputPropsNative, ViewStyle } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';
import Text from '../Texts/Text';

export type InputRequeriment = '*Obligatorio' | 'Recomendado' | 'Opcional' | '';

interface InputProps extends TextInputPropsNative {
    placeholder?: string;
    title?: string;
    requeriment?: InputRequeriment;
    style?: ViewStyle; // Cambié 'style' a opcional para mantener flexibilidad
}

export default function Input({ placeholder, title, requeriment = 'Opcional', value, onChangeText, style, ...rest }: InputProps) {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.headContainer}>
                <Text style={styles.title} fontWeight='extrabold'>{title}</Text>
                <Text style={styles.requerimentText} fontWeight='light'>{requeriment}</Text>
            </View>
            <View style={[styles.inputContainer, false && { borderColor: Colors.InputError }]}>
                <TextInputNative
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#ccc"
                    value={value}
                    onChangeText={onChangeText}
                    {...rest}
                />
            </View>
            <Text style={styles.messageError}>{true && 'Debes llenar este campo'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexShrink: 1,
        paddingBottom: 10,
    },
    inputContainer: {
        width: '100%',
        backgroundColor: Colors.Dark1,
        borderWidth: 2,
        borderColor: Colors.InputOutline,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    input: {
        fontSize: 20,
        color: '#fff',
    },
    title: {
        fontSize: 20,
    },
    requerimentText: {
        fontSize: 13,
        lineHeight: 20,
    },
    headContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 2,
        paddingLeft: 10,
        paddingRight: 8,
    },
    messageError: {
        paddingHorizontal: 10,
        color: Colors.InputError,
        fontSize: 12,
        marginTop: 2,
    },
});
