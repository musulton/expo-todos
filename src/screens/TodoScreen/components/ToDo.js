import {View, Text} from "react-native";

import {getAccessibilityLabel} from "../../../shared/utils/Functions";
import ToDoButton from "../../../shared/components/ToDoButton";

import styles from "./ToDo.styles";

const ToDo = ({
  todo,
  toggleComplete,
  deleteTodo
}) => {
    return (
        <View style={styles.container}>
            <Text
                style={[
                    styles.text,
                    todo.complete ? styles.todoComplete : null
                ]}
                {...getAccessibilityLabel(`Todo_Title_${todo.title}`)}
            >{todo.title}</Text>
            <View style={styles.buttonWrapper}>
                <ToDoButton
                    nameIcon={"checkmark-done-circle-outline"}
                    onPress={() => toggleComplete(todo)}
                    colorIcon={"green"}
                    accesibilityLabel={`Edit_${todo.title}`}
                />
                <ToDoButton
                    nameIcon={"close-circle-outline"}
                    onPress={() => deleteTodo(todo.id)}
                    colorIcon={"red"}
                    accesibilityLabel={`Delete_${todo.title}`}
                />
            </View>
        </View>
    )
}

export default ToDo;
