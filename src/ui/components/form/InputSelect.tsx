import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'src/ui/models/Colors/Colors';
import Text from '../Texts/Text';
import { Ionicons } from "@expo/vector-icons";


export type InputRequeriment = '*Obligatorio' | 'Recomendado' | 'Opcional' | '';

interface InputProps {
    placeholder?: string;
    title?: string;
    requeriment?: InputRequeriment;
    onPress: () => void;
}

const InputSelect: React.FC<InputProps> = ({ placeholder, onPress, title, requeriment = '' }) => {
    return (
        <View style={styles.container}>
            {(title || requeriment) && (
                <View style={styles.headContainer}>
                    {title && <Text style={styles.title} fontWeight='extrabold'>{title}</Text>}
                    {requeriment && <Text style={styles.requerimentText} fontWeight='light'>{requeriment}</Text>}
                </View>
            )}
            <TouchableOpacity onPress={onPress} style={[styles.inputContainer, styles.button, false && { borderColor: Colors.InputError, }]}>
                <Text style={styles.placeholder}>{placeholder}</Text>
                <Ionicons name="search-sharp" size={25} color="#ccc" />
            </TouchableOpacity>
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
    },
    placeholder: {
        fontSize: 18,
        color: '#ccc',
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
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 25
    }
});

export default InputSelect;
