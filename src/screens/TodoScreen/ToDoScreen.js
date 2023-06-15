import React from "react";
import {View, ScrollView} from "react-native";

import Heading from "../../shared/components/Heading";
import Input from "../../shared/components/Input";
import SubmitButton from "../../shared/components/SubmitButton";

import TabBar from "./components/TabBar";
import ToDoList from "./components/ToDoList";

import styles from "./ToDoScreen.styles";

const TODOS = [
    { id: 1, title: " 1", complete: true },
    { id: 2, title: "Title 2", complete: false },
    { id: 3, title: "Title 3", complete: false },
]

const ToDoScreen = () => {
    const [appState, setAppState] = React.useState({
        type: "All",
        todos: [...TODOS],
        inputValue: ""
    })

    const onChangeInputValue = (inputValue) => {
        setAppState({
            ...appState,
            inputValue
        })
    }

    const setType = (type) => {
        setAppState({...appState, type})
    }

    const submitTodo = () => {
        const payload = {
            title: appState.inputValue,
            complete: false,
            id: appState.todos.length + 1
        }

        const todos = [...appState.todos, payload]
        setAppState({...appState, inputValue: "", todos})
    }

    const toggleComplete = (todoIndex) => {
        const {todos} = appState;
        todos.forEach((todo) => {
            if (todoIndex === todo.id) {
                todo.complete = !todo.complete
            }
        })

        setAppState({...appState, todos})
    }

    const deleteTodo = (todoIndex) => {
        const {todos} = appState;
        const newTodos = todos.filter((todo) => todo.id !== todoIndex)

        setAppState({...appState, todos: newTodos})
    }

    return (
        <View style={styles.container}>
            <Heading />
            <Input
                value={appState.inputValue}
                onChangeValue={onChangeInputValue}
            />
            <SubmitButton
                onSubmit={submitTodo}
                title={"Submit"}
            />
            <ToDoList
                todos={appState.todos}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                type={appState.type}
            />
            <TabBar type={appState.type} setType={setType} />
        </View>
    )
}

export default ToDoScreen;
