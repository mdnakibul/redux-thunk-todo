import { ADD_TODO, CLEAR_COMPLETED_TODO, COMPLETE_ALL_TODO, COMPLETE_A_TODO, DELETE_TODO, INCOMPLETE_A_TODO, TODO_LOADED, UPDATE_COLOR_OF_TODO } from "./actionTypes";

const initialTodoState = []

const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case TODO_LOADED:
            return [...action.payload]

        case ADD_TODO:
            const lastTodoId = state[state.length - 1]?.id || 0
            return [...state, { ...action.payload, id: lastTodoId + 1 }]

        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id)

        case COMPLETE_A_TODO:
            return [...state].map(todo => {
                if (todo.id === action.payload.id) {
                    todo.status = "completed"
                }
                return { ...todo }
            })
        case INCOMPLETE_A_TODO:
            return [...state].map(todo => {
                if (todo.id === action.payload.id) {
                    todo.status = "pending"
                }
                return { ...todo }
            })
        case COMPLETE_ALL_TODO:
            return [...state].map(todo => {
                todo.status = "completed"
                return { ...todo }
            })

        case CLEAR_COMPLETED_TODO:
            return [...state].filter(todo => todo.status !== "completed")
        case UPDATE_COLOR_OF_TODO:
            return [...state].map(todo => {
                if (todo.id === action.payload.id) {
                    todo.color = action.payload.color
                }
                return { ...todo }
            })
        default:
            return state
    }
}

export default todoReducer