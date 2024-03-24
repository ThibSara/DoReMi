import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import theme from './theme';


// Import font files
import NunitoBold from '../../assets/fonts/Nunito-Bold.ttf';
import NunitoRegular from '../../assets/fonts/Nunito-Regular.ttf';
import NunitoSemiBold from '../../assets/fonts/Nunito-SemiBold.ttf';
import NunitoLight from '../../assets/fonts/Nunito-Light.ttf';
import NunitoExtraBold from '../../assets/fonts/Nunito-ExtraBold.ttf';
import NunitoExtraLight from '../../assets/fonts/Nunito-ExtraLight.ttf';
import NunitoMedium from '../../assets/fonts/Nunito-Medium.ttf';

// Register fonts
Font.loadAsync({
  'NunitoBold': NunitoBold,
  'NunitoRegular': NunitoRegular,
  'NunitoSemiBold': NunitoSemiBold,
  'NunitoLight': NunitoLight,
  'NunitoExtraBold': NunitoExtraBold,
  'NunitoExtraLight': NunitoExtraLight,
  'NunitoMedium': NunitoMedium,
});



const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      verticalAlign: 'center',
      backgroundColor: theme.colors.white,
    },
    text: {
      fontFamily: 'NunitoRegular',
      fontSize: 16,
      color: '#333',
    },
    text_semibold: {
      fontFamily: 'NunitoSemiBold',
      fontSize: 20,
      color: theme.colors.C400,
    },
    title: {
      fontFamily: 'NunitoBold',
      fontSize: 20,
      color: theme.colors.C400,
    },
    button_text:{
        color: theme.colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:20,
        fontFamily: 'NunitoBold',
        },
  });

export default globalStyles ;