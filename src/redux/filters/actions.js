import { FILTER_COLOR_CHANGE, FILTER_STATUS_CHANGE } from "./actionTypes"

export const filterStatusChange = (payload) => {
    return {
        type: FILTER_STATUS_CHANGE,
        payload
    }
}

export const filterColorChange = (payload) => {
    return {
        type: FILTER_COLOR_CHANGE,
        payload
    }
}