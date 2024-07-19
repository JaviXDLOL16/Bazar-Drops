import { StyleSheet, View, ViewProps } from 'react-native'
import React from 'react'
import ClothCardForPendingDelivery from 'src/components/Card/ClothCardForPendingDelivery'
import Text from 'src/components/Texts/Text'
import { Colors } from 'src/models/Colors/Colors'
import useStackNavigation from 'src/hooks/useStackNavigation'

interface Props extends ViewProps { }

export default function RecentlySoldSection({ style, ...rest }: Props) {

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
            <ClothCardForPendingDelivery />
            <ClothCardForPendingDelivery />
            <ClothCardForPendingDelivery />
        </View>
    )
}

const styles = StyleSheet.create({})