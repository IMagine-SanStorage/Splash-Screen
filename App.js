
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import HomeScreen from './Screen/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <SafeAreaProvider>
   <SplashScreen>
       <NavigationContainer>
           <Stack.Navigator>
           <Stack.Screen options={{ headerShown: false}}  name="login" component={LoginScreen} />
           <Stack.Screen  name="Home " component={HomeScreen} />   
            </Stack.Navigator>
       </NavigationContainer>
     </SplashScreen> 
  </SafeAreaProvider>
  );
}
// options={{ headerShown: false}} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});