

"use client"

import { use, useState } from "react"


type CounterType = {
  message: number,
  count: number,
  text?: string
}

type ErrotType ={
  type: "error" | "warning",
  errorMsg: string
}


export default function Counter({ message, count,text}: CounterType) {
  const [userName, setUserName] = useState(message); 2//
  const [initCount, setInitCount] = useState(count); 0//
  const [greet, setGreet] = useState(""); 0//
 const [error,setError] = useState<ErrotType>({
  type: 'error',
  errorMsg:"You are not listed in our system."
 }) 
  const handlerChng = (e: any) => {
    setGreet(e.target.value)
  }

  const handlerChange = (e: any) => {
    setUserName(e.target.value)
    console.log(e.target.value)

  }

  const handlerAdd = () => {
    // setUserName(e.target.value + initCount)
    let num = Number(initCount)

    let num2 = Number(userName)
    setInitCount(num + num2)

    console.log(typeof (num), typeof (num2))
  }

  const handlerMinus = () => {
    if (initCount === 0) return
    setInitCount(initCount - userName)
  }


  const toggleErrorHandler = ()=>{
    if(error.type === 'error'){
      setError({
        type: 'warning',
        errorMsg: 'please wear your id card.'
      });
    }
    else{
      setError({
        type: 'error',
        errorMsg: "You are not listed in our system."
      });
    }
  }


  return (
    <>
      <h1>{initCount}</h1>
      <input type="text" value={greet} onChange={handlerChng} id="" placeholder="enter your name" />
      <br />
      <br />

      {
        greet.length >= 3?<h2>{'welcome'} {greet}</h2>:
        <h2>please enter your name</h2>

      }
      <input type="text" value={userName} onChange={handlerChange} placeholder="enter your number" />

      <h3>{initCount}</h3>
      <button onClick={handlerAdd} >+</button>
      <button onClick={handlerMinus}>-</button>
      <p style={
        error.type === "error"? {backgroundColor: "red" , color: "white"}:
        {backgroundColor: 'yellow', color: 'red'}
      }>

        {error.errorMsg}
      </p>
      <button onClick={toggleErrorHandler}>toggler</button>

</>

  )
}













































