import React, { useState } from 'react';
import { View, TextInput as TextInputNative, StyleSheet, TextInputProps as TextInputPropsNative, ViewStyle, Platform } from 'react-native';
import { Colors } from 'src/ui/models/Colors/Colors';
import Text from '../Texts/Text';
import { Dropdown } from 'react-native-element-dropdown';


export type InputRequeriment = '*Obligatorio' | 'Recomendado' | 'Opcional' | '';

const itemsDefault = [
    {
        value: 1,
        label: 'Default 1',
    },
    {
        value: 2,
        label: 'Default 2',
    },
];

interface SelectProps {
    placeholder?: string;
    title: string;
    requeriment?: InputRequeriment;
    loading?: boolean;
    error?: boolean;
    errorMessage?: string;
    style?: ViewStyle;
    items?: any[];
    showSearch?: boolean;
    onChange?: (value: any) => void;
    value?: any;
}

export default function Select({ title, requeriment = '', style, loading, error, errorMessage, items = itemsDefault, showSearch = false, onChange, value, placeholder }: SelectProps) {

    const [item, setItem] = useState(null);

    const handleValueChange = (item: any) => {
        setItem(item.value);
        if (onChange) {
            onChange(item.value);
        }
    };

    return (
        <View style={[style]}>
            {(title || requeriment) && (
                <View style={styles.headContainer}>
                    {title && <Text style={styles.title} fontWeight='extrabold'>{title}</Text>}
                    {requeriment && <Text style={styles.requerimentText} fontWeight='light'>{requeriment}</Text>}
                </View>
            )}
            <Dropdown
                style={[
                    styles.inputContainer,
                ]}
                data={items}
                search={showSearch}
                maxHeight={200}
                labelField="label"
                valueField="value"
                value={item}
                placeholder={placeholder}
                placeholderStyle={{ color: '#aeaeae' }}
                searchPlaceholder="Search..."
                onChange={handleValueChange}
                containerStyle={{ backgroundColor: Colors.Dark1, borderColor: Colors.Dark1, borderRadius: 8 }}
                itemTextStyle={{ color: '#fff' }}
                selectedTextStyle={[styles.selectedTextStyle, loading && { color: Colors.Gray2 }]}
                activeColor={Colors.Blue2}
                keyboardAvoiding
                disable={loading}
            />
            {error && <Text style={styles.messageError}>{errorMessage || 'Debes llenar este campo'}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    selectedTextStyle: { color: '#fff', fontSize: 18 },
    inputContainer: {
        width: '100%',
        backgroundColor: Colors.Dark1,
        borderWidth: 2,
        borderColor: Colors.InputOutline,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 18,
        color: '#fff',
        textAlignVertical: 'top',
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

