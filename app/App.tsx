import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text } from './src/components/Text';


export default function App() {
  //Record = objeto
  // forma de evitar erros ao recarregar, retornando um null.
  // Caso queira usar do google fonts: @expo-google-font (https://docs.expo.dev/guides/using-custom-fonts/)
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf')
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text size={24} weight="600" opacity={.5} color="#00f">Hello Dev!</Text>
      <Text size={20} weight="700" opacity={.8} color="#f0f">Hi!</Text>
      <StatusBar style='auto' />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
