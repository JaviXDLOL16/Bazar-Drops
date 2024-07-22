import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Text from 'src/components/Texts/Text'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import { Colors } from 'src/models/Colors/Colors'
import { Ionicons } from "@expo/vector-icons";
import CustomModal from 'src/components/Modal/Modal'
import ContentModalPeriod from '../SalesPeriod/components/ContentModalPeriod'
import ContentReview from './components/ContentReview'
import CardClothes from './components/CardClothes'

export default function SellerDetails() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <ScreenContainer scrollEnable={true} style={{ gap: 20 }}>
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

                <TouchableOpacity onPress={toggleModal} style={{ backgroundColor: Colors.Dark1, padding: 10, borderRadius: 20 }}>
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
            </View>

            <View style={styles.reviewsContainer}>
                <Text fontWeight='bold' style={styles.TitleHour}>Horarios de entrega</Text>
                <ScrollView horizontal>
                    <View style={styles.contHours}>
                        <Text fontWeight='bold' style={styles.textHour}>Lunes 2:30</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.contTitlePhotos}>
                <Text>Productos del vendedor</Text>
                <Text style={styles.contAvailable}>Disponibles</Text>
            </View>
            <View style={styles.contCardClothes}>
                <CardClothes />
                <CardClothes />
                <CardClothes />
                <CardClothes />
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
    },
    contHours: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 10
    },
    TitleHour: {
        fontSize: 20,
    },
    textHour: {
        backgroundColor: Colors.Dark1,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5
    },
    contAvailable: {
        fontSize: 12,
        backgroundColor: Colors.Dark1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    contTitlePhotos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contCardClothes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
})
