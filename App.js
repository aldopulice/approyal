import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';

const App = () => {
  const [isSplashScreen, setIsSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashScreen(false);
    }, 3000); // Splash Screen fica visível por 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    isSplashScreen ? <SplashScreen /> : <LoginScreen />
  );
};

export default App;
