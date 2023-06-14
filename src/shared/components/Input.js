import React from "react";
import {TextInput, StyleSheet} from "react-native";

const Input = ({value, onChangeValue}) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeValue}
            placeholder={"What needs to be done?"}
            style={styles.input}
            placeholderTextColor={"#CACACA"}
            selectionColor={"#666666"}
        />
    )
}

export default Input;

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
    }
})
