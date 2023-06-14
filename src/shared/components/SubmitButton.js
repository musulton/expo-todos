import {TouchableHighlight, Text, StyleSheet, View} from "react-native";

const SubmitButton = (props) => (
    <View style={styles.container}>
        <TouchableHighlight
            underlayColor={"#efefef"}
            onPress={props.submitTodo}
            style={styles.button}
        >
            <Text style={styles.text}>Submit</Text>
        </TouchableHighlight>
    </View>
)

export default SubmitButton;

const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-end",
        marginVertical: 10
    },
    button: {
        height: 50,
        paddingHorizontal: 20,
        width: 150,
        borderWidth: 1,
        borderColor: "rgba(0,0,0, 0.1)",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#666666",
        fontWeight: "bold"
    }
})
