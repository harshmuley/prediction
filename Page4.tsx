import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type Page3NavigationProp = StackNavigationProp<RootStackParamList, 'Page3'>;

interface Props {
  navigation: Page3NavigationProp;
}

const Page3: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Page 3</Text>
      <Button
        title="Go to Page 4"
        onPress={() => navigation.navigate('Page4')}
      />
    </View>
  );
};

export default Page3;
