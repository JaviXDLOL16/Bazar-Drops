import React, { ReactNode } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';

interface ScreenContainerProps {
    children: ReactNode;
    style?: ViewStyle | ViewStyle[];
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, style }) => {
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar backgroundColor={'#000'} />
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ScreenContainer;
