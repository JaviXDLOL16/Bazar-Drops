import { StyleSheet, View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenContainer from 'src/ui/components/layout/ScreenContainer'
import Search from 'src/ui/components/Search/Search'
import { FilterContainer } from 'src/ui/components/Filter/Filter'
import { Colors } from 'src/ui/models/Colors/Colors'
import Text from 'src/ui/components/Texts/Text'
import CardSalesPeriod from './components/CardSalesPeriod'
import { Entypo, FontAwesome, Octicons } from '@expo/vector-icons';
import CustomModal from 'src/ui/components/Modal/Modal'
import ContentModalPeriod from './components/ContentModalPeriod'
import FilterForClothStatus, { ClothFilterStates } from './components/FilterForClothStatus'
import { createAxiosClothRepository } from 'src/lib/Inventory/infrastructure/AxiosClothRepository'
import { createClothService } from 'src/lib/Inventory/application/ClothService'
import { Cloth } from 'src/lib/Inventory/domain/Cloth'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { stackParamList } from 'App'
import Graphics from './components/Graphics/Graphics'
import { useFocusEffect } from '@react-navigation/native'

const repository = createAxiosClothRepository();
const service = createClothService(repository);

type Props = NativeStackScreenProps<stackParamList, 'SalesPeriod'>;
export default function SalesPeriod({ navigation, route }: Props) {

    const periodId = route.params?.periodId;

    const [clothes, setClothes] = useState<Cloth[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterForStatus, setFilterForStatus] = useState<ClothFilterStates>('todos');
    const [search, setSearch] = useState('');


    const applyFilters = (clothes: Cloth[]) => {
        let filteredClothes = clothes;

        filteredClothes = filteredClothes.filter(cloths => {
            const matchesStatus = filterForStatus === 'todos' ? true : cloths.status_id === filterForStatus
            const matchesDescription = cloths.description.toLowerCase().includes(search.toLowerCase());
            const matchesBuy = cloths.buy.toString().toLowerCase().includes(search.toLowerCase());
            const matchSize = cloths.size.toLowerCase().includes(search.toLowerCase());
            return matchesStatus && (matchesDescription || matchesBuy || matchSize);
        }
        );

        return filteredClothes;
    };

    const filteredClothes = applyFilters(clothes);

    const getClothes = async () => {
        try {
            const clothes = await service.getAllByPeriod(periodId as number);
            setClothes(clothes.reverse());
        } catch (error: any) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisiblet, setModalVisiblet] = useState(false);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleModalt = () => {
        setModalVisiblet(!isModalVisiblet);
    };


    useFocusEffect(
        React.useCallback(() => {
            setIsLoading(true);
            getClothes();
        }, [])
    );


    return (
        <ScreenContainer style={{ marginBottom: 30 }}>
            <View style={styles.contHeader}>
                <Search style={{ backgroundColor: Colors.Dark3 }} onChangeText={(text) => setSearch(text)} value={search} />
                <FilterContainer style={styles.filterContainer}>
                    <FilterForClothStatus onChange={setFilterForStatus} value={filterForStatus} />
                </FilterContainer>
            </View>
            <View>
                <View style={styles.contTitle}>
                    <Text fontWeight='bold' style={{ fontSize: 18 }}>Prendas: {clothes.length}</Text>
                    <Text fontWeight='bold' style={{ fontSize: 18 }}>Total: ${clothes.reduce((acomulador, actual) => acomulador + actual.buy, 0)}</Text>
                </View>
            </View>
            {isLoading ? (
                <ActivityIndicator style={{ marginTop: 120 }} size="large" color={Colors.Blue3} />
            ) : (
                <FlatList
                    data={filteredClothes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CardSalesPeriod cloth={item} />}
                    showsVerticalScrollIndicator={false}
                />
            )}
            <View style={styles.contInformation}>
                <TouchableOpacity style={styles.buttonMore} onPress={() => { navigation.navigate('RegisterClothes', { periodId: periodId || 0 }) }}>
                    <Entypo name='plus' size={45} color={Colors.White} />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal} style={styles.buttonList}>
                    <FontAwesome name='list-alt' size={34} color={Colors.White} />
                </TouchableOpacity >
                <TouchableOpacity onPress={toggleModalt} style={styles.buttonGraphic}>
                    <Octicons name='graph' size={34} color={Colors.White} />
                </TouchableOpacity >
                <CustomModal isVisible={isModalVisible} onClose={toggleModal}>
                    <ContentModalPeriod />
                </CustomModal>

                <CustomModal isVisible={isModalVisiblet} onClose={toggleModalt}>
                    <Graphics />
                </CustomModal>
            </View>

        </ScreenContainer>
    );
}
const styles = StyleSheet.create({
    filterContainer: {
        marginTop: 10,
        justifyContent: 'space-between',
    },
    contHeader: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: Colors.Dark2,
        borderRadius: 10,
        marginBottom: 15,
    },
    contFilter: {
        flexDirection: 'row',
    },
    Filter: {
        marginRight: 5,
    },
    buttonInformation: {
        backgroundColor: Colors.Dark3,
    },
    contInformation: {
        position: 'absolute',
        bottom: -10,
        right: 20,
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20,
    },
    contTitle: {
        flexDirection: 'row',
        gap: 30,
        marginBottom: 10,
    },
    buttonMore: {
        height: 60,
        width: 60,
        backgroundColor: Colors.Blue3,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonList: {
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Gray2,
        borderRadius: 100,
    },
    buttonGraphic: {
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Green,
        borderRadius: 100,
    }
}
);
