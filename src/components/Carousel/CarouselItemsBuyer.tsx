import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { Colors } from 'src/models/Colors/Colors';
import Text from '../Texts/Text';
import Button from '../Buttons/Button';
import Collapsible from 'react-native-collapsible';
import Input from '../form/Input';

type CarouselItemsBuyerProps = {
    imageSrc: any;
    index: number;
    nombre: string;
    talla: string;
    fecha: string;
    precio: number;
    numero: any;
    comprador: string;
    oferta?: number;
    lugar: string;
};

const CarouselItemsBuyer: React.FC<CarouselItemsBuyerProps> = React.memo(({ imageSrc, nombre, precio, fecha, comprador, numero, oferta, lugar }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <View style={styles.cardContainer}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "position"}>

                {oferta ? (
                    <>
                        <Text fontWeight='bold' style={styles.textAcceptBuyer}>¡Te han hecho oferta!</Text>
                        <View style={styles.contData}>
                            <View style={styles.contImage}>
                                <Image source={imageSrc} style={styles.image} />
                            </View>
                            <View style={styles.contTex}>
                                <Text style={styles.textData}>{nombre}</Text>
                                <Text style={styles.textData}>Precio original: ${precio}</Text>
                                <Text style={styles.textData}>Entrega: {fecha}</Text>
                                <Text style={styles.textData}>Comprador: {comprador}</Text>
                                <Text style={styles.textData}>Numero: {numero}</Text>
                                <Text style={styles.textDataPlace}>Lugar de entrega: {lugar}</Text>

                            </View>
                        </View>
                        <Text fontWeight='bold' style={styles.textResponse}>Oferta del comprador: ${oferta}</Text>
                        {!expanded && (
                            <Button
                                onPress={toggleExpand}
                                textStyle={{ fontSize: 16 }}
                                title='Responder oferta'
                                size='Small'
                                style={{ backgroundColor: Colors.Blue2, marginBottom: 15 }}
                            />
                        )}
                        <Collapsible collapsed={!expanded}>
                            <View style={styles.contSend}>
                                <View style={styles.contInputSend}>
                                    <Text fontWeight='bold' style={styles.textPutPrice} >Pon tu precio</Text>
                                    <Input
                                        placeholder='Precio'
                                        requeriment=''
                                    />
                                </View>
                                <View style={styles.contButtonSend}>
                                    <Button
                                        onPress={() => { }}
                                        textStyle={{ fontSize: 16 }}
                                        title='Enviar'
                                        size='Small'
                                        style={{ backgroundColor: Colors.Blue }}
                                    />
                                </View>
                            </View>
                        </Collapsible>
                    </>
                ) : (
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
                    </>
                )}
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
            </KeyboardAvoidingView>
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
        padding: 20
    },
    textAcceptBuyer: {
        color: Colors.White,
        marginBottom: 20,
    },
    textOferta: {
        color: Colors.White,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contData: {
        flexDirection: 'row',
        paddingBottom: 20,
    },
    contImage: {
        height: 100,
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
