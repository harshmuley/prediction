import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <LinearGradient
      colors={['#C933FFFF', '#3363FFFF']} // Gradient colors
      style={styles.gradientBorder}
    >
      <TouchableOpacity style={styles.button} onPress={onPress}>
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