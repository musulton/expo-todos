import {useDeps} from "../shared/context/DependencyContext";

const ToDoService = () => {
    const {apiClient} = useDeps();
    const getTodoService = async () => {
        try {
            const data = await apiClient({
                url: "/todos",
                method: "get"
            });

            return data;
        } catch (e) {
            throw e;
        }
    }

    return {
        getTodoService
    }
}

export default ToDoService;
