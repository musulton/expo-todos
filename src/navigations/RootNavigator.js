import {View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen/SplashScreen";
import ToDoScreen from "../screens/TodoScreen/ToDoScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

import PopupMenu from "../screens/TodoScreen/components/PopupMenu";
import PATH from "./NavigationPath";
import {navigationRef} from "./RootNavigation";
import {Login} from "../screens/LoginScreen/Login";
import LoginService from "../services/LoginService";
import ToDoService from "../services/ToDoService";
import {ToDo} from "../screens/TodoScreen/ToDo";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={PATH.SPLASH}>
                <Stack.Screen name={PATH.SPLASH} component={SplashScreen} options={{headerShown: false}} />
                <Stack.Screen name={PATH.LOGIN} options={{headerShown: false}}>
                    {() => <LoginScreen login={() => Login(LoginService)} />}
                </Stack.Screen>
                <Stack.Group
                    screenOptions={({navigation}) => {
                        return {
                            headerStyle: {
                                backgroundColor: "#F2F2F2"
                            },
                            headerShadowVisible: false,
                            headerRight: () => <PopupMenu navigation={navigation} />,
                            headerLeft: () => <View />
                        }
                    }}
                >
                    <Stack.Screen name={PATH.TODO_LIST} options={{ title: "" }}>
                        {() => <ToDoScreen todo={() => ToDo(ToDoService)} />}
                    </Stack.Screen>
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;
