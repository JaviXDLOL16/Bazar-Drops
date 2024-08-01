import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { createOfferService } from 'src/lib/SellerBuyer/application/OfferService';
import { createAxiosOfferRepository } from 'src/lib/SellerBuyer/infrastructure/AxiosOfferRepository';
import { CarouselBuyer } from 'src/ui/components/Carousel/CarouselBuyer';
import ScreenContainer from 'src/ui/components/layout/ScreenContainer';
import Search from 'src/ui/components/Search/Search';
import { useAuth } from 'src/ui/contexts/AuthContext';



const repository = createAxiosOfferRepository();
const service = createOfferService(repository);

export default function BuyerRequest() {

    const { getUserInformation } = useAuth();

    const [role, setRole] = useState(null);

    const [data, setData] = useState([])

    useFocusEffect(
        React.useCallback(() => {
            const loadData = async () => {

                const result = await getUserInformation!();
                setRole(result.role_id);

                if (result.role_id === 2) {
                    const data = await service.getAllByBuyerId(1);
                    setData(data);
                } else {
                    const data = await service.getAllBySellerId(1);
                    setData(data);
                }
            }
            loadData();
            const loadUser = async () => {

            }
            loadUser();
        }, [])
    );

    return (
        <ScreenContainer>
            <Search style={styles.search} />

            <CarouselBuyer data={data} />
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    search: {
        marginBottom: 20,
    },
    contButtons: {
        flexDirection: 'row',
    },
    contFilterAll: {
        paddingHorizontal: 40,
    },
});
