import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, ViewStyle, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from 'src/models/Colors/Colors';

interface ScreenContainerProps {
    children?: ReactNode;
    style?: ViewStyle | ViewStyle[];
    scrollEnable?: boolean;
}


const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, style, scrollEnable = false }) => {
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: Colors.Dark,
                paddingTop: insets.top,
            }}
        >
            <StatusBar style='light' />
            {scrollEnable ? (
                <ScrollView
                    style={[styles.container, style]}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    {children}
                </ScrollView>
            ) : (
                <View style={[styles.container, style]}>{children}</View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Dark,
        paddingHorizontal: 20,
        marginTop: -20,
        paddingTop: 20,
        paddingBottom: 30
    },

});

export default ScreenContainer;
