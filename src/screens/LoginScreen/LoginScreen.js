import React from "react";
import {SafeAreaView, View} from "react-native";
import {useSelector} from "react-redux";

import Input from "../../shared/components/Input";
import SubmitButton from "../../shared/components/SubmitButton";
import Heading from "../../shared/components/Heading";
import styles from "./LoginScreen.styles";
import MessageBox from "../../shared/components/MessageBox";

const LoginScreen = ({login}) => {
    const {onAuthenticate, onDismissError} = login();
    const error = useSelector((state) => state.AppReducer.errorMessage);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    React.useEffect(() => {
        if (error) {
            MessageBox("Error", error.message, onDismissError).showAlert();
        }
    }, [error])

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
