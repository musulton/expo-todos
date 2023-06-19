import {View, Text} from "react-native";

import ToDoButton from "../../../shared/components/ToDoButton";

import styles from "./ToDo.styles";

const ToDo = ({
  todo,
  toggleComplete,
  deleteTodo
}) => {
    return (
        <View style={styles.container}>
            <Text style={[
                styles.text,
                todo.complete ? styles.todoComplete : null
            ]}>{todo.title}</Text>
            <View style={styles.buttonWrapper}>
                <ToDoButton
                    nameIcon={"checkmark-done-circle-outline"}
                    onPress={() => toggleComplete(todo)}
                    colorIcon={"green"}
                />
                <ToDoButton
                    nameIcon={"close-circle-outline"}
                    onPress={() => deleteTodo(todo.id)}
                    colorIcon={"red"}
                />
            </View>
        </View>
    )
}

export default ToDo;
