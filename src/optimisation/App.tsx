import Child from "./Child"
import { useState, useCallback } from "react"

export default function App() {
    const [state, setState] = useState(0);
    const [arrLinkedState, setState2] = useState([1,23,4,4])
    // const someArr = useMemo(()=>{
    //     return arrLinkedState //break???

    //     // return ()=>{} //unmounting -> 

    // },[arrLinkedState]) //useEffect -> dependency array ->

    const memoizedDoRandomThing = useCallback(
        ()=>{

        }, []
    )
    // function doRandomThing(){

    // }
  return (
    <>
        <div>App</div>
        <button onClick={()=> { 
                console.log('do not trigger') ;
                setState(state + 1); 
                setState2([...arrLinkedState, 90, 100])
            }
        }>Make some noise</button>
        <Child 
            pBody={`I am just a child`} 
            // numberArr={someArr} 
            doRandomThing={memoizedDoRandomThing}
        />
    </>
  )
}
