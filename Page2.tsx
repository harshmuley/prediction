import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type Page1NavigationProp = StackNavigationProp<RootStackParamList, '2'>;

interface Props {
  navigation: Page1NavigationProp;
}

const Page1: React.FC<Props> = ({ navigation }) => {
  const [inputValue, setInputValue] = useState<string>(''); // State for input

  const handleInputChange = (text: string) => {
    // Allow only numeric values
    const numericText = text.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setInputValue(numericText);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      Alert.alert('Invalid Input', 'Please enter an integer.');
      return;
    }

    const parsedValue = parseInt(inputValue, 10);
    navigation.navigate('Page3', { savedValue: parsedValue });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter an integer"
        keyboardType="numeric" // Numeric keyboard
        value={inputValue}
        onChangeText={handleInputChange}
      />
      <Button title="Go to Page 3" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Page1;
