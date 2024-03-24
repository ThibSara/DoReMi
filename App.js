import StackNavigator from './components/navigation/StackNavigator'; 
import { NavigationContainer } from '@react-navigation/native';
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { ThemeProvider } from 'styled-components/native';
import theme from './components/style/theme'; 
import globalStyles from './components/style/globalStyles'; // Import globalStyles
import ThemeContext from './components/style/ThemeContext';
import { View } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeContext.Provider value={{ theme, globalStyles }}>
        <GluestackUIProvider>
          <StackNavigator />
        </GluestackUIProvider>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};

export default App;
