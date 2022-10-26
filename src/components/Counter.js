import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counterValue = useSelector(state => state.count);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {

  };

  const incrementCounterHandler = () => {
    dispatch({ type: 'INCREMENT' });
  }

  const decrementCounterHandler = () => {
    dispatch({ type: 'DECREMENT' });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterValue}</div>
      <div>
        <button onClick={incrementCounterHandler}>increment</button>
        <button onClick={decrementCounterHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle</button>
    </main>
  );
};

export default Counter;
