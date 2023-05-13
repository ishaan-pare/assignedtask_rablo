import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, incrementByAmount} from "./counterSlice"

function Counter() {
    const count = useSelector(state=>state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            {count}
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(incrementByAmount(10))}>Inc</button>
        </div>
    )
}

export default Counter