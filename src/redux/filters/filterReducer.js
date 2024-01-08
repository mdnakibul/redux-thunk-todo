import { FILTER_COLOR_CHANGE, FILTER_STATUS_CHANGE } from "./actionTypes";

const initialFilterState = {
    status: 'All',
    color: []
}

const filterReducer = (state = initialFilterState, action) => {
    switch (action.type) {
        case FILTER_STATUS_CHANGE:
            return {
                ...state,
                status: action.payload
            }
        case FILTER_COLOR_CHANGE:
            if (action.payload.changeType === 'add') {
                return {
                    ...state,
                    color: [...state.color, action.payload.color]
                }
            } else {
                return {
                    ...state,
                    color: state.color.filter(color => color !== action.payload.color)
                }
            }

        default:
            return state;
    }
}

export default filterReducer