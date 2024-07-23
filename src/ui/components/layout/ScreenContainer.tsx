import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from 'src/ui/models/Colors/Colors';

interface ScreenContainerProps {
    children?: ReactNode;
    style?: ViewStyle | ViewStyle[];
    scrollEnable?: boolean;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, style, scrollEnable = false }) => {
    return (
        <View style={styles.screen}>
            <StatusBar style='light' />
            {scrollEnable ? (
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                >
                    <View style={[styles.container, style]}>
                        {children}
                    </View>
                    <View style={styles.bottomSpacer} />
                </ScrollView>
            ) : (
                <View style={[styles.container, style]}>{children}</View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.Dark,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    scrollContent: {
        flexGrow: 1,
    },
    bottomSpacer: {
        height: 40,
    },
});

export default ScreenContainer;
