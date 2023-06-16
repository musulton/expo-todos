export const ToDo = (service) => {
    const {
        getTodoService
    } = service();

    const onLoadTodo = async () => {
        try {
            const todos = await getTodoService();
            return todos;
        } catch (e) {
            throw e;
        }
    }

    return {
        onLoadTodo
    }
}
