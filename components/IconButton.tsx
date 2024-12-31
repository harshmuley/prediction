import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet,Linking } from 'react-native';
const handlePress = () => {
  // Directly open the URL when the REGISTER button is pressed
  Linking.openURL('https://t.me/+yEqSoVMvXK4xNDY1');
};


interface IconButtonProps {
  iconSource: any;
  label: string;
}

const IconButton: React.FC<IconButtonProps> = ({ iconSource, label }) => {
  return (
    <TouchableOpacity style={styles.smallButton } onPress={handlePress}>
      <View style={styles.iconTextContainer}>
        <Image source={iconSource} style={styles.icon} />
        <Text style={{ textAlign: 'center', color: 'white' }}>{label}</Text>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  smallButton: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    width: '40%',
    alignSelf: 'flex-start',
    backgroundColor:'black',
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },

  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default IconButton; 