import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useTheme } from '@react-navigation/native';
import { useContext } from 'react';
import ThemeContext from './../../style/ThemeContext';
import SelectButton from '../../common/SelectButton';
import { useState } from 'react';


export default function Survey() {
    const navigation = useNavigation();
    const { globalStyles, theme } = useContext(ThemeContext);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonPress = (buttonTitle) => {
        if (selectedButton === buttonTitle) {
            // If the selected button is pressed again, deselect it
            setSelectedButton(null);
        } else {
            // Otherwise, select the pressed button
            setSelectedButton(buttonTitle);
        }
    };

    return (
        <View style={[globalStyles.container,{backgroundColor:theme.colors.lightPurple}]}>
            <Text style={[globalStyles.title, {color:theme.colors.white}]}>Combien de temps par jour veux tu consacrer au solfège ?</Text>
<SelectButton
                title='15 minutes'
                onPress={() => handleButtonPress('15 minutes')}
                isSelected={selectedButton === '15 minutes'} // Pass isSelected prop to indicate if this button is selected
            />
            <SelectButton
                title='30 minutes'
                onPress={() => handleButtonPress('30 minutes')}
                isSelected={selectedButton === '30 minutes'}
            />
        </View>
    );
};