import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const TopBar: React.FC = () => {
  return (
    <View style={styles.fullWidthBlueComponent}>
      <View style={styles.greenCircle} />
      <Text style={styles.text}>Online Users: 100</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fullWidthBlueComponent: {
    width: '100%',  
    height: 50,    
    backgroundColor: 'transparent', 
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
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