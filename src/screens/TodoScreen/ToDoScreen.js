import React from "react";
import {View, ScrollView} from "react-native";

import Heading from "../../shared/components/Heading";
import Input from "../../shared/components/Input";
import SubmitButton from "../../shared/components/SubmitButton";

import TabBar from "./components/TabBar";
import ToDoList from "./components/ToDoList";

import styles from "./ToDoScreen.styles";

const ToDoScreen = ({todo}) => {
    const {
        onLoadTodo,
        onSubmitTodo,
        onDeleteTodo,
        onCompletedTodo
    } = todo();

    const [appState, setAppState] = React.useState({
        type: "All",
        todos: [],
        inputValue: "",
        shouldRefetch: true
    });

    const onRefetch = (isRefetch) => () => {
        setAppState((prevState) => ({
            ...prevState,
            shouldRefetch: isRefetch
        }))
    }

    React.useEffect(() => {
        const fetchData = async () => {
            const todos = await onLoadTodo();
            setAppState({...appState, todos});

            onRefetch(false)();
        }

        if (appState.shouldRefetch) {
            fetchData();
        }

    }, [appState.shouldRefetch]);

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
        onSubmitTodo(appState.inputValue, onRefetch(true));
    }

    const toggleComplete = (todo) => {
        onCompletedTodo(todo, onRefetch(true));
    }

    const deleteTodo = (todoIndex) => {
        onDeleteTodo(todoIndex, onRefetch(true));
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
