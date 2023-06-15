import React from "react";
import {SafeAreaView, View} from "react-native";

import Input from "../../shared/components/Input";
import SubmitButton from "../../shared/components/SubmitButton";
import Heading from "../../shared/components/Heading";
import PATH from "../../navigations/NavigationPath";

import styles from "./LoginScreen.styles";
import {onNavigate} from "../../navigations/RootNavigation";

const LoginScreen = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const submitLogin = () => {
        setTimeout(() => {
            if (username === "enigma" && password === "123") {
                onNavigate({
                    routeName: PATH.TODO_LIST,
                    isReplace: true
                })
            }
        }, 1500)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
                <Heading />
            </View>
            <Input
                value={username}
                onChangeValue={setUsername}
                placeholder={"Enter your username"}
            />
            <Input
                value={password}
                onChangeValue={setPassword}
                placeholder={"Enter your password"}
                isSecureText
            />
            <SubmitButton title={"Login"} onSubmit={submitLogin} />
        </SafeAreaView>
    )
}

export default LoginScreen;
