import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Colors } from 'src/ui/models/Colors/Colors';
import Text from '../Texts/Text';
import Button from '../Buttons/Button';

type CarouselItemsBuyerProps = {
    imageSrc: any;
    index: number;
    nombre: string;
    talla: string;
    fecha: string;
    precio: number;
    numero: any;
    comprador: string;
    status?: string;
    lugar: string;
};

const CarouselItemsBuyer: React.FC<CarouselItemsBuyerProps> = React.memo(({ imageSrc, nombre, precio, fecha, comprador, numero, status, lugar }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <View style={styles.cardContainer}>
            {status === 'rechazada' ? (
                <>
                    <Text fontWeight='bold' style={styles.textAcceptBuyer}>Oferta rechazada</Text>
                    <View style={styles.contData}>
                        <View style={styles.contImage}>
                            <Image source={imageSrc} style={styles.image} />
                        </View>
                        <View style={styles.contTex}>
                            <Text style={styles.textData}>{nombre}</Text>
                            <Text style={styles.textData}>Precio original: ${precio}</Text>
                            <Text style={styles.textData}>Entrega: {fecha}</Text>
                            <Text style={styles.textData}>vendedor: {comprador}</Text>
                            <Text style={styles.textData}>Numero: {numero}</Text>
                            <Text style={styles.textDataPlace}>Lugar de entrega: {lugar}</Text>
                        </View>
                    </View>
                </>
            ) : status === 'aceptada' ? (
                <>
                    <Text fontWeight='bold' style={styles.textAcceptBuyer}>Oferta aceptada</Text>
                    <View style={styles.contData}>
                        <View style={styles.contImage}>
                            <Image source={imageSrc} style={styles.image} />
                        </View>
                        <View style={styles.contTex}>
                            <Text style={styles.textData}>{nombre}</Text>
                            <Text style={styles.textData}>Precio original: ${precio}</Text>
                            <Text style={styles.textData}>Fecha: {fecha}</Text>
                            <Text style={styles.textData}>vendedor: {comprador}</Text>
                            <Text style={styles.textData}>Numero: {numero}</Text>
                            <Text style={styles.textDataPlace}>Lugar de entrega: {lugar}</Text>
                        </View>
                    </View>
                    <View style={styles.contButtons}>
                        <View style={{ width: '50%', paddingRight: 5 }}>
                            <Button
                                onPress={() => { }}
                                style={{ backgroundColor: Colors.Dark3 }}
                                textStyle={{ fontSize: 16 }}
                                title='Ver en entregas'
                                size='Small'
                            />
                        </View>
                    </View>
                </>
            ) : status === 'realizada' ? (
                <>
                    <Text fontWeight='bold' style={styles.textAcceptBuyer}>Oferta realizada</Text>
                    <View style={styles.contData}>
                        <View style={styles.contImage}>
                            <Image source={imageSrc} style={styles.image} />
                        </View>
                        <View style={styles.contTex}>
                            <Text style={styles.textData}>{nombre}</Text>
                            <Text style={styles.textData}>Precio original: ${precio}</Text>
                            <Text style={styles.textData}>Fecha: {fecha}</Text>
                            <Text style={styles.textData}>Vendedor: {comprador}</Text>
                            <Text style={styles.textData}>Numero: {numero}</Text>
                            <Text style={styles.textDataPlace}>Lugar de entrega: {lugar}</Text>
                        </View>
                    </View>
                    <View style={styles.contButtons}>
                        <View style={{ flex: 1, paddingRight: 5 }}>
                            <Button
                                onPress={() => { }}
                                style={{ backgroundColor: Colors.Dark3 }}
                                textStyle={{ fontSize: 16 }}
                                title='Solicitud enviada'
                                size='Small'
                            />
                        </View>
                        <View style={{ flex: 1, paddingLeft: 5 }}>
                            <Button
                                onPress={() => { }}
                                textStyle={{ fontSize: 16 }}
                                title='Eliminar'
                                size='Small'
                                style={{ backgroundColor: Colors.Red }}
                            />
                        </View>
                    </View>
                </>
            ) : status === 'realizaa' ? (
                <>
                    <Text fontWeight='bold' style={styles.textAcceptBuyer}>¡Un comprador ha aceptado tu oferta!</Text>
                    <View style={styles.contData}>
                        <View style={styles.contImage}>
                            <Image source={imageSrc} style={styles.image} />
                        </View>
                        <View style={styles.contTex}>
                            <Text style={styles.textData}>{nombre}</Text>
                            <Text style={styles.textData}>Precio: ${precio}</Text>
                            <Text style={styles.textData}>Fecha: {fecha}</Text>
                            <Text style={styles.textData}>Comprador: {comprador}</Text>
                            <Text style={styles.textData}>Numero: {numero}</Text>
                            <Text style={styles.textDataPlace}>Lugar de entrega: {lugar}</Text>
                        </View>
                    </View>
                    <View style={styles.contButtons}>
                        <View style={{ flex: 1, paddingRight: 5 }}>
                            <Button
                                onPress={() => { }}
                                style={{ backgroundColor: Colors.Blue3 }}
                                textStyle={{ fontSize: 16 }}
                                title='Aceptar'
                                size='Small'
                            />
                        </View>
                        <View style={{ flex: 1, paddingLeft: 5 }}>
                            <Button
                                onPress={() => { }}
                                textStyle={{ fontSize: 16 }}
                                title='Eliminar'
                                size='Small'
                                style={{ backgroundColor: Colors.Red }}
                            />
                        </View>
                    </View>
                </>
            ) : null}
        </View>
    );
});

export { CarouselItemsBuyer };

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 15,
        borderRadius: 15,
        backgroundColor: Colors.Dark2,
        overflow: 'hidden',
        padding: 15
    },
    textAcceptBuyer: {
        color: Colors.White,
        marginBottom: 10,
    },
    textOferta: {
        color: Colors.White,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contData: {
        flexDirection: 'row',
    },
    contImage: {
        height: 125,
        width: 100,
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 10
    },
    contTex: {
        marginLeft: 15,
    },
    textData: {
        fontSize: 14
    },
    contButtons: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10
    },
    textResponse: {
        color: Colors.White,
        marginBottom: 10
    },
    textPutPrice: {
        marginBottom: 5
    },
    contSend: {
        flexDirection: 'row',
    },
    contButtonSend: {
        justifyContent: 'center',
        width: '48%',
        paddingHorizontal: 20,
        paddingTop: 25
    },
    contInputSend: {
        width: '52%'
    },
    textDataPlace: {
        fontSize: 14,
        maxWidth: '83%',
    }
});
