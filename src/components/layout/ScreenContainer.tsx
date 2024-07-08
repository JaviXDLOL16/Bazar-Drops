import React, { ReactNode } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';

interface ScreenContainerProps {
    children?: ReactNode;
    style?: ViewStyle | ViewStyle[];
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, style }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={[styles.body, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Dark,
    },
    body: {
        paddingHorizontal: 20,
        paddingTop: 25,
    }
});

export default ScreenContainer;
