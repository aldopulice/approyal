import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, TextInput, Button } from 'react-native';

const DependentesScreen = ({ route }) => {
  const [dependentesData, setDependentesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [newDependenteNome, setNewDependenteNome] = useState('');
  const [newDependenteCpf, setNewDependenteCpf] = useState('');
  const userCpf = route?.params?.userCpf;

  useEffect(() => {
    const fetchDependentesData = async () => {
      if (!userCpf) {
        Alert.alert("Erro", "CPF não fornecido.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://vmi1327791.contaboserver.net:3000/dependentes/${userCpf}`);
        const data = await response.json();
        setDependentesData(data);
      } catch (error) {
        Alert.alert("Erro ao buscar dados dos dependentes", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDependentesData();
  }, [userCpf]);

  const adicionarNovoDependente = async () => {
    if (!newDependenteNome || !newDependenteCpf) {
      Alert.alert("Erro", "Preencha todos os campos para adicionar um novo dependente.");
      return;
    }

    const requestBody = {
      usuario: userCpf, // Use o usuário do CPF fornecido
      nome_dependente: newDependenteNome,
      cpf_dependente: newDependenteCpf,
    };

    try {
      const response = await fetch("http://vmi1327791.contaboserver.net:3000/inserir-dependente", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      const result = await response.text();
      console.log(result);
      // Você pode atualizar a lista de dependentes após a adição bem-sucedida se desejar
    } catch (error) {
      console.log('error', error);
      Alert.alert("Erro ao adicionar dependente", error.message);
    }
  };

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      
      <TextInput
        placeholder="Nome do Dependente"
        value={newDependenteNome}
        onChangeText={text => setNewDependenteNome(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="CPF do Dependente"
        value={newDependenteCpf}
        onChangeText={text => setNewDependenteCpf(text)}
        style={styles.input}
      />
      <Button title="ADICIONAR" onPress={adicionarNovoDependente} />
      {dependentesData ? (
        dependentesData.map((dependente, index) => (
          <View key={index} style={styles.item}>
            <Text>Nome do Dependente: {dependente.nome_dependente}</Text>
            <Text>CPF do Dependente: {dependente.cpf_dependente}</Text>
          </View>
        ))
      ) : (
        <Text>Nenhum dependente encontrado para o CPF fornecido.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default DependentesScreen;
