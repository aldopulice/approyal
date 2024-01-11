import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles'; // Certifique-se de que o caminho para styles.js está correto
import logo from './assets/logo.jpeg'; // Certifique-se de que o caminho para a imagem do logo está correto

const LoginScreen = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implemente a lógica de autenticação aqui
    console.log(cpf, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login Simone</Text>
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
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <Button title="Entrar" onPress={handleLogin} />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.firstAccess}>Primeiro acesso para quem já é cliente</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.knowAndSign}>Conheça e Assine</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
