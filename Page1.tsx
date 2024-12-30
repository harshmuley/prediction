import React from 'react';
import {
  View,
  Text,
  Button,
  Linking,
  Alert,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './App';

// Function to handle URL opening
const handlePress = () => {
  Alert.alert(
    'Open URL',
    'This will redirect you to a website out of this app',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => Linking.openURL('https://www.youtube.com/c/GamingFreak21'), // Replace with your URL
      },
    ],
    { cancelable: false }
  );
};

// Function to handle button press, shows an alert and navigates after OK
const handleButtonPress = (navigation: any) => {
  // Show the alert
  Alert.alert('Go to Login?', 'Please register first if you are new user', [
    {
      text: 'Next',
      onPress: () => {
        // Navigate to 'Page2' after pressing 'Next'
        navigation.navigate('Page2');
      },
    },
    {
      text: 'Register Now',
      onPress: () => {
        handlePress();
      },
    },
  ]);
};

type Page1NavigationProp = StackNavigationProp<RootStackParamList, 'Page1'>;

interface Props {
  navigation: Page1NavigationProp;
}

const Page1: React.FC<Props> = ({navigation}) => {
  return (
    <ImageBackground
      source={require('./assets/background1.jpg')}
      style={styles.background}>
      <View style={styles.container}>
          <Image
            source={require('./assets/icon.png')}
            style={styles.topImage}
          />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title="LOG IN"
              onPress={() => handleButtonPress(navigation)}
            />
          </View>
          <View style={styles.button}>
            <Button title="REGISTER" onPress={handlePress} />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.smallButton}>
            <View style={styles.iconTextContainer}>
              <Image
                source={require('./assets/telegram.png')}
                style={styles.icon}
              />
              <Text style={{ textAlign: 'center' }}>Telegram</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <View style={styles.iconTextContainer}>
              <Image
                source={require('./assets/telegram.png')}
                style={styles.icon}
              />
              <Text style={{ textAlign: 'center' }}>Support</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginTop: 200,
  },
  topImage: {
    width: 200,
    height: 200,
    backgroundColor: 'transparent',
    marginBottom: 100,
  },
 
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
    borderRadius: 10, // Added to make the buttons round
  },
  button: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    width: '80%',
    alignSelf: 'center',
  },
  smallButton: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    width: '40%',
    alignSelf: 'flex-start',
    backgroundColor: '#00C3FFFF',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 50,
  },
  bottomText: {
    fontSize: 20,
  },
  textInput: {
    height: 50,
    borderColor: '#2D2A2AFF',
    borderWidth: 3,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    color: 'black',
    backgroundColor: '#FFFFFFFF'
    
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Page1;

