import { StyleSheet, View, ViewProps } from 'react-native'
import React from 'react'
import ClothCardForPendingDelivery from 'src/components/Card/ClothCardForPendingDelivery'
import Text from 'src/components/Texts/Text'
import { Colors } from 'src/models/Colors/Colors'
import useStackNavigation from 'src/hooks/useStackNavigation'
import { Cloth } from 'src/lib/Inventory/domain/Cloth'

interface Props extends ViewProps {
    data: Cloth[];
}

export default function RecentlySoldSection({ style, data, ...rest }: Props) {

    const navigation = useStackNavigation();

    return (
        <View style={[{ gap: 10 }, style]} {...rest}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    paddingRight: 15,
                }}
            >
                <Text fontWeight='bold' style={{ fontSize: 18 }}>Vendidos recientemente</Text>
                <Text
                    fontWeight='bold'
                    style={{ fontSize: 14, color: Colors.default400 }}
                    onPress={() => { navigation.navigate('DeliveryList', { status: 'vendido' }) }}
                >
                    Ver todo
                </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center', minHeight: 160 }}>
                {data.map((cloth, index) => (
                    <ClothCardForPendingDelivery key={index} cloth={cloth} />
                ))}
                {data.length === 0 &&
                    <View style={{ gap: 10, paddingHorizontal: 35 }}>
                        <Text fontWeight='bold' style={{ color: Colors.default400, fontSize: 24, textAlign: 'center' }}>¡Aún no has vendido ninguna prenda!</Text>
                        <Text style={{ color: Colors.Gray2, fontSize: 20, textAlign: 'center' }}>Registra más artículos para atraer a más clientes. </Text>
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})