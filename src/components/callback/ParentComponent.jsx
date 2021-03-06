import React from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'
import { useState,useCallback } from 'react/cjs/react.development'

function ParentComponent() {

    const [age,setAge]=useState(25)
    const[salary,setSalary]=useState(50000)

    //usecallback for performance optimization which prevents all renders other than the dependency provid to it as second parameter 
    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])
const incrementSalary=useCallback(()=>{
    setSalary(salary+1000)
},[salary])

    return (
        <div>
            <Title/>
            <Count text="age" count={age}/>
            <Button handleClick={incrementAge}>Increment AGE</Button>
            <Count text="salary" count={salary}/>
            <Button handleClick={incrementSalary}>Increment SALARY</Button>
        </div>
    )
}

export default ParentComponent
