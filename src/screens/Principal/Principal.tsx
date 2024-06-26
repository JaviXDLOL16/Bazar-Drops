import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Colors } from 'src/models/Colors/Colors'
import ScreenContainer from 'src/components/layout/ScreenContainer'

export default function Principal() {
    return (
        <ScreenContainer>
            <View>
                <Text>Principal</Text>
            </View>
            <View>
                <Text>Segundo</Text>
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({

})