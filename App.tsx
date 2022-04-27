import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput style={styles.input} value={text} onChangeText={(t) => setText(t)} />
      <Button title='Expo Rules!' onPress={() => null} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '60%',
    height: 44,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'blue',
    paddingHorizontal: 6
  }
});
