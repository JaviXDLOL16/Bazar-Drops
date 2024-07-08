import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Collapsible from 'react-native-collapsible';
import { Colors } from 'src/models/Colors/Colors';

interface EditableSectionProps {
    children: React.ReactNode;
}

const EditableSection: React.FC<EditableSectionProps> = ({ children }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <TouchableOpacity onPress={toggleExpand} activeOpacity={0.8}>
                <View style={styles.container}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Editar datos</Text>
                    <Ionicons name={expanded ? "chevron-up" : "chevron-down"} size={24} color="white" />
                </View>
            </TouchableOpacity>

            <Collapsible collapsed={!expanded}  >
                <View style={styles.expandedContent}>
                    {children}
                </View>
            </Collapsible>
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
        paddingHorizontal: 20,
        paddingTop: 15,
    },
});
