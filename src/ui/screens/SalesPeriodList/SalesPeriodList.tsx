import React, { useCallback, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { stackParamList } from 'App'
import ScreenContainer from 'src/ui/components/layout/ScreenContainer'
import { ScrollView, StyleSheet } from 'react-native'
import Button from 'src/ui/components/Buttons/Button'
import { Filter, FilterContainer } from 'src/ui/components/Filter/Filter'
import PeriodCard from './components/PeriodCard'
import { createAxiosPeriodRepository } from 'src/lib/Inventory/infrastructure/AxiosPeriodRepository'
import { createPeriodService } from 'src/lib/Inventory/application/PeriodService'
import { Period } from 'src/lib/Inventory/domain/Period'
import { useFocusEffect } from '@react-navigation/native'
import { useAuth } from 'src/ui/contexts/AuthContext'
import Text from 'src/ui/components/Texts/Text'
import { Colors } from 'src/ui/models/Colors/Colors'

type Props = NativeStackScreenProps<stackParamList, 'SalesPeriodList'>

const repository = createAxiosPeriodRepository();
const service = createPeriodService(repository);

export default function SalesPeriodList({ navigation }: Props) {

    const [periodList, setPeriodList] = useState<Period[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const { getUserInformation } = useAuth();

    const [userId, setUserId] = useState(null);

    useFocusEffect(
        React.useCallback(() => {
            setIsLoading(true);
            getPeriodList();
        }, [])
    );


    const getPeriodList = async () => {
        try {
            const result = await getUserInformation!();
            const periods = await service.getAll(result.id);
            setPeriodList(periods)
        } catch (error: any) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <ScreenContainer scrollEnable={false} style={styles.container}>
            <Button style={styles.AddPeriodButton} title='Nuevo periodo de ventas' onPress={() => navigation.navigate('NewSalesPeriod')} size='Medium' />

            <FilterContainer style={styles.filterContainer}>
                <Filter title='Filtrar' />
            </FilterContainer>
            <ScrollView style={styles.scroll}>
                <>
                    {isLoading ? (
                        <Text style={{ color: Colors.Gray2, textAlign: 'center', marginTop: 200, fontSize: 20 }}>Cargando...</Text>
                    ) : (
                        periodList.length === 0 ? (
                            <Text style={{ textAlign: 'center', marginTop: 200, color: Colors.Gray2, fontSize: 18 }}>No hay periodos de venta creados aún</Text>
                        ) : (
                            periodList.reverse().map((period) => <PeriodCard key={period.id} data={period} />)
                        )
                    )}
                </>
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