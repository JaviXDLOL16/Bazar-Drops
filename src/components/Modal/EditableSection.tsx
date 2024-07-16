import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Platform, KeyboardAvoidingView, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Collapsible from 'react-native-collapsible';
import { Colors } from 'src/models/Colors/Colors';

interface EditableSectionProps {
    children: React.ReactNode;
    title: String
    style?: ViewStyle | ViewStyle[];
    styleText?: TextStyle | ViewStyle[];
}

const EditableSection: React.FC<EditableSectionProps> = ({ children, title, style, styleText }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <TouchableOpacity onPress={toggleExpand} activeOpacity={0.8} style={[styles.container, style]}>
                <Text style={[styles.textTitle, styleText]}>{title}</Text>
                <Ionicons name={expanded ? "chevron-up" : "chevron-down"} size={24} color="white" />
            </TouchableOpacity>

            <Collapsible collapsed={!expanded}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.expandedContent}
                >
                    {children}
                </KeyboardAvoidingView>
            </Collapsible>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.Dark2,
        paddingHorizontal: 25,
        flexDirection: 'row',
    },
    expandedContent: {
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    textTitle: {
        color: 'white',
        fontSize: 20,
    }
});

export default EditableSection;