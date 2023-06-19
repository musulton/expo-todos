import {useDeps} from "../shared/context/DependencyContext";

const ToDoService = () => {
    const {apiClient} = useDeps();
    const getTodoService = async () => {
        try {
            return await apiClient({
                url: "/todos",
                method: "get"
            });
        } catch (e) {
            throw e;
        }
    }

    const addTodoService = async (todo) => {
        try {
            return await apiClient({
                url: "/todos",
                method: "post",
                params: {
                    title: todo.title,
                    complete: todo.complete
                }
            });
        } catch (e) {
            throw e;
        }
    }

    const updateTodoService = async (todo) => {
        try {
            return await apiClient({
                url: "/todos/" + todo.id,
                method: "put",
                params: {
                    title: todo.title,
                    complete: !todo.complete
                }
            });
        } catch (e) {
            throw e;
        }
    }

    const deleteTodoService = async (id) => {
        try {
            return await apiClient({
                url: "/todos/" + id,
                method: "delete"
            })
        } catch (e) {
            throw e;
        }
    }

    return {
        getTodoService,
        addTodoService,
        updateTodoService,
        deleteTodoService
    }
}

export default ToDoService;
