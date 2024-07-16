import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Colors } from 'src/models/Colors/Colors';

interface CustomSwitchProps {
    value: boolean;
    onChange: (value: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ value, onChange }) => {
    const [switchValue, setSwitchValue] = useState(value);
    const offsetX = useSharedValue(value ? 20 : 0);

    const animatedCircleStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withTiming(offsetX.value, { duration: 300, easing: Easing.inOut(Easing.ease) }) }],
        };
    });

    const animatedContainerStyles = useAnimatedStyle(() => {
        return {
            backgroundColor: withTiming(switchValue ? Colors.Blue : '#ccc', { duration: 300, easing: Easing.inOut(Easing.ease) }),
        };
    });

    const handlePress = () => {
        const newValue = !switchValue;
        setSwitchValue(newValue);
        onChange(newValue);
        offsetX.value = newValue ? 18 : 0;
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <Animated.View style={[switchStyles.switchContainer, animatedContainerStyles]}>
                <Animated.View style={[switchStyles.switchCircle, animatedCircleStyles]} />
            </Animated.View>
        </TouchableOpacity>
    );
};

const switchStyles = StyleSheet.create({
    switchContainer: {
        width: 48,
        height: 28,
        borderRadius: 30,
        justifyContent: 'center',
        paddingLeft: 5
    },
    switchCircle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 7, // Para Android 
        width: 20,
        height: 20,
        borderRadius: 13,
        backgroundColor: Colors.White,
    },
});

const App: React.FC = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={appStyles.container}>
            <CustomSwitch value={isEnabled} onChange={setIsEnabled} />
        </View>
    );
};

const appStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
