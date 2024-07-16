import React from 'react';
import { View, TextInput as TextInputNative, StyleSheet, TextInputProps as TextInputPropsNative, ViewStyle } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';
import Text from '../Texts/Text';

export type InputRequeriment = '*Obligatorio' | 'Recomendado' | 'Opcional' | '';

interface InputProps extends TextInputPropsNative {
    placeholder?: string;
    title?: string;
    requeriment?: InputRequeriment;
    style?: ViewStyle;
}

const Input: React.FC<InputProps> = ({ title, requeriment = '', style, ...rest }) => {
    return (
        <View style={[style]}>
            {(title || requeriment) && (
                <View style={styles.headContainer}>
                    {title && <Text style={styles.title} fontWeight='extrabold'>{title}</Text>}
                    {requeriment && <Text style={styles.requerimentText} fontWeight='light'>{requeriment}</Text>}
                </View>
            )}
            <TextInputNative
                style={[styles.input, styles.inputContainer, false && { borderColor: Colors.InputError }]}
                placeholderTextColor="#ccc"
                {...rest}
            />
            <Text style={styles.messageError}>{false && 'Debes llenar este campo'} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        backgroundColor: Colors.Dark1,
        borderWidth: 2,
        borderColor: Colors.InputOutline,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    input: {
        fontSize: 18,
        color: '#fff',
    },
    title: {
        fontSize: 18,
    },
    requerimentText: {
        fontSize: 13,
        fontWeight: '200'
    },
    headContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 5,
        marginBottom: 5,
    },
    messageError: {
        paddingHorizontal: 10,
        color: Colors.InputError,
        fontSize: 12,
    }
});

export default Input;