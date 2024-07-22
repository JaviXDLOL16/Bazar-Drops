import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Filter } from 'src/components/Filter/Filter';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'src/models/Colors/Colors';
import { ClothStatus } from 'src/lib/Inventory/domain/Cloth';

export type ClothFilterStates = 'vendido' | 'disponible' | 'todos';

interface FilterForClothStatusProps {
    onChange: (filter: ClothFilterStates) => void;
    value: ClothFilterStates;
}

export default function FilterForClothStatus({ onChange, value }: FilterForClothStatusProps) {

    interface FilterState {
        title: string;
        icon?: keyof typeof Ionicons.glyphMap,
        iconColor?: string;
        style?: ViewStyle;
        filter: ClothFilterStates;
    }

    const filterStates: FilterState[] = [
        { title: 'Disponible', icon: 'checkmark-circle-sharp', iconColor: Colors.Green, filter: 'disponible' },
        { title: 'Vendido', icon: 'cash-sharp', iconColor: Colors.Red, filter: 'vendido' },
        { title: 'Todos', filter: 'todos' }
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

    const { title, icon, style, iconColor } = filterStates[currentIndex];

    return (
        <Filter
            onPress={handlePress}
            title={title}
            style={{ borderRadius: 10, backgroundColor: Colors.default800, ...style }}
            iconComponent={icon ? <Ionicons name={icon} size={20} color={iconColor} /> : null}
        />
    );
}


