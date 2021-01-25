import React, { useState } from 'react';
import { registerRootComponent } from 'expo'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { GlobalState } from './src/context'
import App from './src/App'

const fetchFonts = () => {
  return Font.loadAsync({
    Nunito: require('./assets/fonts/NunitoSans-Regular.ttf'),
    NunitoSemiBold: require('./assets/fonts/NunitoSans-SemiBold.ttf'),
    NunitoBold: require('./assets/fonts/NunitoSans-Bold.ttf'),
    NunitoBlack: require('./assets/fonts/NunitoSans-Black.ttf'),
    Bodoni: require('./assets/fonts/BodoniModa-Bold.ttf')
  });
};

const entry = () => {
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <GlobalState>
      <App />
    </GlobalState>
  )
}

registerRootComponent(entry)