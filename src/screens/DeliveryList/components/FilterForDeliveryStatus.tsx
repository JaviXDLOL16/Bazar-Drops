import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Filter } from 'src/components/Filter/Filter';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'src/models/Colors/Colors';

export type DeliveryFilterStates = 'pendiente' | 'vendido' | 'cancelado' | 'todos';

interface FilterForDeliveryStatusProps {
    onChange: (filter: DeliveryFilterStates) => void;
    value: DeliveryFilterStates;
}

export default function FilterForDeliveryStatus({ onChange, value }: FilterForDeliveryStatusProps) {

    interface FilterState {
        title: string;
        icon?: keyof typeof FontAwesome.glyphMap,
        style: ViewStyle;
        filter: DeliveryFilterStates;
    }

    const filterStates: FilterState[] = [
        { title: 'Pendientes', icon: 'clock-o', style: styles.pending, filter: 'pendiente' },
        { title: 'Vendido', icon: 'check-circle', style: styles.sold, filter: 'vendido' },
        { title: 'Cancelado', icon: 'times-circle', style: styles.canceled, filter: 'cancelado' },
        { title: 'Todos', style: styles.all, filter: 'todos' },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const index = filterStates.findIndex(state => state.filter === value);
        if (index !== -1) {
            setCurrentIndex(index);
        }
    }, [value]);

    const handlePress = () => {
        const newIndex = (currentIndex + 1) % filterStates.length;
        setCurrentIndex(newIndex);
        onChange(filterStates[newIndex].filter);
    };

    const { title, icon, style } = filterStates[currentIndex];

    return (
        <Filter
            onPress={handlePress}
            title={title}
            style={style}
            iconComponent={icon ? <FontAwesome name={icon} size={20} color="white" /> : null}
        />
    );
}

const styles = StyleSheet.create({
    pending: {
        backgroundColor: Colors.Gray
    },
    sold: {
        backgroundColor: Colors.Green
    },
    canceled: {
        backgroundColor: Colors.Red
    },
    all: {
        backgroundColor: Colors.Blue,
    }
});
