export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT';
export const DECREMENT_BY_AMOUNT = 'DECREMENT_BY_AMOUNT';
export const RESET = 'RESET';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const incrementByAmount = (amount) => ({ type: INCREMENT_BY_AMOUNT, payload: amount });
export const decrementByAmount = (amount) => ({ type: DECREMENT_BY_AMOUNT, payload: amount });
export const reset = () => ({ type: RESET });
