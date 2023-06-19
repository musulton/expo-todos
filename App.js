import { StyleSheet, SafeAreaView } from 'react-native';
import {Provider} from "react-redux";
import {StatusBar} from "expo-status-bar";

import AppNavigation from "./src/navigations/RootNavigator";
import DepProvider from "./src/shared/context/DependencyContext";
import ApiClient from "./src/services/ApiClient";
import configureStore from "./src/shared/store/store";
import Loading from "./src/shared/components/Loading";

export default function App() {
    const store = configureStore();

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
          <DepProvider services={{apiClient: ApiClient}}>
              <StatusBar
                  barStyle={"dark-content"}
                  backgroundColor={"#F2F2F2"}
              />
              <AppNavigation />
              <Loading />
          </DepProvider>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
