import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

interface IconButtonProps {
  iconSource: any;
  label: string;
}

const IconButton: React.FC<IconButtonProps> = ({ iconSource, label }) => {
  return (
    <TouchableOpacity style={styles.smallButton}>
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
    backgroundColor: 'transparent',
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
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

export default IconButton; 