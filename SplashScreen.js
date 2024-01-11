import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import logo from './assets/logo.png'; // Caminho Imagem

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
    backgroundColor: '#0047AB', // Cor de fundo azul
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400, // Ajuste conforme necessário
    height: 250, // Ajuste conforme necessário
  },
});


export default SplashScreen;
