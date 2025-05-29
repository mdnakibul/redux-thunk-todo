import { addTodo } from "../todo/actions";

const addTodoThunk = (todoInput) => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:9000/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todoInput)
        });
        const todo = await response.json();

        dispatch(addTodo(todo.text));
    };
}

export default addTodoThunk;