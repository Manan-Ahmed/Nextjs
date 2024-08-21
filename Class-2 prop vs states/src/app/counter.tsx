"use client"
import { useState } from "react"


type CounterType = {
    count: number
    message: string
}


export default function Counter({count,message}:CounterType){
    const [userName,setUserName] = useState('')
    const [initCount,setInitCount] = useState(count)
    
    const add = ()=>{
        setInitCount(initCount + 1)
    }

    const minus = ()=>{
        if(initCount === 0)return
        setInitCount(initCount - 1)
    }

    return(
        <>

       {/* <h2> {userName} </h2>   */}
       

       <h4>{initCount}</h4>
   
   
       <input type="text"
          value={userName} 
          id="" 
          onChange={(event)=>{setUserName(event.target.value)}}/>

          {
            userName.length >=3?
            <h1>{message}{userName}</h1>:
            <p>please enter your name</p>
          }

     <br />
  

     
       <button onClick={add}>+</button>   
       <button onClick={minus}>-</button>         
        </>
    )
}