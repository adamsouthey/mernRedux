import { SET_ALERT, REMOVE_ALERT } from '../actions/types'
//Alert reducer function
//Consumes alert related state and an action

//Initialise state pertaining to alerts only
const initialState = []

export function alert(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case SET_ALERT:
            return [...state, payload]
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload)
        default:
            return state
    }
}
