import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cake_ordered, cake_restocked } from '../features/cakeSlice';

const CakeView = () => {
    //Redux has provided us useSelector() hooks to get rid of transition states
    //from the store
    const numOfCakes = useSelector((state)=>{
         console.log(state);
         return state.cake.numOfCakes;
    });
    //useDispatch get rid of all actions like cake_ordered and cake_restocked defined inside the cakeSlice --> here named as cakeReducer in store.
    const dispatch = useDispatch();
    const sellCake = ()=>{
        dispatch(cake_ordered(cake))
    };
    const restockedCake =()=>{
        dispatch(cake_restocked(cake))
    };
    const [cake,setCake] = useState(0);
    const cakeHandle =(event)=>{
          setCake(parseInt(event.target.value));
    }
  return (
    <div>
      <h2>This is CakeView Component :</h2>
      <h4>Num of Cakes Available Now : {numOfCakes}</h4>
      Enter Cake Amount : <input type="number" name="ck1" id="ck1" onChange={cakeHandle} /><br/>
      <button onClick={sellCake}>Sell Cake</button>
      <button onClick={restockedCake}>Restocked Cake</button>
    </div>
  )
}

export default CakeView