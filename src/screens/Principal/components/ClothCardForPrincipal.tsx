import { Image, StyleSheet, TouchableOpacity, TouchableOpacityProps, View, Dimensions } from 'react-native'
import React from 'react'
import Text from 'src/components/Texts/Text'
import { Colors } from 'src/models/Colors/Colors';
import { Skeleton } from 'moti/skeleton';

interface Props extends TouchableOpacityProps {
    name: string;
    size: string;
    price: number;
    image?: string;
    style?: any;
    loading?: boolean;
}

export default function ClothCardForPrincipal({ name, size, price, image, style, loading = true, ...rest }: Props) {
    return (
        <TouchableOpacity style={{
            width: Dimensions.get('window').width / 2 - 30,
            margin: 5,
            gap: 5,
        }} {...rest}>
            <Skeleton colorMode="dark" height={220} width={'100%'} radius={30} >
                {loading ? null :
                    <Image
                        source={{ uri: image }}
                        style={{
                            width: '100%',
                            height: 220,
                            borderRadius: 30,
                        }}
                    />
                }
            </Skeleton>
            <View style={{ gap: 3 }}>
                <Skeleton colorMode="dark" height={20} width={'90%'}>
                    {loading ? null :
                        <Text numberOfLines={3} style={{ height: 61 }} fontWeight='bold' >{name}</Text>
                    }
                </Skeleton>
                <Skeleton colorMode="dark" height={18} width={'60%'}>
                    {loading ? null :
                        <Text style={{ fontSize: 14, color: Colors.default400 }} fontWeight='bold' >Talla {size}</Text>
                    }
                </Skeleton>
                <Skeleton colorMode="dark" height={22} width={'25%'}>
                    {loading ? null :
                        <Text style={{ fontSize: 18 }} fontWeight='bold' >${price}</Text>
                    }
                </Skeleton>
            </View>
        </TouchableOpacity>
    )
}
