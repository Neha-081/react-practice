import React,{useState,useEffect}  from 'react'

function HookMouse() {
const [x,setX]=useState(0)
const [y,setY]=useState(0)

const logMousePosition=e=>{
    console.log('mouse event');
    setX(e.clientX)
    setY(e.clientY)
}

useEffect(()=>{
    console.log('useEffcet called');
    window.addEventListener('mousemove',logMousePosition)


    //cleanup code
    return ()=>{
        console.log('component unmounting');
        window.removeEventListener('mousemove',logMousePosition)
    }
},[])   //empty array denotes that this effect dont depend on any props or state means render only once or useeffect calls only at initial not every render
        //componentDidMount by adding empty array
    return (
        <div>
            Hooks - X: {x} Y: {y}
        </div>
    )
}

export default HookMouse
