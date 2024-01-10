import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff', // Use a cor de fundo da sua escolha
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'navy', // Ajuste a cor conforme necessário
  },
  logo: {
    width: 150, // Ajuste o tamanho conforme necessário
    height: 150, // Ajuste o tamanho conforme necessário
    resizeMode: 'contain', // Garante que o logo é redimensionado proporcionalmente
    marginVertical: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  forgotPassword: {
    color: '#0000FF',
    marginTop: 5,
  },
  firstAccess: {
    color: '#0000FF',
    marginTop: 20,
  },
  knowAndSign: {
    color: '#0000FF',
    marginTop: 20,
  },
});

export default styles;
