import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ThemeContext from './../../style/ThemeContext';
import horizontalNote1 from './../../../assets/images/horizontalNote1.png';
import Button from './../../common/Button';

export default function WelcomeScreen() {
    const navigation = useNavigation();
    const { globalStyles, theme } = useContext(ThemeContext);
    const fadeAnimation = new Animated.Value(0);

    useEffect(() => {
        const fadeIn = () => {
            Animated.timing(fadeAnimation, {
                toValue: 1,
                duration: 500, // Adjust the duration of the fade animation (in milliseconds)
                useNativeDriver: true,
            }).start();
        };

        fadeIn();
    }
    , []);

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Bienvenue !</Text>
            <Text style={globalStyles.title}>Tu veux apprendre le solfège simplement en t'amusant ?</Text>
            <Image
                source={horizontalNote1}
                style={{ width: '50%', height: '50%', resizeMode: 'contain' }}
            />

                <Animated.View style={{ opacity: fadeAnimation, width:'100%' }}>
                <Button title = 'Oui' onPress={() => navigation.navigate('ExpandingScreen')} />
                </Animated.View>
            
        </View>
    );
};
