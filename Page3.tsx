import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet, Linking, ActivityIndicator } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type Page3RouteProp = RouteProp<RootStackParamList, 'Page3'>;
type Page3NavigationProp = StackNavigationProp<RootStackParamList, 'Page3'>;

interface Props {
  route: Page3RouteProp;
  navigation: Page3NavigationProp;
}

const Page3: React.FC<Props> = ({ route, navigation }) => {
  const { savedValue } = route.params; // Retrieve the passed integer
  const [inputValue, setInputValue] = useState<string>(''); // Input field state
  const [randomColor, setRandomColor] = useState<string>(''); // State for random color
  const [randomSizeText, setRandomSizeText] = useState<string>(''); // State for "Big" or "Small"
  const [isLoading, setIsLoading] = useState<boolean>(false); // State for loading spinner

  const handlePress = () => {
    Linking.openURL('https://www.youtube.com/c/GamingFreak21'); // Replace with your URL
  };

  const handleInputChange = (text: string) => {
    // Only allow numeric values
    const numericText = text.replace(/[^0-9]/g, '');
    setInputValue(numericText);
  };

  const handleButtonPress = () => {
    if (inputValue.trim() === '') {
      // Show an alert if no value is entered
      Alert.alert('Invalid Input', 'Please enter a valid integer value.');
      return;
    }

    // Set loading state to true to show the spinner
    setIsLoading(true);

    // Simulate a delay (e.g., network request or processing)
    setTimeout(() => {
      // Randomly select a color
      const colors = ['red', 'green', 'violet'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      const selectedColor = colors[randomIndex];
      setRandomColor(selectedColor);

      // Randomly assign "Big" or "Small"
      const sizeOptions = ['Big', 'Small'];
      const randomSizeIndex = Math.floor(Math.random() * sizeOptions.length);
      const selectedSizeText = sizeOptions[randomSizeIndex];
      setRandomSizeText(selectedSizeText);

      // Clear the input field
      setInputValue('');

      // Hide loading spinner
      setIsLoading(false);
    }, 1000); // Simulate a 1-second delay before setting the random color and size
  };

  return (
    <View style={styles.container}>
      {/* Show the saved value passed from Page2 */}
      <Text style={styles.text}>Saved Integer: {savedValue}</Text>

      {/* Input field for user to enter a number */}
      <TextInput
        style={styles.input}
        placeholder="Enter an integer"
        keyboardType="numeric" // Numeric keyboard
        value={inputValue}
        onChangeText={handleInputChange}
      />

      {/* Button to generate random color and size */}
      <Button title="Generate Random Color & Size" onPress={handleButtonPress} />

      {/* Loading spinner */}
      {isLoading && <ActivityIndicator size="large" color="blue" style={styles.spinner} />}

      {/* Display random color and size only if loading is false */}
      {!isLoading && randomColor ? (
        <Text style={[styles.text, { color: randomColor }]}>
          Random Color: {randomColor}
        </Text>
      ) : null}

      {!isLoading && randomSizeText ? (
        <Text style={styles.text}>Random Size: {randomSizeText}</Text>
      ) : null}

      {/* Navigation back to Page1 */}
      <Button title="Go Back to Page 1" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '80%',
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
  spinner: {
    marginVertical: 20, // Spacing for the loading spinner
  },
});

export default Page3;
