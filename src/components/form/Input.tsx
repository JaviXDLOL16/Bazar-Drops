import React from 'react';
import { View, TextInput as TextInputNative, StyleSheet, TextInputProps as TextInputPropsNative } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';
import Text from '../Texts/Text';
import { InputRequeriment } from 'src/models/Inputs/InputRequeriment';

interface InputProps extends TextInputPropsNative {
    placeholder?: string;
    title?: string;
    requeriment?: InputRequeriment
}

const Input: React.FC<InputProps> = ({ placeholder, title, requeriment = 'Opcional', value, onChangeText, ...rest }) => {
    return (<>
        <View style={styles.headContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.requerimentText}>{requeriment}</Text>
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
        <Text style={styles.messageError}>{false && 'Debes llenar este campo'}</Text>
    </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 4,
        width: '100%',
        backgroundColor: Colors.Dark1,
        borderWidth: 2,
        borderColor: Colors.InputOutline,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
    },
    input: {
        fontSize: 18,
        color: '#fff',
    },
    title: {
        fontWeight: '600',
        fontSize: 20
    },
    requerimentText: {
        fontSize: 13,
        fontWeight: '200'
    },
    headContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 15,
    },
    messageError: {
        paddingHorizontal: 10,
        color: Colors.InputError,
        fontSize: 12,
        marginBottom: 6
    }

});

export default Input;
