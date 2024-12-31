import React, { useState } from 'react';
import {
  View,
  Linking,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';
import IconButton from './components/IconButton';
import CustomButton from './components/CustomButton';
import CustomAlert from './components/CustomAlert';

const handlePress = (setAlertVisible: React.Dispatch<React.SetStateAction<boolean>>, setAlertConfig: React.Dispatch<React.SetStateAction<any>>) => {
  setAlertConfig({
    title: 'Open URL',
    message: 'This will redirect you to a website out of this app',
    onCancel: () => setAlertVisible(false),
    onConfirm: () => {
      setAlertVisible(false);
      Linking.openURL('https://www.youtube.com/c/GamingFreak21');
    },
  });
  setAlertVisible(true);
};

const handleButtonPress = (navigation: any, setAlertVisible: React.Dispatch<React.SetStateAction<boolean>>, setAlertConfig: React.Dispatch<React.SetStateAction<any>>) => {
  setAlertConfig({
    title: 'Go to Login?',
    message: 'Please register first if you are new user',
    onCancel: () => setAlertVisible(false),
    onConfirm: () => {
      setAlertVisible(false);
      navigation.navigate('Page2');
    },
  });
  setAlertVisible(true);
};

type Page1NavigationProp = StackNavigationProp<RootStackParamList, 'Page1'>;

interface Props {
  navigation: Page1NavigationProp;
}

const Page1: React.FC<Props> = ({ navigation }) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertConfig, setAlertConfig] = useState({ title: '', message: '', onCancel: () => {}, onConfirm: () => {} });

  return (
    <ImageBackground
      source={require('./assets/background1.jpg')}
      style={styles.background}
      blurRadius={10}
    >
      <View style={styles.container}>
        <Image
          source={require('./assets/icon.png')}
          style={styles.topImage}
        />
        <View style={styles.buttonContainer}>
          <View>
            <CustomButton
              title="LOG IN"
              onPress={() => handleButtonPress(navigation, setAlertVisible, setAlertConfig)}
            />
          </View>
          <View>
            <CustomButton title="REGISTER" onPress={() => handlePress(setAlertVisible, setAlertConfig)} />
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
      </View>
      <CustomAlert
        visible={alertVisible}
        title={alertConfig.title}
        message={alertConfig.message}
        onCancel={alertConfig.onCancel}
        onConfirm={alertConfig.onConfirm}
      />
    </ImageBackground>
  );
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F0F0F000',
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
    width: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  smallButton: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    width: '40%',
    alignSelf: 'flex-start',
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
    bottom: "5%",
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
