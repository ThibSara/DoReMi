import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import LottieView from 'lottie-react-native';


export default function LoadingScreen() {
    const navigation = useNavigation();
    const timer = setTimeout(() => {
        navigation.navigate('WelcomeScreen'); 
    }, 1500);

    return (
        <View style={styles.container}>
            <LottieView
                source={require('./../../assets/lotties/heartBeat.json')} // Specify the path to your Lottie animation file
                style={{width: "50%", height: "50%"}}
                autoPlay
                loop={false}
                speed={0.5}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});