import React from "react";
import {Image, View, StyleSheet} from "react-native";
import {useDispatch} from "react-redux";

import enigma from "../../shared/assets/images/enigma.png";
import PATH from "../../navigations/NavigationPath";
import {onNavigate} from "../../navigations/RootNavigation";
import LocalStorage from "../../shared/utils/LocalStorage";
import {login} from "../../shared/store/login/LoginAction";

const SplashScreen = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        setTimeout(async () => {
            const isLoggedIn = !!await LocalStorage().getData("token");
            const routeName = isLoggedIn ? PATH.TODO_LIST : PATH.LOGIN;

            if (isLoggedIn) {
                dispatch(login());
            }

            onNavigate({
                isReplace: true,
                routeName
            });
        }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <Image source={enigma} style={styles.logo} />
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: 200,
        height: 200
    }
})
