import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import imager from '../../assets/cars.png';
import driverless from '../../assets/track.png';
import confirm from '../../assets/qr-code.png';

import * as Font from 'expo-font';
import Swiper from 'react-native-swiper';

function Home({ navigation }) {
  const [isFontReady, setFontReady] = useState(false);
  useEffect(() => {
    async function loadFont() {
      return await Font.loadAsync({
        montserrat: require('../../assets/fonts/Poppins-ExtraBold.ttf'),
        montserratRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
      });
    }
    loadFont().then(() => {
      setFontReady(true);
    });
  }, []);

  return (
    <Swiper>
      <View style={styles.container}>
        <Image style={styles.imager} source={imager} />
        {isFontReady && (
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              paddingTop: 30,
              fontFamily: 'montserrat',
            }}
          >
            Request Ride
          </Text>
        )}
        {isFontReady && (
          <Text
            style={{
              fontSize: 15,
              padding: 40,
              textAlign: 'center',
              fontFamily: 'montserratRegular',
            }}
          >
            Request a ride and get picked up by a nearby community driver
          </Text>
        )}
      </View>
      <View style={styles.container}>
        <Image style={styles.imager} source={confirm} />
        {isFontReady && (
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              paddingTop: 30,
              fontFamily: 'montserrat',
            }}
          >
            Confirm Your Driver
          </Text>
        )}
        {isFontReady && (
          <Text
            style={{
              fontSize: 15,
              padding: 40,
              textAlign: 'center',
              fontFamily: 'montserratRegular',
            }}
          >
            Huge drivers network helps you find comfortable, safe and cheap ride
          </Text>
        )}
      </View>
      <View style={styles.container}>
        <Image style={styles.imager} source={driverless} />
        {isFontReady && (
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              paddingTop: 30,
              fontFamily: 'montserrat',
            }}
          >
            Track Your Ride
          </Text>
        )}
        {isFontReady && (
          <Text
            style={{
              fontSize: 15,
              padding: 40,
              textAlign: 'center',
              fontFamily: 'montserratRegular',
            }}
          >
            Know your driver in advance and be able to view current location in
            real time on the map
          </Text>
        )}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <Text style={styles.button}>GET STARTED!</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imager: {
    width: 150,
    height: 150,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  button: {
    backgroundColor: '#9d30fe',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 14,
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    width: 200,
    marginTop: 10,
  },
});

export default withNavigation(Home);
