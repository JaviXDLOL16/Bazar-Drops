import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { stackParamList } from 'App'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import { PermissionsAndroid, ScrollView, StyleSheet } from 'react-native'
import Button from 'src/components/Buttons/Button'
import { Filter, FilterContainer } from 'src/components/Filter/Filter'
import PeriodCard from './components/PeriodCard'


type Props = NativeStackScreenProps<stackParamList, 'SalesPeriodList'>


export default function SalesPeriodList({ navigation }: Props) {
    return (
        <ScreenContainer scrollEnable={false} style={styles.container}>
            <Button style={styles.AddPeriodButton} title='Nuevo periodo de ventas' onPress={() => navigation.navigate('Home')} size='Medium' />

            <FilterContainer style={styles.filterContainer}>
                <Filter title='Filtrar' />
                <Filter icon={"arrow-down"} />
            </FilterContainer>
            <ScrollView style={styles.scroll}>
                <PeriodCard />
                <PeriodCard />
                <PeriodCard />
                <PeriodCard />
            </ScrollView>

        </ScreenContainer>

    )
}

const styles = StyleSheet.create({
    container: {

    },
    AddPeriodButton: {
        width: 250,
        marginBottom: 15
    },
    filterContainer: {
        marginBottom: 10
    },
    scroll: {
    }
})