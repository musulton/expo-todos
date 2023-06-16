import { StyleSheet, SafeAreaView } from 'react-native';

import AppNavigation from "./src/navigations/RootNavigator";
import DepProvider from "./src/shared/context/DependencyContext";
import ApiClient from "./src/services/ApiClient";

export default function App() {
  const apiClient = ApiClient();

  return (
    <SafeAreaView style={styles.container}>
      <DepProvider services={{apiClient}}>
        <AppNavigation />
      </DepProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
