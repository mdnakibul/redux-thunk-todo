import { useState } from "react";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { addTodo, clearCompletedTodo, completeAllTodo } from "../redux/todo/actions";

export default function Header() {
    const dispatch = useDispatch()
    const [todoFormData, setTodoFormData] = useState({
        text: '',
        status: 'pending'
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTodoFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        document.getElementById('todo-form').reset()
        dispatch(addTodo(todoFormData))
    }

    const handleCompleteAllTask = () => {
        dispatch(completeAllTodo())
    }

    const handleClearComplted = () => {
        dispatch(clearCompletedTodo())
    }
    return (
        <div>
            <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={handleSubmit} id="todo-form">
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    onChange={handleInputChange}
                    required
                    name="text"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer" onClick={handleCompleteAllTask}>
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={handleClearComplted}>Clear completed</li>
            </ul>
        </div>
    );
}
