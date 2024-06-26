import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'src/models/Colors/Colors'

export default function Container({ children }) {
    return (
        <>
            <SafeAreaView style={{ backgroundColor: Colors.Dark }} edges={['top']} />
            <StatusBar style='light' />
            {children}
        </>
    )
}

