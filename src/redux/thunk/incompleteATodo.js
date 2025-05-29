import { incompleteATodo } from "../todo/actions";

const IncompleteATodoThunk = (todoIdObj) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/${todoIdObj.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: "pending" })
        });
        const todo = await response.json();

        dispatch(incompleteATodo(todo));
    };
}

export default IncompleteATodoThunk;