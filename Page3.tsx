import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Alert,
  StyleSheet,
  Linking,
  ActivityIndicator,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './App';
import {styles} from './Page1';
import IconButton from './components/IconButton';
import CustomButton from './components/CustomButton';
import TopBar from './components/TopBar';
type Page3RouteProp = RouteProp<RootStackParamList, 'Page3'>;
type Page3NavigationProp = StackNavigationProp<RootStackParamList, 'Page3'>;

interface Props {
  route: Page3RouteProp;
  navigation: Page3NavigationProp;
}
const Page3: React.FC<Props> = ({route, navigation}) => {
  const savedValue = route?.params?.savedValue; // Retrieve the passed integer
  const [inputValue, setInputValue] = useState<string>(''); // Input field state
  const [randomColor, setRandomColor] = useState<string>(''); // State for random color
  const [randomSizeText, setRandomSizeText] = useState<string>(''); // State for "Big" or "Small"
  const [isLoading, setIsLoading] = useState<boolean>(false); // State for loading spinner
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handlePress = (navigation: any) => {
    navigation.navigate('Page1');
  };

  const handleInputChange = (text: string) => {
    // Only allow numeric values
    const numericText = text.replace(/[^0-9]/g, '');
    setInputValue(numericText);
  };

  const handleRandomColorButtonpress = () => {
    if (inputValue.trim() === '') {
      if (isMounted) {
        Alert.alert('Invalid Input', 'Please enter a valid integer value.');
      }
      return;
    }

    // Set loading state to true to show the spinner
    setIsLoading(true);

    // Simulate a delay (e.g., network request or processing)
    setTimeout(() => {
      if (isMounted) {
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
      }
    }, 1000); // Simulate a 1-second delay before setting the random color and size
  };

  return (
    <ImageBackground
      source={require('./assets/background1.jpg')}
      style={styles.background}>
      <TopBar />
      <View style={Page3Styles.container}>
        <Image
          source={require('./assets/icon.png')}
          style={Page3Styles.topImage}
        />

        {/* Show the saved value passed from Page2 */}
        <Text style={Page3Styles.text}>Saved Profile ID: {savedValue}</Text>

        {/* Input field for user to enter a number */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter an integer"
          keyboardType="numeric" // Numeric keyboard
          value={inputValue}
          onChangeText={handleInputChange}
        />

        {/* Loading spinner */}
        {isLoading && (
          <ActivityIndicator
            size="large"
            color="blue"
            style={Page3Styles.spinner}
          />
        )}

        {/* Display random color and size only if loading is false */}
        {!isLoading && (randomColor || randomSizeText) ? (
          <View style={Page3Styles.roundedContainer}>
            {randomColor && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    Page3Styles.text,
                    {color: 'white', marginRight: 10, textAlign: 'center'},
                  ]}>
                  Random Color: {randomColor}
                </Text>
                <View
                  style={{
                    width: 30,
                    height: 15,
                    backgroundColor: randomColor,
                    borderRadius: 1,
                    borderWidth: 1,
                    borderColor: 'white',
                  }}
                />
              </View>
            )}
            {randomSizeText && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    Page3Styles.text,
                    {color: 'white', marginRight: 10, textAlign: 'center'},
                  ]}>
                  Random Size: {randomSizeText}
                </Text>
              </View>
            )}
          </View>
        ) : null}

        {/* Button to generate random color and size */}
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Generate Random "
            onPress={handleRandomColorButtonpress}
          />
        </View>
        {/* Navigation back to Page1 */}
        <View style={styles.buttonContainer}>
          <CustomButton title="Home" onPress={() => handlePress(navigation)} />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <IconButton
          iconSource={require('./assets/telegram.png')}
          label="Telegram"
        />
        <IconButton
          iconSource={require('./assets/support.png')}
          label="Support"
        />
      </View>
    </ImageBackground>
  );
};

const Page3Styles = StyleSheet.create({
  container: {
    height: '40%',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232A43FF',
    marginTop: '50%',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
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
    color: 'white',
  },
  spinner: {
    marginVertical: 20, // Spacing for the loading spinner
  },
  topImage: {
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
    marginBottom: 0,
  },
  roundedContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    marginVertical: 10,
    color: 'white',
    backgroundColor: '#344B79FF',
    width: '80%',
    height: 100,
    borderWidth: 1,
    borderColor: 'white',
  },
});

export default Page3;
