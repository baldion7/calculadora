import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native';
import Button from './src/components/Button';
import MyKeyboard from './src/components/MyKeyboard';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/styles/Colores';

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    < ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: '#000' }]}>
        <StatusBar style="auto" />
        <Switch
          values={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}

        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
} 

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
