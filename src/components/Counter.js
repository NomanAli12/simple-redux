import { useSelector , useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {

const dispatch = useDispatch()  
const counter = useSelector((state)=> state.counter.counter)
const show = useSelector((state)=>state.counter.showUser)
const incrementHandler = () =>{
  // dispatch({type: 'increment'})
  dispatch(counterActions.inrement())
}
const decrementHandler = () =>{
  // dispatch({type: 'decrement'}) 
  dispatch(counterActions.decrement()) 
}
const increase = () =>{
  // dispatch({type:'increaseByPayload', amount: 10})
  dispatch(counterActions.increase(10))
}



  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'})
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={increase}>increment by 10</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
