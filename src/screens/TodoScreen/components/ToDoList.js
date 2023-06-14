import {Text, FlatList} from "react-native";

import ToDo from "./ToDo";

const ToDoList = (props) => {
    const {
        todos,
        toggleComplete,
        deleteTodo,
        type
    } = props;

    const getVisibleTodos = () => {
        switch (type) {
            case "All":
                return todos;
            case "Complete":
                return todos.filter((todo) => todo.complete)
            case "Active":
                return todos.filter((todo) => !todo.complete)
        }
    }

    return (
        <FlatList
            data={getVisibleTodos()}
            renderItem={({item}) => (
                <ToDo
                    todo={item}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            )}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={() => <Text>Data masih kosong</Text>}
        />
    )
}

export default ToDoList;
