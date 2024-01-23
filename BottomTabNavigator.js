// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen'; // Importe seu HomeScreen aqui

// Outros componentes de tela aqui
// Você pode criar componentes de placeholder ou importar os componentes reais

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } // Adicione condições para outros ícones aqui
          // Você pode adicionar mais telas e ícones conforme necessário
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="OutraTela" component={OutraTelaScreen} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;