import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface CustomChatBarProps {
    textcontent: string;
  }


const CustomChatBar: React.FC<CustomChatBarProps> = ({ textcontent }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{textcontent}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: '70%',
        height: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    text: {
        color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    },
});

export default CustomChatBar;