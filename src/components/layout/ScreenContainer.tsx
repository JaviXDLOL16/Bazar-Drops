import React, { ReactNode } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';

interface ScreenContainerProps {
    children: ReactNode;
    style?: ViewStyle | ViewStyle[];
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, style }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={style}>
                {children}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Dark
    },
});

export default ScreenContainer;
