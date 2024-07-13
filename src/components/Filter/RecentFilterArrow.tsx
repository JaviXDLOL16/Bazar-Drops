import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { Filter } from 'src/components/Filter/Filter'
import { Colors } from 'src/models/Colors/Colors';
import { Ionicons } from '@expo/vector-icons';




export default function RecentFilterArrow() {

    interface FilterState {
        icon?: keyof typeof Ionicons.glyphMap,
        style?: ViewStyle;
    }


    const filterStates: FilterState[] = [
        { icon: 'arrow-down' },
        { icon: 'arrow-up', style: styles.old },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePress = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filterStates.length);
    };

    const { icon, style } = filterStates[currentIndex];

    return (
        <>
            <Filter
                onPress={handlePress}
                style={style}
                iconComponent={<Ionicons name={icon} size={18} color="white" />}
            />

        </>
    )
}

const styles = StyleSheet.create({
    old: {
        backgroundColor: Colors.Blue
    }
})