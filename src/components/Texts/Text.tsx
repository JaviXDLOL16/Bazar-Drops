import React from 'react';
import { Text as TextNative, TextProps as TextPropsNative, StyleSheet, TextStyle } from 'react-native';
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

interface TextCustomProps extends TextPropsNative {
  style?: TextStyle | (Partial<TextStyle>)[];
  children: React.ReactNode;
  fontWeight?: '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'extralight' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
}

export default function Text({ style, children, fontWeight = '500', ...rest }: TextCustomProps) {
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

  if (!fontsLoaded) {
    return null; // O cualquier componente de carga
  }

  const getFontWeight = () => {
    switch (fontWeight) {
      case '200':
      case 'extralight':
        return 'Mulish_200ExtraLight';
      case '300':
      case 'light':
        return 'Mulish_300Light';
      case '400':
      case 'regular':
        return 'Mulish_400Regular';
      case '500':
      case 'medium':
        return 'Mulish_500Medium';
      case '600':
      case 'semibold':
        return 'Mulish_600SemiBold';
      case '700':
      case 'bold':
        return 'Mulish_700Bold';
      case '800':
      case 'extrabold':
        return 'Mulish_800ExtraBold';
      case '900':
      case 'black':
        return 'Mulish_900Black';
      default:
        return 'Mulish_500Medium';
    }
  };

  return (
    <TextNative style={[styles.defaultStyle, style, { fontFamily: getFontWeight() }]} {...rest}>
      {children}
    </TextNative>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 16,
    color: 'white',
  },
});
