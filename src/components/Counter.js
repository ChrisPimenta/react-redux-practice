import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {
  const counterValue = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  }

  const increaseCounterHandlerByAmount = () => {
    dispatch(counterActions.increase({ amount: 10 }));
  }

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={incrementCounterHandler}>increment</button>
        <button onClick={increaseCounterHandlerByAmount}>increase by 10</button>
        <button onClick={decrementCounterHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle</button>
    </main>
  );
};

export default Counter;
