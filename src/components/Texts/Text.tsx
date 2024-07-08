import React from 'react';
import { Text as TextNative, TextProps as TextPropsNative, StyleSheet, TextStyle } from 'react-native';

interface TextCustomProps extends TextPropsNative {
  style?: TextStyle;
  children: React.ReactNode;
}

export default function Text({ style, children, ...rest }: TextCustomProps) {
  return (
    <TextNative style={[styles.defaultStyle, style]} {...rest}>
      {children}
    </TextNative>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 16,
    color: 'white',
  },
});

