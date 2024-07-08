import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { stackParamList } from 'App'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import { StyleSheet } from 'react-native'
import Button from 'src/components/Buttons/Button'
import Text from 'src/components/Texts/Text'


type Props = NativeStackScreenProps<stackParamList, 'SalesPeriods'>


export default function SalesPeriods({ navigation }: Props) {
    return (
        <ScreenContainer style={styles.container}>
            <Button title='Nuevo periodo de ventas' onPress={() => navigation.navigate('Home')} size='Medium' />

        </ScreenContainer>

    )
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
    },
    AddPeriodButton: {
        width: 250,
    },
})