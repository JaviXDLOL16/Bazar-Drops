import { View, TouchableOpacity, StyleSheet, ViewProps, ViewStyle, TouchableOpacityProps, TextStyle } from 'react-native';
import React, { useState } from 'react';
import { Colors } from 'src/models/Colors/Colors';
import { Ionicons } from '@expo/vector-icons';
import Text from '../Texts/Text';

interface FilterContainerProps extends ViewProps {
    children: React.ReactNode,
    style?: ViewStyle
}

export function FilterContainer({ children, style }: FilterContainerProps) {
    return (
        <View style={[styles.filterContainer, style]}>
            {children}
        </View>
    )
}

interface FilterProps extends TouchableOpacityProps {
    title?: string,
    iconComponent?: React.ReactNode,
    iconName?: keyof typeof Ionicons.glyphMap,
    width?: number,
    fontSize?: number,
    iconSize?: number,
    color?: string,
    style?: ViewStyle,
    textStyle?: TextStyle
}

export function Filter({ title, fontSize = 12, iconName, iconSize = 18, color = 'white', iconComponent, style, textStyle = {}, ...rest }: FilterProps) {
    const [active, setActive] = useState(false);

    const handlePress = () => {
        setActive(!active);
    };

    const hasIcon = Boolean(iconComponent || iconName);

    return (
        <TouchableOpacity style={[styles.filterButton, (active && styles.activeButton), style]} onPress={handlePress} {...rest}>
            {title && <Text fontWeight='extrabold' style={[styles.filterText, { fontSize }, textStyle]}>{title}</Text>}
            {hasIcon && (iconComponent || <Ionicons name={iconName} size={iconSize} color={color} />)}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    filterButton: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        height: 35,
        paddingHorizontal: 10,
        backgroundColor: Colors.Dark1,
        borderRadius: 20,
        gap: 5,
    },
    activeButton: {
        backgroundColor: Colors.Blue
    },
    filterText: {
        lineHeight: 14,
    },
});