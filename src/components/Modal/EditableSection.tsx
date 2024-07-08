import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Animated } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Collapsible from 'react-native-collapsible';
import { Colors } from 'src/models/Colors/Colors';

interface EditableSectionProps {
    children: React.ReactNode;
}

const EditableSection: React.FC<EditableSectionProps> = ({ children }) => {
    const [expanded, setExpanded] = useState(false);
    const [animation] = useState(new Animated.Value(0));

    const toggleExpand = () => {
        if (expanded) {
            Animated.timing(animation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(animation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
        setExpanded(!expanded);
    };

    const height = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 200], // Cambia 200 al tamaño que necesites
    });

    return (
        <>
            <TouchableOpacity onPress={toggleExpand} activeOpacity={0.8}>
                <View style={styles.container}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Editar datos</Text>
                    <Ionicons name={expanded ? "chevron-up" : "chevron-down"} size={24} color="white" />
                </View>
            </TouchableOpacity>

            <Animated.View style={{ ...styles.expandedContent, height }}>
                {expanded && children}
            </Animated.View>
        </>
    );
};

export default EditableSection;

const styles = StyleSheet.create({
    container: {
        height: 33,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.Dark2,
        paddingHorizontal: 25,
        flexDirection: 'row',
    },
    expandedContent: {
        overflow: 'hidden',
        backgroundColor: Colors.Dark2,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});
