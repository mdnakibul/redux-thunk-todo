import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import fetchTodos from '../redux/thunk/fetchTodos';

export default function TodoList() {
    const todos = useSelector(state => state.todos)
    const filters = useSelector(state => state.filters)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodos)
    }, [dispatch])
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                todos?.filter(singleTodo => {
                    switch (filters.status) {
                        case 'Complete':
                            return singleTodo.status === 'completed'

                        case 'Incomplete':
                            return singleTodo.status === 'pending'

                        default:
                            return true;
                    }
                })?.filter(singleTodo => {
                    if (filters.color.length > 0) {
                        return filters.color.includes(singleTodo?.color)
                    }
                    return true;
                }).map(todo => <Todo todo={todo} key={todo.id} />)
            }
        </div>
    );
}
