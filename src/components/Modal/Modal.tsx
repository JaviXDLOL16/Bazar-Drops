import React, { ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, ScrollView, StatusBar, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';
import { Colors } from 'src/models/Colors/Colors';

const { height } = Dimensions.get('window');

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
    style?: ViewStyle | ViewStyle[];

}

const CustomModal: React.FC<ModalProps> = ({ isVisible, onClose, children, style }) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            style={styles.modal}
            swipeDirection={['down']}
            onSwipeComplete={onClose}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={300}
        >
            <StatusBar barStyle="light-content" />
            <View style={[styles.modalContent, style]}>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <View style={styles.closeButtonContent}></View>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {children}
                </ScrollView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        width: '100%',
        maxHeight: height * 0.75,
        backgroundColor: Colors.Dark2,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
        paddingHorizontal: 25,
        paddingBottom: 30,
        overflow: 'hidden',
    },
    scrollContent: {
        flexGrow: 1,
    },
    closeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: '25%',
        paddingVertical: 5,
    },
    closeButtonContent: {
        width: 90,
        height: 5,
        backgroundColor: Colors.Gray,
        borderRadius: 2.5,
    },
});

export default CustomModal;
