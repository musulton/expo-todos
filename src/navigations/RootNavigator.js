import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen/SplashScreen";
import ToDoScreen from "../screens/TodoScreen/ToDoScreen";
import PATH from "./NavigationPath";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={PATH.SPLASH}>
                <Stack.Screen name={PATH.TODO_LIST} component={ToDoScreen} options={{headerShown: false}} />
                <Stack.Screen name={PATH.SPLASH} component={SplashScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;
