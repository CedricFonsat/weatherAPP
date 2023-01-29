import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Weather from './Components/Weather';


const App = () => (
  <View style={styles.container}>
    
      <Weather />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
