import {TouchableHighlight} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

import {getAccessibilityLabel} from "../utils/Functions";

const ToDoButton = ({onPress, nameIcon, colorIcon, accesibilityLabel}) => {
    return (
        <TouchableHighlight
            onPress={onPress}
            {...getAccessibilityLabel(`Todo_Button_${accesibilityLabel}`)}
        >
            <Icon name={nameIcon} size={26} color={colorIcon} />
        </TouchableHighlight>
    )
}

export default ToDoButton;
