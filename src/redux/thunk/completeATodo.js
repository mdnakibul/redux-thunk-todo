import { completeATodo } from "../todo/actions";

const completeATodoThunk = (todoIdObj) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/${todoIdObj.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: "completed" })
        });
        const todo = await response.json();

        dispatch(completeATodo(todo));
    };
}

export default completeATodoThunk;