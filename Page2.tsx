import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';
import { styles } from './Page1';
type Page1NavigationProp = StackNavigationProp<RootStackParamList, 'Page2'>;

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
    <ImageBackground
    source={require('./assets/background1.jpg')}
    style={styles.background}>
   
          <Image
            source={require('./assets/icon.png')}
            style={page2Styles.topImage}
          />
       
    <View style={page2Styles.container}>
    
      <ImageBackground
        source={require('./assets/id.png')}
        style={page2Styles.idImage}
        imageStyle={{ borderRadius: 20 }} // Make image borders rounded
      />
      <TextInput
      style={styles.textInput}
        placeholder="Enter an integer"
        keyboardType="numeric" // Numeric keyboard
        value={inputValue}
        onChangeText={handleInputChange}
      />
      <View style={styles.button}>
      <Button title="Start Prediction" onPress={handleSubmit} />
      </View>
      <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.smallButton}>
            <Text  style={{ textAlign: 'center' }}>Telegram</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Text style={{ textAlign: 'center' }}>Support</Text>
          </TouchableOpacity>
        </View>
    </View>
    </ImageBackground>
  );
};

export const page2Styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'flex-start',
  marginTop: 0,
  padding: 20, // Add padding to make it flexible with child content
  width: '100%', // Ensure the container takes full width
 },
 idImage: {
  width: 400,
  height: 400,
  backgroundColor: 'transparent',
  marginBottom: 50,
  borderRadius: 200, // Make corners rounded
},
topImage: {
  width: 100,
  height: 100,
  backgroundColor: 'transparent',
  marginBottom: 10,
  alignItems: 'center',
  alignSelf: 'center',
  marginTop: 100,
},
});


export default Page1;
