import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from 'src/ui/components/Buttons/Button';
import TextInput from 'src/ui/components/form/TextInput';
import Text from 'src/ui/components/Texts/Text';
import { Colors } from 'src/ui/models/Colors/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function ContentReview() {
    return (
        <View style={styles.contReview}>
            <View style={styles.inputContainer}>
                <TextInput
                    title='Añade tu reseña'
                    placeholder='Descripcion'
                />
                <View style={styles.contButtonSend}>
                    <Text fontWeight='bold'>Comentarios</Text>
                    <Button
                        title='Enviar'
                        size='Small'
                        style={styles.buttonSend}
                        onPress={() => { }}
                    />
                </View>
            </View>
            <ScrollView style={styles.contItems}>
                <View style={styles.commentContainer}>
                    <TouchableOpacity style={styles.commentHeader}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="person" size={18} color="white" />
                        </View>
                        <Text style={styles.commentAuthor}>{'Diego Albert'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.commentText} numberOfLines={3}>
                        He comprado en varias ocasiones con él, la calidad de la ropa es muy buena, lo recomiendo
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contReview: {
        marginTop: 15,
    },
    inputContainer: {
        position: 'relative',
    },
    buttonSend: {
        width: 133,
        backgroundColor: Colors.Blue,
    },
    contButtonSend: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    contItems: {
        marginTop: 15,
    },
    commentContainer: {
        backgroundColor: Colors.Dark1,
        padding: 10,
        borderRadius: 20,
    },
    commentHeader: {
        flexDirection: 'row',
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 8,
        gap: 5,
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor: Colors.Gray2,
        padding: 3,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    commentAuthor: {
        fontSize: 14,
    },
    commentText: {
        paddingHorizontal: 35,
        textAlign: 'justify',
    },
});
