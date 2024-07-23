import React from 'react';
import { View, TextInput as TextInputNative, StyleSheet, TextInputProps as TextInputPropsNative, ViewStyle } from 'react-native';
import { Colors } from 'src/ui/models/Colors/Colors';
import Text from '../Texts/Text';

export type InputRequeriment = '*Obligatorio' | 'Recomendado' | 'Opcional' | '';

interface InputProps extends TextInputPropsNative {
    placeholder?: string;
    title?: string;
    requeriment?: InputRequeriment;
    style?: ViewStyle;
}

const InputEdit: React.FC<InputProps> = ({ title, requeriment = '', style, ...rest }) => {
    return (
        <View style={[style]}>
            {(title || requeriment) && (
                <View style={styles.headContainer}>
                    {title && <Text style={styles.title} fontWeight='medium'>{title}</Text>}
                    {requeriment && <Text style={styles.requerimentText} fontWeight='light'>{requeriment}</Text>}
                </View>
            )}
            <TextInputNative
                style={[styles.input, styles.inputContainer, false && { borderColor: Colors.InputError }]}
                placeholderTextColor="white"
                multiline
                numberOfLines={2}
                {...rest}
                textAlignVertical='top'
                editable={false}
            />
            <Text style={styles.messageError}>{false && 'Debes llenar este campo'} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: Colors.Dark1,
        borderRadius: 8,
        paddingTop: 5,
        paddingBottom: 15,
        paddingHorizontal: 10,
    },
    input: {
        fontSize: 16,
        fontWeight: '600'
    },
    title: {
        fontSize: 16,
    },
    requerimentText: {
        fontSize: 13,
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

export default InputEdit;
