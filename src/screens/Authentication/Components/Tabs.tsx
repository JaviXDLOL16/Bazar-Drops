import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Text from 'src/components/Texts/Text';
import { Colors } from 'src/models/Colors/Colors';

const { width } = Dimensions.get('window');
const tabWidth = width / 2; // Ajustar según el ancho de cada pestaña


interface TabsProps {
    activeTab: number;
    onSelectTab: (index: number) => void;
    style?: ViewStyle | ViewStyle[];
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onSelectTab, style }) => {
    const translateX = useSharedValue(0);

    const seleccionar = (index: number) => {
        onSelectTab(index);
        translateX.value = withTiming(index * (width * 0.45));
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    })

    return (
        <View style={[styles.tabContainer, style]}>
            <Animated.View style={[styles.indicator, animatedStyle]} />
            <TouchableOpacity
                style={styles.tab}
                onPress={() => seleccionar(0)}
            >
                <Text fontWeight={activeTab === 0 ? 'bold' : 'semibold'}>
                    Iniciar sesión
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tab}
                onPress={() => seleccionar(1)}
            >
                <Text fontWeight={activeTab === 1 ? 'bold' : 'semibold'}>
                    Registrarse
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
    },
    tab: {
        width: tabWidth, // Ajustar el ancho de cada pestaña
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        zIndex: 2,
    },
    indicator: {
        position: 'absolute',
        width: 145, // Ajustar el ancho del indicador
        height: 43,
        backgroundColor: Colors.Blue2,
        shadowColor: Colors.Blue2,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        borderRadius: 24,
        zIndex: 0,
        marginLeft: '8.5%'
    },
});

export default Tabs;
