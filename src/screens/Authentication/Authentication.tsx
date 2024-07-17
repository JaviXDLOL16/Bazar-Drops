import React, { useState } from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import ScreenContainer from 'src/components/layout/ScreenContainer';
import Tabs from './Components/Tabs';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Authentication() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <ScreenContainer>
            <Image style={styles.image} source={require('src/assets/images/logo_horizontal.png')} />
            <Tabs style={{ marginBottom: 10 }} activeTab={activeTab} onSelectTab={setActiveTab} />

            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                enableOnAndroid={true}
                enableAutomaticScroll={Platform.OS === "ios"}
            >
                <View>
                    <View style={{ display: activeTab === 0 ? 'flex' : 'none' }}>
                        <LoginForm />
                    </View>
                    <View style={{ display: activeTab === 1 ? 'flex' : 'none' }}>
                        <RegisterForm />
                    </View>
                </View>
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
