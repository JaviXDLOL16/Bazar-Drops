import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Colors } from 'src/models/Colors/Colors';


interface IconProps {
    status: any;
}

const Icon: React.FC<IconProps> = ({ status }) => {
    const getIcon = () => {
        switch (status) {
            case 'Disponibles':
                return (
                    <View style={styles.contIcon}>
                        <MaterialIcons name="check-circle" size={18} color={Colors.Green} />
                    </View>
                );
            case 'Vendidos':
                return (
                    <View style={styles.contDollar}>
                        <View style={styles.contIconDollar}>
                            <FontAwesome5 name="dollar-sign" size={12} color="white" />
                        </View>
                    </View>
                );
            case 'Oculto':
                return (
                    <View style={styles.contEye}>
                        <View style={styles.contIconEye}>
                            <FontAwesome5 name="eye-slash" size={12} color="white" />
                        </View>
                    </View>
                );
            default:
                return null;
        }
    };

    return getIcon();
};

const styles = StyleSheet.create({
    contIcon: {
        height: 24,
        width: 24,
        borderRadius: 5,
        backgroundColor: Colors.Green2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contIconDollar: {
        height: 16,
        width: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Red,
        borderRadius: 15,
    },
    contDollar: {
        height: 24,
        width: 24,
        backgroundColor: '#6d2c2e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    contEye: {
        height: 24,
        width: 24,
        backgroundColor: '#304e73',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    contIconEye: {
        height: 16,
        width: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Blue3,
        borderRadius: 15,
    },
});

export default Icon;
