import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useTheme } from '@react-navigation/native';


export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    );
};

