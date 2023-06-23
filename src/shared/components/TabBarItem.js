import {Text, TouchableHighlight, StyleSheet} from "react-native";
import {getAccessibilityLabel} from "../utils/Functions";

const TabBarItem = (props) => {
    const {
        border,
        title,
        selected,
        setType,
        type
    } = props;

    return (
        <TouchableHighlight
            onPress={setType}
            underlayColor={"#efefef"}
            style={[
                styles.container,
                selected ? styles.selected : null,
                border ? styles.border : null
            ]}
            {...getAccessibilityLabel(`Tab_Bar_Item_${title}`)}
        >
            <Text style={[
                styles.text,
                type === title ? styles.bold : null]}
            >{title}</Text>
        </TouchableHighlight>
    )
}

export default TabBarItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
    },
    text: {
        color: "#777777",
        fontSize: 17
    },
    bold: {
        fontWeight: "bold"
    },
    selected: {
        backgroundColor: "#FFFFFF"
    },
    border: {
        borderWidth: 1,
        borderColor: "#DDDDDD"
    }
})
