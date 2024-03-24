import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ThemeContext from '../style/ThemeContext'; // Import ThemeContext

const Button = ({ onPress, title }) => {
    const { globalStyles, theme } = useContext(ThemeContext);

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button,{backgroundColor:theme.colors.purple}]}>
            <Text style={[globalStyles.button_text, { color: theme.colors.white, fontFamily: theme.font.family.bold }]}>{title}</Text>
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

export default Button;
