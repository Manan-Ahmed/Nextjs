"use client"
import { useCallback, useEffect, useRef, useState } from "react"

export default function Home() {
  const [length,setLength] = useState(8)
  const [password,setPassword] = useState('')
  const [numInclude,setNumInclude] = useState(false)
  const [symbInclude,setSymbInclude] = useState(false)




 const passwordGenrater = useCallback(()=>{
    let pass = ''
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let num = '0123456789'
  let symbol = '!@#$%^&*()?'

  if(numInclude) str += num
  
  
  if(symbInclude)    str += symbol 
  

    for(let i = 1;i <= length;i++){
      const passwor = Math.floor(Math.random() * str.length + 1)
    //    pass +=  str.charAt(passwor)
    // setPassword(pass)
       pass += str.charAt(passwor)
       console.log(pass);

    
    }
    setPassword(pass)

    

  },[setPassword,symbInclude,numInclude,length])
  useEffect(()=>{
    passwordGenrater()

  },[numInclude,symbInclude,length])
  return (
   <>
       
      <h1 style={{textAlign: 'center'}}>Password Genrater</h1>
        <div style={{border: '1px solid black',textAlign: 'center'}}>
        <div >
        <input style={{width: '350px',marginTop: "10px",height: '25px'}}
         type="text"
           id="" 
           value={password}
           onChange={(e)=>{setPassword(e.target.value)}}  />

   <button>copy</button>
   </div>
   <div>
   <input type="range" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
<label >length{length}</label>
   <input type="checkbox"  onChange={()=>{setNumInclude((prev)=>!prev)}}  />
   <label>NumberInclude</label>

   
   <input type="checkbox"  onChange={()=>{setSymbInclude((prev)=>!prev)}}   />
   <label>SymbolInclude</label>
   </div>
   </div>
   </>
  )
}
