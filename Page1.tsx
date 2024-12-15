import React from 'react';
import { View, Text, Button, Linking, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

// Function to handle URL opening
const handlePress = () => {
  Linking.openURL('https://www.youtube.com/c/GamingFreak21'); // Replace with your URL
};

// Function to handle button press, shows an alert and navigates after OK
const handleButtonPress = (navigation: any) => {
  // Show the alert
  Alert.alert(
        'Button Clicked',
        'This is your alert message',
        [
          {
            text: 'Next',
            onPress: () => {
              // Navigate to 'Page2' after pressing 'Next'
              navigation.navigate('Page2');
            },
          },
          {
            text: 'Register Now',
            onPress: () => {handlePress();
            },
          },
        ]
      );
    };

type Page1NavigationProp = StackNavigationProp<RootStackParamList, 'Page1'>;

interface Props {
  navigation: Page1NavigationProp;
}

const Page1: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Welco me to Page 1</Text>

      {/* Button to trigger the alert and navigation */}
      <Button
        title="LOG IN 35%"
        onPress={() => handleButtonPress(navigation)}
      />

      {/* Button to open the URL */}
      <Button
        title="REGISTER 99%"
        onPress={handlePress}
      />
    </View>
  );
};

export default Page1;
