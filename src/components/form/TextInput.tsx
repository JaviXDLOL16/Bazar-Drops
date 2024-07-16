import React from 'react';
import { View, TextInput as TextInputNative, StyleSheet, TextInputProps as TextInputPropsNative } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';
import Text from '../Texts/Text';

export type InputRequeriment = '*Obligatorio' | 'Recomendado' | 'Opcional' | '';

interface InputProps extends TextInputPropsNative {
    placeholder?: string;
    title?: string;
    requeriment?: InputRequeriment;
}

const TextInput: React.FC<InputProps> = ({ placeholder, title, requeriment = '', value, onChangeText, ...rest }) => {
    return (
        <View style={styles.container}>
            {(title || requeriment) && (
                <View style={styles.headContainer}>
                    {title && <Text style={styles.title} fontWeight='extrabold'>{title}</Text>}
                    {requeriment && <Text style={styles.requerimentText} fontWeight='light'>{requeriment}</Text>}
                </View>
            )}
            <View style={[styles.inputContainer, false && { borderColor: Colors.InputError }]}>
                <TextInputNative
                    editable
                    multiline
                    numberOfLines={4}
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#ccc"
                    value={value}
                    onChangeText={onChangeText}
                    {...rest}
                    textAlignVertical='top'

                />
            </View>
            {false && <Text style={styles.messageError}>{'Debes llenar este campo'}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
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
        height: 100,
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 18,
    },
    requerimentText: {
        fontSize: 13,
        fontWeight: '200',
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

export default TextInput;
