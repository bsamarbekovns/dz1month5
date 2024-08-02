import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT, DECREMENT_BY_AMOUNT, RESET } from '../actions/counterActions';

const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: Math.max(state.count - 1, 0) };
        case INCREMENT_BY_AMOUNT:
            return { ...state, count: state.count + action.payload };
        case DECREMENT_BY_AMOUNT:
            return { ...state, count: Math.max(state.count - action.payload, 0) };
        case RESET:
            return { ...state, count: 0 };
        default:
            return state;
    }
};

export default counterReducer;
