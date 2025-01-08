import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import SplashScreen from './SplashScreen';

export type RootStackParamList = {
  SplashScreen: undefined;
  Page1: undefined;
  Page2: undefined;
  Page3: { savedValue: number };
  Page4: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            gestureEnabled: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerShown: false,
          }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Page1" component={Page1} />
          <Stack.Screen name="Page2" component={Page2} />
          <Stack.Screen name="Page3" component={Page3} />
          {/* Add any additional screens here */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
