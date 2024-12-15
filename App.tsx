import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

export type RootStackParamList = {
  Page1: undefined;
  Page2: undefined;
  Page3: undefined;
  Page4: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Page1"
        screenOptions={{
          gestureEnabled: true, // Enable swipe gestures on Android
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Custom slide animation
        }}
      >
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
        <Stack.Screen name="Page4" component={Page4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
