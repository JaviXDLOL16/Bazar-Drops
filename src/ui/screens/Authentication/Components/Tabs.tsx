import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Text from 'src/ui/components/Texts/Text';
import { Colors } from 'src/ui/models/Colors/Colors';
import { tabs } from '../Authentication';

const { width } = Dimensions.get('window');
const tabWidth = width / 2;


interface TabsProps {
    activeTab: tabs;
    onSelectTab: (tabView: tabs) => void;
    style?: ViewStyle | ViewStyle[];
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onSelectTab, style }) => {
    const translateX = useSharedValue(0);

    const seleccionar = (tabView: tabs) => {
        onSelectTab(tabView);
        translateX.value = withTiming(tabView === 'login' ? 0 : width * 0.45);
    };

    useEffect(() => {
        seleccionar(activeTab);
    }, [activeTab]);

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
                onPress={() => seleccionar('login')}
            >
                <Text style={styles.texTab} fontWeight={activeTab === 'login' ? 'bold' : 'semibold'}>
                    Iniciar sesión
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tab}
                onPress={() => seleccionar('registrer')}
            >
                <Text style={styles.texTab} fontWeight={activeTab === 'registrer' ? 'bold' : 'semibold'}>
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
        width: tabWidth,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        zIndex: 2,
    },
    indicator: {
        position: 'absolute',
        width: 145,
        height: 46,
        backgroundColor: Colors.Blue2,
        shadowColor: Colors.Blue2,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        borderRadius: 24,
        zIndex: 0,
        marginLeft: '8.5%'
    },
    texTab: {
        fontSize: 20
    }
});

export default Tabs;
