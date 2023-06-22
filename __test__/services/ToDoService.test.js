import ToDoService from "../../src/services/ToDoService";
import {useDeps} from "../../src/shared/context/DependencyContext";

jest
    .mock("../../src/shared/context/DependencyContext", () => {
        return {
            useDeps: jest.fn().mockReturnValue({
                apiClient: jest.fn()
            })
        }
    });

describe("ToDoService", () => {
    const mockApiClient = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    })

    test("getTodoService", async () => {
        const data = {
            todos: []
        };

        useDeps().apiClient = mockApiClient.mockResolvedValue(data);

        const result = await ToDoService().getTodoService();

        expect(mockApiClient).toHaveBeenCalledWith({
            url: "/todos",
            method: "get"
        })
        expect(result).toEqual(data);
    })

    test("addTodoService", async () => {
        const todo = {
            title: "title",
            complete: false
        };

        useDeps().apiClient = mockApiClient.mockResolvedValue("Success");

        const result = await ToDoService().addTodoService(todo);

        expect(useDeps().apiClient).toHaveBeenCalledWith({
            url: "/todos",
            method: "post",
            params: todo
        });
        expect(result).toEqual("Success");
    })

    test("updateTodoService", async () => {
        const todo = {
            id: 1,
            title: "title",
            complete: false
        };

        useDeps().apiClient = mockApiClient.mockResolvedValue("Success");

        const result = await ToDoService().updateTodoService(todo);

        expect(result).toEqual("Success");
        expect(useDeps().apiClient).toHaveBeenCalledWith({
            url: "/todos/" + todo.id,
            method: "put",
            params: {
                title: todo.title,
                complete: !todo.complete
            }
        })
    })

    test("deleteTodoService", () => {
        // Latihan... tambah sendiri
    })
})
