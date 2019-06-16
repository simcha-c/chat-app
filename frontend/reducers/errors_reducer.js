import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/error_actions';

const defaultState = {
    type: null,
    errors: []
}

const errorsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ERRORS:
            const newState = {
                type: action.errorType,
                errors: action.errors,
            };
            return newState;

        case CLEAR_ERRORS:
            return defaultState;

        default:
            return state;
    }

}

export default errorsReducer