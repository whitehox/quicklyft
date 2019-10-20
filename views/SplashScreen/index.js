import React, { useEffect, useState } from 'react';
import logo from '../../assets/quicklyft.png';
import { View, StyleSheet, Text } from 'react-native';
import * as Font from 'expo-font';

export default function SplashScreen() {
  const [isFontReady, setFontReady] = useState(false);
  useEffect(() => {
    async function loadFont() {
      return await Font.loadAsync({
        righteous: require('../../assets/fonts/Righteous-Regular.ttf'),
      });
    }
    loadFont().then(() => {
      setFontReady(true);
    });
  }, []);

  return (
    <View style={styles.container}>
      {isFontReady && (
        <Text style={{ fontFamily: 'righteous', color: '#fff', fontSize: 48 }}>
          quicklyft.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9d30fe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 600,
    height: 200,
  },
});
