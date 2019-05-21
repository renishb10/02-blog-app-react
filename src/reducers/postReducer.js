import { FETCH_POST, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POST:
            console.log('FETCH_POST', action)
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}