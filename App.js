import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './assets/components/Homepage';

export default function App() {
  return (
    <View style={styles.container}>
      {/*  style={styles.container} */}
          <Homepage />

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
