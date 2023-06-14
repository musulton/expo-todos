import {TouchableHighlight} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

const ToDoButton = ({onPress, nameIcon, colorIcon}) => {
    return (
        <TouchableHighlight onPress={onPress}>
            <Icon name={nameIcon} size={26} color={colorIcon} />
        </TouchableHighlight>
    )
}

export default ToDoButton;
