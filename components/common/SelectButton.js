import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ThemeContext from '../style/ThemeContext';
import { useState } from 'react';


const SelectButton = ({ onPress, title }) => {
    const { globalStyles, theme } = useContext(ThemeContext);
    const [isSelected, setIsSelected] = useState(false);

    const handlePress  = () => {
        if (isSelected) {
            setIsSelected(false);
            return;
        }
        else 
        setIsSelected(true);
        onPress();
    };


    return (
<TouchableOpacity
            onPress={handlePress}
            style={[
                styles.button,
                {
                    backgroundColor:theme.colors.white,
                    borderWidth: 3,
                    borderColor: isSelected ? theme.colors.purple : 'transparent',
                },
            ]}
        >
            <Text style={globalStyles.text_semibold}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 16,
        borderRadius: 4,
        width: '100%',
        shadowColor: '#000', // Shadow color (for iOS)
        shadowOffset: { width: 0, height: 7 }, // Shadow offset (for iOS)
        shadowOpacity: 0.25, // Shadow opacity (for iOS)
        shadowRadius: 10, // Shadow radius (for iOS)
        elevation: 5, // Elevation (for Android)
    },
});

export default SelectButton;