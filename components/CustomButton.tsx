import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Alert } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import Sound from 'react-native-sound'; // Import Sound from react-native-sound for sound playback

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  const playSound = () => {
    const sound = new Sound(require('../assets/Audio/tap.mp3'), (error) => {
      if (error) {
        Alert.alert('Error', 'Failed to load the sound');
        return;
      }
      sound.play(() => {
        sound.release();
      });
    });
  };

  const handlePress = () => {
    playSound(); // Play sound
    onPress(); // Execute the original onPress logic
  };

  return (
    <LinearGradient
      colors={['#C933FFFF', '#3363FFFF', "#C933FFFF"]} // Gradient colors
      start={{ x: 0, y: 0 }} // Start from the left
      end={{ x: 1, y: 0 }} // End at the right
      style={styles.gradientBorder}
    >
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 100,
    padding: 3, // Padding to create the border effect
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  button: {
    borderRadius: 100,
    overflow: 'hidden',
    width: '100%',
    height: 40,
    alignSelf: 'center',
    backgroundColor: 'black', // Custom background color
    alignItems: 'center',
    justifyContent: 'center', // Center the text vertically
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: 16,
    textAlign: 'center', // Center the text horizontally
  },
});

export default CustomButton;