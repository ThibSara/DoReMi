import * as Font from 'expo-font';

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

const theme = {
    colors : {
        // colors
        purple:'#8367F9',
        lightPurple:'#B4A3FF',
        pink :'#FF5FB8',
        lightPink:'#FFCDE9',
        green:'#83DF63',
        lightGreen:'#C6F3B5',
        orange:'#FDA802',
        lightOrange:'#FFF1D6',
        blue:'#49BCDC',
        lightBlue:'C9EFFE',
        red:'F36E70',
        lightRed:'FCBDB9',

        // Black grey and white
        white :'#FFFEFE',
        C200 :'#D9D9D9',
        C300 :'#5D5B5B',
        C400 :'#444444',
        C500 :'#343434',
        C600 :'#212121',
    },
    font : {
        family : {
            regular : 'NunitoRegular',
            bold : 'NunitoBold',
            semiBold : 'NunitoSemiBold',
            light : 'NunitoLight',
            extraBold : 'NunitoExtraBold',
            extraLight : 'NunitoExtraLight',
            medium : 'NunitoMedium',
        },
        size : {
            h1 : 32,
            h2 : 24,
            h3 : 20,
            h4 : 18,
            h5 : 16,
            h6 : 14,
            p : 12,
            small : 10,
        }
    },
    spacing : {
        xs : 4,
        sm : 8,
        md : 16,
        lg : 24,
        xl : 32,
    },
    
    shadow : {
        color : '#000',
        opacity : 0.1,
        radius : 10,
        offset : {
            width : 0,
            height : 4,
        }
    }
    

}
export default theme;