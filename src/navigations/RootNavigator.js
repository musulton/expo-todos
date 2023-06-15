import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen/SplashScreen";
import ToDoScreen from "../screens/TodoScreen/ToDoScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

import PopupMenu from "../screens/TodoScreen/components/PopupMenu";
import PATH from "./NavigationPath";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={PATH.TODO_LIST}>
                <Stack.Screen name={PATH.SPLASH} component={SplashScreen} options={{headerShown: false}} />
                <Stack.Screen name={PATH.LOGIN} component={LoginScreen} options={{headerShown: false}} />
                <Stack.Group
                    screenOptions={({navigation}) => {
                        return {
                            headerStyle: {
                                backgroundColor: "#F2F2F2"
                            },
                            headerShadowVisible: false,
                            headerRight: () => <PopupMenu navigation={navigation} />
                        }
                    }}
                >
                    <Stack.Screen name={PATH.TODO_LIST} component={ToDoScreen} options={{ title: "" }} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;
