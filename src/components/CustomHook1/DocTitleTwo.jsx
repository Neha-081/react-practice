import React from 'react'
import { useState } from 'react/cjs/react.development'
import useDocTitle from './useDocTtile.jsx'

function DocTitleTwo() {

    const [count,setCount]=useState(0)
   
    useDocTitle(count)  //customHook
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count : {count}</button>
        </div>
    )
}

export default DocTitleTwo
