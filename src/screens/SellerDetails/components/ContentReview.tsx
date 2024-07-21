import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from 'src/components/Buttons/Button';
import TextInput from 'src/components/form/TextInput';
import Text from 'src/components/Texts/Text';
import { Colors } from 'src/models/Colors/Colors';
import {
    Ionicons
} from '@expo/vector-icons';

export default function ContentReview() {
    return (
        <View style={styles.contReview}>
            <View style={styles.inputContainer}>
                <TextInput
                    title='Añade tu reseña'
                    placeholder='Descripcion'
                />
                <View style={styles.contButtonSend}>
                    <Button
                        title='Enviar'
                        size='Small'
                        style={styles.buttonSend}
                        onPress={() => { }}
                    />
                </View>
            </View>
            <ScrollView>

                <TouchableOpacity style={{ backgroundColor: Colors.Dark1, padding: 10, borderRadius: 20 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 3, paddingHorizontal: 5, borderRadius: 8, gap: 5, alignItems: 'center' }}>
                        <View style={{ backgroundColor: Colors.Gray2, padding: 3, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="person" size={18} color="white" />
                        </View >
                        <Text style={{ fontSize: 14 }}>{'Diego Albert'}</Text>
                    </TouchableOpacity>
                    <Text style={{ paddingHorizontal: 35 }} numberOfLines={3}>
                        He comprado en varias ocasiones con él, la calidad  de la ropa es muy buena, lo recomiendo
                    </Text>
                </TouchableOpacity>
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
        backgroundColor: Colors.Blue
    },
    contButtonSend: {
        alignItems: 'flex-end',
    }
});
