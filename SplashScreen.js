import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import logo from './assets/logo.png';

const SplashScreen = () => {
  return (
    <View style={styles.splashContainer}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#0047AB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 250,
  },
});

export default SplashScreen;
