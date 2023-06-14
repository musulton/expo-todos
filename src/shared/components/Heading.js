import {StyleSheet, Text} from "react-native";

const Heading = () => (
    <Text style={styles.text}>todos</Text>
)

export default Heading;

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 52,
        fontWeight: "200",
        color: "rgba(175, 47, 47, 0.25)"
    }
})
