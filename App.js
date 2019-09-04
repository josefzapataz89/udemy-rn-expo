import React from 'react';
import BckgroundImage from './application/components/BckgroundImage';
import { Text } from "react-native";

export default function App() {
  return (
    <BckgroundImage
      source={require('./assets/images/login-bg.png')}
    >
      <Text>Hola</Text>
    </BckgroundImage>
  );
}
