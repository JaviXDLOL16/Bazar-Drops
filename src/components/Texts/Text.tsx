import React from 'react';
import { Text as TextNative, TextProps as TextPropsNative, StyleSheet, TextStyle } from 'react-native';

interface TextCustomProps extends TextPropsNative {
  style?: TextStyle;
  children: React.ReactNode;
}

const Text: React.FC<TextCustomProps> = ({ style, children, ...rest }) => {
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

export default Text;
