import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SplashScreen'>;

interface Props {
  navigation: SplashScreenNavigationProp;
}

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1.5,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      navigation.replace('Page1'); // Navigate to Page1 after animation
    });

    return () => scaleAnim.stopAnimation(); // Stop the animation if the component is unmounted
  }, [navigation, scaleAnim]);
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./assets/icon.png')}
        style={[styles.image, { transform: [{ scale: scaleAnim }], borderRadius: 20 }]} // Added borderRadius for rounded corners
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000FF',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
