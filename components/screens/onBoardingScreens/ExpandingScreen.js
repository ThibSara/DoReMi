import React, { useState } from 'react';
import { View, StyleSheet, Animated,Text } from 'react-native';
import { useEffect } from 'react';
import ThemeContext from './../../style/ThemeContext';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';


const ExpandingScreen = ({ initialSize = 10, finalSize = 1000, duration = 1000 }) => {
    const [circleSize] = useState(new Animated.Value(initialSize));
    const [animationComplete, setAnimationComplete] = useState(false);
    const { globalStyles, theme } = useContext(ThemeContext);
    const navigation = useNavigation();


    useEffect(() => {
      Animated.timing(circleSize, {
        toValue: finalSize,
        duration: duration,
        useNativeDriver: false,
    }).start(() => {
        setAnimationComplete(true); // Animation completed, set flag to true
      });
    }, []);

    useEffect(() => {
        // Navigate to HomeScreen when animation is completed
        if (animationComplete) {
            navigation.navigate('Survey');
        }
    }, [animationComplete, navigation]);

  
    return (
      <View style={globalStyles.container}>

        <Animated.View style={[styles.circle, { width: circleSize, height: circleSize, backgroundColor: theme.colors.lightPurple }]} />

      </View>
    );
  };
  
  const styles = StyleSheet.create({
    circle: {
      borderRadius: 100, 
    },
  });
  
  export default ExpandingScreen;