// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  const userName = route?.params?.userName || 'Visitante';
  const userCpf = route?.params?.userCpf;

  // Função para navegar para a tela de Carteirinha
  const goToCarteirinha = () => {
    if (userCpf) {
      navigation.navigate('Carteirinha', { userCpf });
    } else {
      navigation.navigate('Main', { screen: 'Carteirinha' });
    }
  };

  // Função para navegar para a tela de Dependentes
  const goToDependentes = () => {
    if (userCpf) {
      navigation.navigate('Dependentes', { userCpf });
    } else {
      navigation.navigate('Main', { screen: 'Dependentes' });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo, {userName}!</Text>
      {/* Botões do menu na parte inferior */}
      <Button title="Carteirinhas" onPress={goToCarteirinha} />
      <Button title="Dependentes" onPress={goToDependentes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
});

export default HomeScreen;
