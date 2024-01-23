// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import CarteirinhaScreen from './CarteirinhaScreen'; 
import DependentesScreen from './DependentesScreen'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Criação do BottomTabNavigator
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Carteirinha') {
            iconName = focused ? 'ios-card' : 'ios-card-outline';
          } else if (route.name === 'Dependentes') {
            iconName = focused ? 'ios-people' : 'ios-people-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Carteirinha" component={CarteirinhaScreen} />
      <Tab.Screen name="Dependentes" component={DependentesScreen} />
    </Tab.Navigator>
  );
}

function App() {
  const [isSplashScreen, setIsSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {isSplashScreen ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={HomeTabs} options={{ headerShown: false }} />
          {/* Configura as rotas para Carteirinha e Dependentes */}
          <Stack.Screen name="Carteirinha" component={CarteirinhaScreen} />
          <Stack.Screen name="Dependentes" component={DependentesScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
