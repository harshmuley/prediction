import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface TopBarProps {
  onlineUsers: number;
}

const TopBar: React.FC<TopBarProps> = ({ onlineUsers }) => {
  return (
    <View style={styles.fullWidthBlueComponent}>
      <View style={styles.leftContainer}>
        <View style={styles.greenCircle} />
        <Text style={styles.text}>Online Users: {Math.floor(Math.random() * (50000 - 500 + 1)) + 500}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.greenCircle} />
        <Text style={styles.text}>ID: {onlineUsers}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullWidthBlueComponent: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  greenCircle: {
    width: 10,
    height: 10,
    backgroundColor: '#33FF33',
    borderRadius: 5,
    marginRight: 5,
  },
});

export default TopBar; 