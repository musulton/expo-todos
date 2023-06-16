import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-end",
        marginTop: 20
    },
    modalView: {
        margin: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 30,
        alignItems: "center",

        // iOS
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        // Android
        elevation: 5
    },
    modalText: {
        textAlign: "center"
    },
    dotIcon: {
        paddingLeft: 20,
        paddingVertical: 20
    }
})
