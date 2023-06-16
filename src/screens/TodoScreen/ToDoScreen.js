import React from "react";
import {View, ScrollView} from "react-native";

import Heading from "../../shared/components/Heading";
import Input from "../../shared/components/Input";
import SubmitButton from "../../shared/components/SubmitButton";

import TabBar from "./components/TabBar";
import ToDoList from "./components/ToDoList";

import styles from "./ToDoScreen.styles";

const ToDoScreen = ({todo}) => {
    const {onLoadTodo} = todo();
    const [appState, setAppState] = React.useState({
        type: "All",
        todos: [],
        inputValue: ""
    });

    React.useEffect(() => {
        const fetchData = async () => {
            const todos = await onLoadTodo();

            setAppState({...appState, todos})
        }

        fetchData();
    }, [])

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
