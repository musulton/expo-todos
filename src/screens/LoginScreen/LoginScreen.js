import React from "react";
import {SafeAreaView, View} from "react-native";

import Input from "../../shared/components/Input";
import SubmitButton from "../../shared/components/SubmitButton";
import Heading from "../../shared/components/Heading";
import styles from "./LoginScreen.styles";

const LoginScreen = ({login}) => {
    const {onAuthenticate} = login();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const submitLogin = () => {
        onAuthenticate(email, password)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
                <Heading />
            </View>
            <Input
                value={email}
                onChangeValue={setEmail}
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
