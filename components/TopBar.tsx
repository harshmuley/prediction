import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface TopBarProps {
  onlineUsers: number;
}

const TopBar: React.FC<TopBarProps> = ({ onlineUsers }) => {
  const [dynamicOnlineUsers, setDynamicOnlineUsers] = useState<number>(500); // State for dynamic online users

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random number between 500 and 8000
      const newOnlineUsers = Math.floor(Math.random() * (8000 - 500 + 1)) + 500;
      setDynamicOnlineUsers(newOnlineUsers);
    }, 1000); // Update every second (1000ms)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.fullWidthBlueComponent}>
      <View style={styles.leftContainer}>
        <View style={styles.greenCircle} />
        <Text style={styles.text}>
          Online Users: {dynamicOnlineUsers} {/* Dynamically changing value */}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.greenCircle} />
        <Text style={styles.text}>
          ID: {onlineUsers} {/* Static value */}
        </Text>
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
    paddingLeft: '5%',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: '5%',
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
