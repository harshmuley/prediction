import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Linking } from 'react-native';

export default function ButtonINV() {
  const handlePress = () => {
    Linking.openURL('https://www.youtube.com/c/GamingFreak21'); // Replace with your URL
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Register 99% Pridiction</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
