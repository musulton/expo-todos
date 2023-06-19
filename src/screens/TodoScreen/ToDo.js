import {useDispatch} from "react-redux";
import {showError, showLoading} from "../../shared/store/app/AppAction";

export const ToDo = (service) => {
    const dispatch = useDispatch();
    const {
        getTodoService,
        addTodoService,
        updateTodoService,
        deleteTodoService
    } = service();

    const onLoadTodo = async () => {
        try {
            dispatch(showLoading(true));
            return await getTodoService();
        } catch (e) {
            dispatch(showError(e.message));
        } finally {
            dispatch(showLoading(false));
        }
    }

    const onSubmitTodo = async (todoName, onSuccess) => {
        try {
            dispatch(showLoading(true));

            const payload = {
                title: todoName,
                complete: false
            };

            await addTodoService(payload);
            onSuccess?.();
        } catch (e) {
            dispatch(showError(e.message));
        } finally {
            dispatch(showLoading(false))
        }
    }

    const onCompletedTodo = async (todo, onSuccess) => {
        try {
            dispatch(showLoading(true));
            await updateTodoService(todo);
            onSuccess?.();
        } catch (e) {
            dispatch(showError(e.message));
        } finally {
            dispatch(showLoading(false));
        }
    }

    const onDeleteTodo = async (id, onSuccess) => {
        try {
            dispatch(showLoading(true));
            await deleteTodoService(id);
            onSuccess?.();
        } catch (e) {
            dispatch(showError(e.message));
        } finally {
            dispatch(showLoading(false));
        }
    }

    return {
        onLoadTodo,
        onSubmitTodo,
        onCompletedTodo,
        onDeleteTodo
    }
}
