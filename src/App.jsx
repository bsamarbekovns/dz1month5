import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount, reset } from './actions/counterActions';

const App = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Счетчик: {count}</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
            <button onClick={() => dispatch(decrementByAmount(10))}>-10</button>
            <button onClick={() => dispatch(reset())}>Сброс</button>
        </div>
    );
};

export default App;
