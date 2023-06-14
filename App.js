import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import ToDoScreen from "./src/screens/TodoScreen/ToDoScreen";
import SplashScreen from "./src/screens/SplashScreen/SplashScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
});
