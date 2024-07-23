import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Colors } from 'src/ui/models/Colors/Colors';
import Text from '../Texts/Text';

interface SelectButtonProps {
    placeholder: string;
    title?: string;
    options: string[];
    onSelect: (option: string) => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({ placeholder, title, options, onSelect }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelectOption = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        setDropdownVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headContainer}>
                {title && <Text style={styles.title}>{title}</Text>}
                <TouchableOpacity
                    style={[styles.inputContainer, styles.button, false && { borderColor: Colors.InputError }]}
                    onPress={() => setDropdownVisible(!isDropdownVisible)}
                >
                    <Text style={styles.placeholder}>{selectedOption || placeholder}</Text>
                    <Ionicons name={isDropdownVisible ? "chevron-up" : "chevron-down"} size={16} color="#ccc" />
                </TouchableOpacity>
            </View>
            {isDropdownVisible && (
                <View style={styles.dropdown}>
                    {options.map((option, index) => (
                        <TouchableOpacity key={index} style={styles.option} onPress={() => handleSelectOption(option)}>
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
            {false && <Text style={styles.messageError}>{'Debes llenar este campo'}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    headContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        marginRight: 12,
    },
    inputContainer: {
        gap: 8,
        backgroundColor: Colors.Dark1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeholder: {
        fontSize: 14,
        color: Colors.White,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dropdown: {
        backgroundColor: Colors.Dark2,
        borderRadius: 8,
        zIndex: 1,
        width: '30%',
        position: 'absolute',
        left: '70%',
        top: '100%',
    },
    option: {
        paddingVertical: 5,
        marginLeft: 10

    },
    optionText: {
        fontSize: 14,
        color: Colors.White,
    },
    messageError: {
        paddingHorizontal: 10,
        color: Colors.InputError,
        fontSize: 12,
    },
});

export default SelectButton;
