import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Colors } from 'src/models/Colors/Colors';
import Text from '../Texts/Text';
import { format } from 'date-fns';

export type InputRequeriment = '*Obligatorio' | 'Recomendado' | 'Opcional' | '';

interface DatePickerInputProps {
    placeholder?: string;
    title?: string;
    requeriment?: InputRequeriment;
    value?: Date;
    onChange?: (date: Date) => void;
    mode?: 'date' | 'time';
}

const InputDate: React.FC<DatePickerInputProps> = ({
    placeholder = 'Select date',
    title,
    requeriment = '',
    value,
    onChange,
    mode = 'date',
}) => {
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);

    const handleConfirm = (date: Date) => {
        setSelectedDate(date);
        onChange?.(date);
        setShow(false);
    };

    const handleCancel = () => {
        setShow(false);
    };

    const showPicker = () => {
        setShow(true);
    };

    const formattedDate = selectedDate ? format(selectedDate, mode === 'date' ? 'yyyy-MM-dd' : 'HH:mm') : placeholder;

    return (
        <View style={styles.container}>
            {(title || requeriment) && (
                <View style={styles.headContainer}>
                    {title && <Text style={styles.title} fontWeight='extrabold'>{title}</Text>}
                    {requeriment && <Text style={styles.requerimentText} fontWeight='light'>{requeriment}</Text>}
                </View>
            )}
            <TouchableOpacity onPress={showPicker} style={[styles.inputContainer]}>
                <Text style={styles.input}>{formattedDate}</Text>
            </TouchableOpacity>
            {Platform.OS === 'ios' && (
                <DateTimePickerModal
                    isVisible={show}
                    mode={mode}
                    date={selectedDate || new Date()}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                    display="spinner"
                    textColor="black"
                />
            )}
            {Platform.OS !== 'ios' && show && (
                <DateTimePicker
                    value={selectedDate || new Date()}
                    mode={mode}
                    display="default"
                    onChange={(event, date) => handleConfirm(date || new Date())}
                />
            )}
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
});

export default InputDate;
