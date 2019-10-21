import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import * as Font from 'expo-font';

function SignUp() {
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
    <View style={style.container}>
      <View style={style.pageHeading}>
        <View style={style.pageHeaderLogoArea}>
          {isFontReady && <Text style={style.pageHeaderLogo}>q</Text>}
        </View>
      </View>
      <View style={style.formArea}></View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  pageHeading: {
    backgroundColor: '#9d30fe',
    width: '100%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formArea: {
    backgroundColor: '#fff',
    width: '90%',
    margin: 'auto',
    height: '40%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 17,
    borderRadius: 8,
    position: 'absolute',
    top: '40%',
  },
  pageHeaderLogoArea: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 17,
  },
  pageHeaderLogo: {
    fontFamily: 'righteous',
    color: '#9d30fe',
    fontSize: 50,
    padding: 0,
    margin: 0,
  },
});

export default withNavigation(SignUp);
