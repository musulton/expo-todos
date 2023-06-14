import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#EDEDED",
        paddingHorizontal: 15,
        paddingVertical: 7,

        // Shadowing for Android
        elevation: 3,

        // Shadowing for IOS
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: "000000",
        shadowOffset: {
            width: 3,
            height: 3
        }
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    text: {
        fontSize: 16
    },
    todoComplete: {
        textDecorationLine: "line-through"
    }
})

export default styles
