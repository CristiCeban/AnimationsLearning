import React from 'react';
import { StyleSheet, View } from 'react-native';
import ColorSelection from './src/screens/ColorSelection/ColorSelection';

export default function App() {
  return (
    <View style={styles.container}>
      <ColorSelection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:'center',
    backgroundColor: 'grey',
  },
});

