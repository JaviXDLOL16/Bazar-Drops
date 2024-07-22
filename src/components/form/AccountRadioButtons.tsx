import React, { useMemo } from 'react';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { Colors } from 'src/models/Colors/Colors';

type RegisterUser = 'vendedor' | 'comprador';

interface AccountRadioButtonsProps {
    value: RegisterUser | undefined;
    onValueChange: (value: RegisterUser | undefined) => void;
}

const isRegisterUser = (value: any): value is RegisterUser => {
    return value === 'vendedor' || value === 'comprador';
};

const AccountRadioButtons: React.FC<AccountRadioButtonsProps> = ({ value, onValueChange }) => {
    const radioButtons: RadioButtonProps[] = useMemo(() => [
        {
            id: 'vendedor',
            label: 'Vendedor',
            value: 'vendedor',
            color: Colors.Blue,
        },
        {
            id: 'comprador',
            label: 'Comprador',
            value: 'comprador',
            color: Colors.Blue,
        },
    ], []);

    const handlePress = (selectedId: string) => {
        const selectedButton = radioButtons.find(button => button.id === selectedId);
        const newValue = selectedButton ? selectedButton.value : undefined;
        if (isRegisterUser(newValue)) {
            onValueChange(newValue);
        } else {
            onValueChange(undefined);
        }
    };

    return (
        <RadioGroup
            layout='row'
            containerStyle={{ justifyContent: 'space-around', alignItems: 'flex-start' }}
            labelStyle={{ fontSize: 20, color: '#fff' }}
            radioButtons={radioButtons}
            onPress={handlePress}
            selectedId={radioButtons.find(button => button.value === value)?.id}
        />
    );
};

export default AccountRadioButtons;
