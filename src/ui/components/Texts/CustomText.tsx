// CustomText.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {
    useFonts,
    Mulish_200ExtraLight,
    Mulish_300Light,
    Mulish_400Regular,
    Mulish_500Medium,
    Mulish_600SemiBold,
    Mulish_700Bold,
    Mulish_800ExtraBold,
    Mulish_900Black,
} from '@expo-google-fonts/mulish';

const CustomText = ({ style, children, ...props }: { style: any, children: React.ReactNode, props: any }) => {
    const [fontsLoaded] = useFonts({
        Mulish_200ExtraLight,
        Mulish_300Light,
        Mulish_400Regular,
        Mulish_500Medium,
        Mulish_600SemiBold,
        Mulish_700Bold,
        Mulish_800ExtraBold,
        Mulish_900Black,
    });

    const fontFamilyMap: { [key: string]: string } = {
        '200': 'Mulish_200ExtraLight',
        '300': 'Mulish_300Light',
        '400': 'Mulish_400Regular',
        '500': 'Mulish_500Medium',
        '600': 'Mulish_600SemiBold',
        '700': 'Mulish_700Bold',
        '800': 'Mulish_800ExtraBold',
        '900': 'Mulish_900Black',
    };

    const fontWeight = style?.fontWeight?.toString() || '400';
    const fontFamily = fontFamilyMap[fontWeight] || fontFamilyMap['400'];

    return (
        <Text
            style={[
                { fontFamily, color: 'white' }, // Color blanco por defecto
                style, // Permitir sobrescribir color y otros estilos
            ]}
            {...props}
        >
            {children}
        </Text>
    );
};

export default CustomText;
