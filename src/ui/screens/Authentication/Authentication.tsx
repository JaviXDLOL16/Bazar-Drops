import React, { useState } from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import ScreenContainer from 'src/ui/components/layout/ScreenContainer';
import Tabs from './Components/Tabs';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackParamList } from 'App';

export type tabs = 'login' | 'registrer';

type Props = NativeStackScreenProps<stackParamList, 'Authentication'>


export default function Authentication({ navigation }: Props) {
    const [activeTab, setActiveTab] = useState<tabs>('login');

    return (
        <ScreenContainer style={{ justifyContent: 'space-between' }}>

            <View>
                <Image style={styles.image} source={require('src/ui/assets/images/logo_horizontal.png')} />
                <Tabs style={{ marginBottom: 10 }} activeTab={activeTab} onSelectTab={setActiveTab} />
            </View>

            <KeyboardAwareScrollView
                enableOnAndroid={true}
                enableAutomaticScroll={Platform.OS === "ios"}
                contentContainerStyle={{ flex: 1 }}
            >
                {
                    activeTab === 'login' ?
                        <LoginForm tabToRegister={() => setActiveTab('registrer')} />
                        :
                        <RegisterForm tabToLogin={() => setActiveTab('login')} />
                }
            </KeyboardAwareScrollView>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 125,
        width: '100%',
        objectFit: 'contain',
        marginBottom: 20,
    },
});
