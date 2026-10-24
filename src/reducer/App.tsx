import { useReducer, useState } from "react";

type state = {
    count: number
}
const types = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset'
} as const;

type type = typeof types.INCREMENT | typeof types.DECREMENT | typeof types.RESET;

// type type = typeof types[keyof typeof types]

type Action = {
    type: type,
    valueIncrease?: number
};



//in reducer we define how we wanna change the states -> when x happens then what should be the Y
//functional requirement - isolate -> (this is the biggest advantage of useReducer)
function counterReducer(state: state, action: Action){
    action.valueIncrease = action.valueIncrease ? action.valueIncrease : 1
    switch (action.type){
        case 'increment': 
            return {...state, count: state.count + action.valueIncrease}
        case 'decrement':
            return {...state, count: state.count - 1}
        case 'reset': 
            return {...state, count: 0}
        default: 
            return state
    }
}

//counter -> what all actions can be there by the user which leads to a state change?
// increment, decrement, reset -> 

export default function App() {
    // dispatch | reducer -> 
    // const [state, dispatch] = useReducer(reducer, 0)

    // const [state1, setState1] = useState(0)
    const [state, dispatch] = useReducer(counterReducer, {count: 0})

    //never ever pass setState or dispatch in props -> 

    //what should be send to props -> some helper function which does that job 

    // function handleIncrement(numb: number){
    //     dispatch({type: types.INCREMENT})
    // }
    // handleIncrement(2)
    // handleIncrement('2')


  return (
    <>
        <div>Counter Value: {state.count}</div>
        <button onClick={()=> dispatch({type: types.INCREMENT})}>Increment</button>
        <button onClick={()=> dispatch({type: types.DECREMENT})}>Decrement</button>
        <button onClick={()=> dispatch({type: types.INCREMENT, valueIncrease: 5})}>Increment by 5</button>

        {/* <button onClick={()=> dispatch({type: 'increaseBy5'})}>Increment by 5</button> */}
        <button onClick={()=> dispatch({type: types.RESET})}>Reset</button>
   </>
  )
}
