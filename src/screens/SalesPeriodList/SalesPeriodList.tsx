import React, { useCallback, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { stackParamList } from 'App'
import ScreenContainer from 'src/components/layout/ScreenContainer'
import { PermissionsAndroid, ScrollView, StyleSheet } from 'react-native'
import Button from 'src/components/Buttons/Button'
import { Filter, FilterContainer } from 'src/components/Filter/Filter'
import PeriodCard from './components/PeriodCard'
import { createAxiosPeriodRepository } from 'src/lib/Inventory/infrastructure/AxiosPeriodRepository'
import { createPeriodService } from 'src/lib/Inventory/application/PeriodService'
import { Period } from 'src/lib/Inventory/domain/Period'
import { useFocusEffect } from '@react-navigation/native'


type Props = NativeStackScreenProps<stackParamList, 'SalesPeriodList'>

const repository = createAxiosPeriodRepository();
const service = createPeriodService(repository);

export default function SalesPeriodList({ navigation }: Props) {

    const [periodList, setPeriodList] = useState<Period[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getPeriodList = async () => {
        try {
            const periods = await service.getAll(2)
            setPeriodList(periods)
        } catch (error) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }

    }

    useFocusEffect(
        useCallback(() => {
            setIsLoading(true);
            getPeriodList();
        }, [])
    );


    return (
        <ScreenContainer scrollEnable={false} style={styles.container}>
            <Button style={styles.AddPeriodButton} title='Nuevo periodo de ventas' onPress={() => navigation.navigate('NewSalesPeriod')} size='Medium' />

            <FilterContainer style={styles.filterContainer}>
                <Filter title='Filtrar' />
            </FilterContainer>
            <ScrollView style={styles.scroll}>
                {periodList.map((period) => <PeriodCard key={period.id} data={period} />)}
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