import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import logo from './assets/logo_sf.png';

const LoginScreen = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const loginResponse = await fetch('http://vmi1327791.contaboserver.net:3000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario: cpf,
          senha: password,
        }),
      });
  
      if (loginResponse.ok) {
        const loginData = await loginResponse.json();
        navigation.navigate('Main', {
          screen: 'Home',
          params: {
            userName: loginData.nome,
            userCpf: loginData.usuario
          },
        });
      } else {
        const errorData = await loginResponse.json();
        Alert.alert("Falha no Login", errorData.message || "Erro desconhecido");
      }
    } catch (error) {
      Alert.alert("Erro na Rede", "Não foi possível conectar ao servidor. Verifique sua conexão.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
