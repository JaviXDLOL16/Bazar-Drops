import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { Filter } from 'src/components/Filter/Filter'
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'src/models/Colors/Colors';

export type DeliveryFilterStates = 'pendiente' | 'vendido' | 'cancelado' | 'todos';

interface FilterForDeliveryStatusProps {
    onChange: (filter: DeliveryFilterStates) => void;
}

export default function FilterForDeliveryStatus({ onChange }: FilterForDeliveryStatusProps) {

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

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePress = () => {
        const newIndex = (currentIndex + 1) % filterStates.length;
        setCurrentIndex(newIndex);
        onChange(filterStates[newIndex].filter);
    };

    const { title, icon, style } = filterStates[currentIndex];

    return (
        <>
            <Filter
                onPress={handlePress}
                title={title}
                style={style}
                iconComponent={<FontAwesome name={icon} size={20} color="white" />}
            />

        </>
    )
}

const styles = StyleSheet.create({
    pending: {
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
})