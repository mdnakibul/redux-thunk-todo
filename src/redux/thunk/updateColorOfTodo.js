import { updatecolorOfTodo } from "../todo/actions";

const updateColorOfTodoThunk = ({ id, color }) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ color })
        });
        const todo = await response.json();

        dispatch(updatecolorOfTodo(todo));
    };
}

export default updateColorOfTodoThunk;