import React from 'react'
import { Image, StyleSheet } from 'react-native'

import ScreenContainer from "src/components/layout/ScreenContainer";

export default function Authentication() {
    return (
        <ScreenContainer>
            <Image style={styles.image} source={require('src/assets/images/logo_horizontal.png')} />

        </ScreenContainer>

    )
}



const styles = StyleSheet.create({
    image: {
        height: 125,
        width: '100%',
        objectFit: 'contain',
    }
});