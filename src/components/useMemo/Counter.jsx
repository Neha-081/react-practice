//memo is a hook that will only recompute the cached value when one of the dependencies has changed
//this optimizations avoid expensive calculations on every render


//need to cache a function-useCallback
//need to cache result of invoke function-useMemo
import React,{useMemo} from 'react'
import { useState } from 'react/cjs/react.development'

function Counter() {
    const [counterOne,setCounterOne]=useState(0)
    const [counterTwo,setCounterTwo]=useState(0)

    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }


    const isEven=    useMemo(()=>{
        let i=0
        while(i<2000000000)i++   //this slower downs the performance in the browser to update for all renders so usememo comes into picture
      return  counterOne%2===0
    },[counterOne])


    return (
        <div>
            <div >
            <button onClick={incrementOne}>
            Count One - {counterOne}
            </button>
            <span>{isEven ? 'even' : 'odd'}</span>
            </div>
            <div >
                <button onClick={incrementTwo}>
                Count Two - {counterTwo}
                </button>
           
            </div>
        </div>
    )
}

export default Counter
