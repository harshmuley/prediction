import React, { useState } from 'react';
import { View, ImageBackground,StyleSheet, Image, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';
import { styles } from './Page1';
import IconButton from './components/IconButton';
import CustomButton from './components/CustomButton';
import CustomAlert from './components/CustomAlert';
import CustomTextInput from './components/CustomTextInput';
import CustomChatBar from './components/CustomChatBar';

type Page1NavigationProp = StackNavigationProp<RootStackParamList, 'Page2'>;

interface Props {
  navigation: Page1NavigationProp;
}

const Page1: React.FC<Props> = ({ navigation }) => {
  const [inputValue, setInputValue] = useState<string>(''); // State for input
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  const handleInputChange = (text: string) => {
    // Allow only numeric values
    const numericText = text.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setInputValue(numericText);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      setAlertVisible(true);
      return;
    }

    const parsedValue = parseInt(inputValue, 10);
    navigation.navigate('Page3', { savedValue: parsedValue });
  };

  return (
    <ImageBackground
      source={require('./assets/background1.jpg')}
      style={styles.background}
      blurRadius={10}>

      <Image
        source={require('./assets/icon.png')}
        style={page2Styles.appicon}
      />
      <View style={page2Styles.container}>
        <ImageBackground
          source={require('./assets/id.png')}
          style={page2Styles.idImage}

          imageStyle={{ borderRadius: 20 }} // Make image borders rounded
        />
        <CustomTextInput
          placeholder="Enter a profile ID..."
          keyboardType="numeric"
          value={inputValue}
          onChangeText={handleInputChange}
          placeholderTextColor="#FFFFFF"

        />
        <View style={styles.buttonContainer}>
          <CustomButton title="Start Prediction" onPress={handleSubmit} />
        </View>
        <View style={[page2Styles.chatContainer]}>
          <CustomChatBar textcontent="'अगर आप कोई और App का Prediction चाहते हैं तो अभी हमारा telegram जॉइन करे!'"/>
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
      </View>
      <CustomAlert
        visible={alertVisible}
        title="Enter valid ID"
        message="अगर आप पहले से ही registered है तो अपना ID डाले !"
        onCancel={() => setAlertVisible(false)}
        onConfirm={() => setAlertVisible(false)}
      />
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
    padding: 20,
    width: '100%',
  },
  idImage: {
    width: 300,
    height: 300,
    backgroundColor: 'transparent',
    marginBottom: 50,
    borderRadius: 150, // Make corners rounded
  },
  appicon: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    marginBottom: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 70,
  },
  chatContainer: {
    backgroundColor: 'transparent',
    width: '100%', // Reduce width to center it within the screen
    height: '10%', // Adjusted height for chat container
    marginTop:15, // Space from the elements above it
    paddingLeft: "5%", // Align the chat content to the left inside container
    paddingRight: "5%", // Align the chat content to the right inside container
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
    marginHorizontal: '10%', // Center the container horizontally
  },

});

export default Page1;
