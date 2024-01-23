import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';

const CarteirinhaScreen = ({ route }) => {
  const [carteirinhaData, setCarteirinhaData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userCpf = route?.params?.userCpf;

  useEffect(() => {
    if (!userCpf) {
      Alert.alert("Erro", "CPF não fornecido.");
      setIsLoading(false);
      return;
    }

    const fetchCarteirinhaData = async () => {
      try {
        const response = await fetch(`http://vmi1327791.contaboserver.net:3000/carteirinhas/${userCpf}`);
        const data = await response.json();
        setCarteirinhaData(data);
      } catch (error) {
        Alert.alert("Erro ao buscar dados da carteirinha", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarteirinhaData();
  }, [userCpf]);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      {carteirinhaData ? (
        <>
          <Text>Nome: {carteirinhaData.nome}</Text>
          <Text>CPF: {carteirinhaData.cpf}</Text>
          <Text>Número da Carteira: {carteirinhaData.n_carteira}</Text>
          <Text>Plano: {carteirinhaData.plano}</Text>
          <Text>Validade: {carteirinhaData.validade}</Text>
          <Text>Titular: {carteirinhaData.titular}</Text>
        </>
      ) : (
        <Text>Não foram encontrados dados da carteirinha.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CarteirinhaScreen;
