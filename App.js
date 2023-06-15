import { StyleSheet, SafeAreaView } from 'react-native';

import AppNavigation from "./src/navigations/RootNavigator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
