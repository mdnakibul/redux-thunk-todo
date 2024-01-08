import { useDispatch, useSelector } from "react-redux";
import { filterColorChange, filterStatusChange } from "../redux/filters/actions";

export default function Footer() {
    const todos = useSelector(state => state.todos)
    const filters = useSelector(state => state.filters)
    const dispatch = useDispatch()
    console.log('filters', filters)
    const pendingTodos = todos?.filter(todo => todo.status === 'pending')

    const handleFilterStausChange = (status) => {
        dispatch(filterStatusChange(status))
    }
    const handleFilterColorChange = (color) => {
        let changeType = 'add';
        if (filters?.color?.includes(color)) {
            changeType = 'remove'
        }
        dispatch(filterColorChange({
            color,
            changeType
        }))
    }
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{pendingTodos?.length || 0} tasks left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${filters.status === 'All' && 'font-bold'}`} onClick={() => handleFilterStausChange('All')}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${filters.status === 'Incomplete' && 'font-bold'}`} onClick={() => handleFilterStausChange('Incomplete')} >Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${filters.status === 'Complete' && 'font-bold'}`} onClick={() => handleFilterStausChange('Complete')} >Complete</li>
                <li></li>
                <li></li>
                <li className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${filters.color.includes('green') && 'bg-green-500'}`} onClick={() => handleFilterColorChange('green')}></li>
                <li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${filters.color.includes('red') && 'bg-red-500'}`} onClick={() => handleFilterColorChange('red')}></li>
                <li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${filters.color.includes('yellow') && 'bg-yellow-500'}`} onClick={() => handleFilterColorChange('yellow')}></li>
            </ul>
        </div>
    );
}
