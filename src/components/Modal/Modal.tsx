import React, { ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, StatusBar, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';
import { Colors } from 'src/models/Colors/Colors';

const { height } = Dimensions.get('window');

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
    style?: ViewStyle | ViewStyle[];
    maxHeight?: number; // Prop para la altura máxima
    minHeight?: number; // Prop para la altura mínima
}

const CustomModal: React.FC<ModalProps> = ({ isVisible, onClose, children, style, maxHeight = 1, minHeight }) => {
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
            <View
                style={[
                    styles.modalContent,
                    style,
                    {
                        maxHeight: height * maxHeight,
                        minHeight: minHeight !== undefined ? height * minHeight : undefined
                    }
                ]}
            >
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <View style={styles.closeButtonContent}></View>
                </TouchableOpacity>
                {children}
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
        backgroundColor: Colors.Dark2,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
        paddingHorizontal: 20,
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
