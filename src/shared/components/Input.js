import React from "react";
import {TextInput, StyleSheet} from "react-native";
import {getAccessibilityLabel} from "../utils/Functions";

const Input = ({value, onChangeValue, placeholder, isSecureText, label}) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeValue}
            placeholder={placeholder || "What needs to be done?"}
            style={styles.input}
            placeholderTextColor={"#CACACA"}
            selectionColor={"#666666"}
            secureTextEntry={isSecureText}
            {...getAccessibilityLabel(`${label}_Text_Input_Component`)}
        />
    )
}

export default Input;

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        marginVertical: 3
    }
})
