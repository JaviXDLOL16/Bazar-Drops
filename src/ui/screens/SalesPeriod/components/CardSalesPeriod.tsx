import React, { useState } from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from 'src/ui/components/Texts/Text';
import { Colors } from 'src/ui/models/Colors/Colors';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Cloth } from 'src/lib/Inventory/domain/Cloth';
import { sizeSimpleText } from 'src/lib/Inventory/infrastructure/clothTransform';

interface CardSalesPeriodProps {
    cloth: Cloth;
}

const CardSalesPeriod: React.FC<CardSalesPeriodProps> = ({ cloth }) => {
    const [showMore, setShowMore] = useState(false);

    const formatDate = (dateString: Date) => {
        const date = new Date(dateString);
        const day = date.getUTCDate().toString().padStart(2, '0');
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Los meses están indexados desde 0
        const year = date.getUTCFullYear().toString().slice(-2); // Obtener los últimos 2 dígitos del año
        return `${day}/${month}/${year}`;
    };

    return (

        <View
            key={cloth.id}
            style={styles.itemContainer}
        >
            <View style={styles.contData}>
                <View style={styles.contImage}>
                    <Image source={{ uri: cloth.image }} style={styles.image} />
                </View>
                <View style={styles.contDataText}>
                    <View style={styles.textBg}>
                        <Text numberOfLines={1} style={styles.text}>{cloth.description}</Text>
                    </View>
                    <View style={styles.contPrices}>
                        <View>
                            <Text style={styles.label}>Precio compra</Text>
                            <View style={[styles.textBg, { width: 85 }]}>
                                <Text fontWeight='extrabold' numberOfLines={1} style={styles.text}>$ {cloth.buy}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>Precio venta</Text>
                            <View style={[styles.textBg, { width: 85 }]}>
                                <Text fontWeight='extrabold' numberOfLines={1} style={styles.text}>$ {cloth.price}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {!showMore && (
                <TouchableOpacity
                    style={styles.contViewAll}
                    onPress={() => setShowMore(true)}
                >

                    <Text style={styles.ViewAll}>Ver todo</Text>
                    <View style={{ position: 'absolute', bottom: 0, right: 0, flexDirection: 'row', gap: 5 }}>
                        <View style={[{ paddingHorizontal: 3, paddingVertical: 2, borderRadius: 5 }, cloth.status_id === 'disponible' ? { backgroundColor: Colors.Green2 } : { backgroundColor: Colors.Red3, }]}>
                            {
                                cloth.status_id === 'disponible' ? (
                                    <Ionicons name="checkmark-circle-sharp" size={20} color={Colors.Green} />
                                ) : (
                                    <Ionicons name="cash-sharp" size={20} color={Colors.Red} />
                                )
                            }
                        </View>
                        <View style={{ paddingHorizontal: 6, width: 26, backgroundColor: Colors.Blue4, borderRadius: 5 }}>
                            <Text style={{ textAlign: 'center', lineHeight: 22 }} fontWeight='bold'>{sizeSimpleText[cloth.size]}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            {showMore && (
                <>
                    <View style={styles.contPlaceDate}>
                        <View style={styles.contPlace}>
                            <Text style={styles.label}>Lugar de compra</Text>
                            <View style={styles.textBg}>
                                <Text numberOfLines={1} style={styles.text}>{cloth.location}</Text>
                            </View>
                        </View>
                        <View style={styles.contDate}>
                            <Text style={styles.label}>Fecha de compra</Text>
                            <View style={[styles.textBg, { width: 98 }]}>
                                <Text numberOfLines={1} style={styles.text}>{formatDate(new Date(cloth.created_at))}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contTypeSize}>
                        <View>
                            <Text style={styles.label}>Tipo</Text>
                            <View style={[styles.textBg, { backgroundColor: Colors.Dark3, width: 140, justifyContent: 'center' }]}>
                                <Text numberOfLines={1} style={[styles.text, { textTransform: 'capitalize' }]}>{cloth.type}</Text>
                            </View>
                        </View>
                        <View >
                            <Text style={styles.label}>Talla</Text>
                            <View style={[styles.textBg, { backgroundColor: Colors.Blue4, width: 140, }]}>
                                <FontAwesome5 name="tshirt" size={12} color="white" />
                                <Text numberOfLines={1} style={[styles.text, { textAlign: 'center', textTransform: 'capitalize' }]}>{cloth.size}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contTypeSize}>
                        <View>
                            <Text style={styles.label}>Status</Text>
                            <View style={[styles.textBg, { width: 140, justifyContent: 'center' }, cloth.status_id === 'disponible' ? { backgroundColor: Colors.Green2 } : { backgroundColor: Colors.Red3 }]}>
                                <Text numberOfLines={1} style={[styles.text, { textTransform: 'capitalize' }]}>{cloth.status_id}</Text>
                            </View>
                        </View>
                        <View style={styles.contDate}>
                            <Text style={styles.label}>Fecha de venta</Text>
                            <View style={[styles.textBg, { width: 98 }]}>
                                <Text numberOfLines={1} style={styles.text}>{cloth.sold_at ? formatDate(new Date(cloth.sold_at)) : '----'}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => setShowMore(false)}
                    >
                        <Text style={styles.ViewAll}>Ver menos</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    contImage: {
        width: 90,
    },
    contData: {
        gap: 12,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    contTitle: {
        width: '100%',
        alignItems: 'center',
    },
    itemContainer: {
        backgroundColor: Colors.Dark2,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
    },
    image: {
        width: '100%',
        height: 96,
        borderRadius: 10
    },
    text: {
        fontSize: 18,
        lineHeight: 20,
    },
    textBg: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: Colors.Dark1,
        borderRadius: 10,
    },
    contDataText: {
        gap: 10,
        flex: 1
    },
    contPrices: {
        gap: 15,
        flexDirection: 'row'
    },
    label: {
        color: Colors.Gray2,
        marginBottom: 5
    },

    contViewAll: {
        paddingTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    ViewAll: {
        textAlign: 'center',
        flex: 1,
        marginLeft: '7%',
        paddingTop: 10,
        fontSize: 14,
        color: Colors.Gray2
    },
    additionalInfo: {
    },
    contPlaceDate: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
        marginTop: 5,
        gap: 10
    },
    contPlace: {
        flex: 1
    },
    textPlace: {
        backgroundColor: Colors.Dark1,
        padding: 5,
        borderRadius: 5
    },
    textTitle: {
        color: Colors.Gray2,
    },
    contDate: {
    },
    contTypeSize: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        gap: 15
    },
    textType: {
        backgroundColor: Colors.Dark3,
        paddingVertical: 5,
        paddingHorizontal: 25,
        borderRadius: 5
    },
    textSize: {
        paddingVertical: 5,
        backgroundColor: Colors.Blue4,
        borderRadius: 5,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    contType: {
        flexDirection: 'row'
    },
    contStatus: {
        paddingVertical: 5,
        paddingHorizontal: 25,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    textStatus: {
        color: Colors.White,
        marginLeft: 5,
    },
    buttonSeeLess: {
        marginTop: 15
    }
});

export default CardSalesPeriod;
