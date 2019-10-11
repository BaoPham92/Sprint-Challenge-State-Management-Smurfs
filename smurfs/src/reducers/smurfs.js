// * TYPES
import {
    CREATE_SMURF,
    FETCHING,
    FETCH_COMPLETE,
    FETCH_INCOMPLETE,
    UPDATE_SMURF
} from '../actions/smurfs';

// * INITALIZED STATE

const smurfDefaultState = {
    smurfs: [],
    localSmurf: [],
    ifFetching: false,
    error: undefined
}

export default (state = smurfDefaultState, action) => {
    switch (action.type) {
        case CREATE_SMURF:
            return {
                ...state,
                localSmurf: [
                    ...state.localSmurf,
                    action.payload,
                ]
            }
        case UPDATE_SMURF:
            return {
                ...state,
                localSmurf: [
                    ...state.localSmurf,
                    action.payload
                ]
            }
        case FETCHING:
            return {
                ...state,
                ifFetching: true,
                error: undefined
            }
        case FETCH_COMPLETE:
            return {
                ...state,
                smurfs: [...action.payload],
                ifFetching: false,
                error: undefined
            }
        case FETCH_INCOMPLETE:
            return {
                ...state,
                ifFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}