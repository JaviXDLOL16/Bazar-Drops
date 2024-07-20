import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Text from 'src/components/Texts/Text'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import { Colors } from 'src/models/Colors/Colors'
import { Ionicons } from "@expo/vector-icons";

export default function SellerDetails() {
    return (
        <ScreenContainer scrollEnable={true} style={{ gap: 30 }}>
            <View style={styles.containerInformation}>
                <TouchableOpacity activeOpacity={0.8} style={styles.buttonPerson} >

                    <Ionicons name="person" size={80} color="white" />

                </TouchableOpacity>
                <View style={styles.containerAccount}>
                    <Text fontWeight='bold' style={styles.textName}>Raul Arroyo</Text>
                </View>
            </View>

            <View style={styles.reviewsContainer}>
                <Text fontWeight='bold' style={styles.reviewTitle}>Reseñas del vendedor</Text>

                <View style={{ backgroundColor: Colors.Dark1, padding: 10, borderRadius: 20 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 3, paddingHorizontal: 5, borderRadius: 8, gap: 5, alignItems: 'center' }}>
                        <View style={{ backgroundColor: Colors.Gray2, padding: 3, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="person" size={18} color="white" />
                        </View >
                        <Text style={{ fontSize: 14 }}>{'Diego Alberto'}</Text>
                    </TouchableOpacity>
                    <Text style={{ paddingHorizontal: 35 }} numberOfLines={3}>
                        He comprado en varias ocasiones con él, la calidad  de la ropa es muy buena, lo recomiendo
                    </Text>
                </View>
            </View>

            <View style={styles.reviewsContainer}>
                <Text fontWeight='bold' style={styles.reviewTitle}>Horarios de entrega</Text>


            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    containerInformation: {
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonPerson: {
        backgroundColor: Colors.Dark1,
        height: 110,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    },
    containerCamera: {
        backgroundColor: Colors.Blue3,
        height: 32,
        width: 32,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 1,
        right: 10,

    },
    containerAccount: {
        marginLeft: 20
    },
    textName: {
        color: Colors.White,
        fontSize: 26,
    },
    reviewsContainer: {

    },
    reviewTitle: {
        fontSize: 20,
        marginBottom: 10
    }
})