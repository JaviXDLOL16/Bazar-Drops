import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { Filter } from 'src/components/Filter/Filter'
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'src/models/Colors/Colors';




export default function FilterForDeliveryStatus() {

    interface FilterState {
        title: string;
        icon?: keyof typeof FontAwesome.glyphMap,
        style: ViewStyle;
    }


    const filterStates: FilterState[] = [
        { title: 'Pendientes', icon: 'clock-o', style: styles.pending },
        { title: 'Vendido', icon: 'check-circle', style: styles.sold },
        { title: 'Cancelado', icon: 'times-circle', style: styles.canceled },
        { title: 'Todos', style: styles.all },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePress = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filterStates.length);
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