import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from 'src/models/Colors/Colors';
import Text from 'src/components/Texts/Text';
import { AntDesign } from '@expo/vector-icons';
import { Period } from 'src/lib/Inventory/domain/Period';
import formatDate from 'src/utils/formateDate';

interface PeriodCardProps {
    data: Period;
}

export default function PeriodCard({ data }: PeriodCardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.headTitle} fontWeight="semibold" numberOfLines={1}>
                    Descripción del periodo de ventas
                </Text>
                <TouchableOpacity style={styles.headButton}>
                    <Text style={[styles.headButtonTitle, { textTransform: 'capitalize' }, data.status_id === 'finalizado' ? { color: Colors.Gray2 } : {}]} fontWeight="semibold">
                        {data.status_id}
                    </Text>
                    <AntDesign style={styles.headButtonIcon} name="right" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <View style={styles.dates}>
                    <Text>
                        Inicio:{' '}
                        <Text fontWeight="bold">{formatDate(new Date(data.start))}</Text>
                    </Text>
                    <Text>
                        Finaliza:{' '}
                        <Text fontWeight="bold">{formatDate(new Date(data.end))}</Text>
                    </Text>
                </View>
                <View style={styles.imagesAndDetails}>
                    <View style={styles.clothImages}>
                        <Image style={[styles.image, styles.image1]} source={require('src/assets/images/prenda1.jpeg')} />
                        <Image style={[styles.image]} source={require('src/assets/images/prenda2.jpeg')} />
                        <Image style={[styles.image]} source={require('src/assets/images/prenda3.jpeg')} />
                        <Image style={[styles.image]} source={require('src/assets/images/prenda1.jpeg')} />
                    </View>
                    <View style={styles.details}>
                        <View style={styles.detailsColumn1}>
                            <Text fontWeight='regular' style={styles.detailsText}>
                                Registrados{' '}
                                <Text style={styles.detailsText} fontWeight="extrabold">{data.clothes.length}</Text>
                            </Text>
                            <Text fontWeight='regular' style={styles.detailsText}>
                                Total{' '}
                                <Text style={styles.detailsText} fontWeight="extrabold">$720</Text>
                            </Text>
                        </View>
                        <View style={styles.detailsColumn2}>
                            <Text fontWeight='regular' style={styles.detailsText}>
                                Vendido{' '}
                                <Text style={styles.detailsText} fontWeight="extrabold">6</Text>
                            </Text>

                            <Text fontWeight='regular' style={styles.detailsText}>
                                Actual{' '}
                                <Text style={styles.detailsText} fontWeight="extrabold">$180</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Dark2,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomColor: Colors.Dark3,
        borderBottomWidth: 1,
        alignItems: 'flex-end',
    },
    headTitle: {
        fontSize: 18,
        color: Colors.White,
        width: '70%',
    },
    headButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headButtonTitle: {
        fontSize: 16,
        color: Colors.Blue3,
    },
    headButtonIcon: {
        marginLeft: 5,
    },
    content: {
        padding: 20,
    },
    dates: {
        marginBottom: 10,
    },
    imagesAndDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    clothImages: {
        flexDirection: 'row',
        overflow: 'hidden',
        borderColor: Colors.White,
        borderWidth: 1,
        borderRadius: 10,
    },
    image: {
        width: 60,
        height: 75,
        borderRadius: 5,
        marginLeft: -55,
    },
    image1: {
        marginLeft: 0,
    },
    details: {
        marginLeft: 10,
        flexDirection: 'row',
        height: 75,
        paddingVertical: 10,
        gap: 25,
    },
    detailsColumn1: {
        justifyContent: 'flex-start',
        gap: 10,
    },
    detailsColumn2: {
        justifyContent: 'flex-start',
        gap: 10,
    },
    detailsText: {
        fontSize: 14,
    },
});
