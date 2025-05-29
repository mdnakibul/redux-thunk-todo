import { deleteTodo } from "../todo/actions";

const deleteTodoThunk = ({ id }) => {
    return async (dispatch) => {
        await fetch(`http://localhost:9000/todos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
        dispatch(deleteTodo({ id }));
    };
}

export default deleteTodoThunk;