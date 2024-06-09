import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Appbar from './components/Appbar/Appbar';
import { SafeAreaView } from 'react-native';
export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Appbar />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
