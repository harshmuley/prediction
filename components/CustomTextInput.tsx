import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

interface CustomTextInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ value, onChangeText, ...props }) => {
  return (
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        {...props} 
      />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 200, // Use full width of the gradient container
    borderColor: 'white', // Remove default border color
    borderWidth: 2, // Remove default border width
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 50,
    backgroundColor: 'black',
    color: 'white', // Ensure text color is white
  },
});

export default CustomTextInput; 