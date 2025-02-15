"use client";

import { useState } from "react";

type AuthFormTypes = {
  btnLabel: string;
  btnFunc: (email: string, password: string) => void;
};

export default function AuthForm({ btnLabel, btnFunc }: AuthFormTypes) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          btnFunc(email, password);
        }}
      >
        {btnLabel}
      </button>
    </>
  );
}





























// "use client"
// import { useState } from "react"


// type AuthFormType={
//    btnlabel:  string,
// btnFunc: (email: string , password: string)=> void
// }

// export default function AuthForm({btnlabel,btnFunc}:AuthFormType){
//     const [email,setEmail] = useState("")
//     const [password,setPassword] = useState("")
   
//     return(
//         <>
//         <label htmlFor="email">email</label>

//            email: <input type="text" 
//            value={email}
//            id="email" 
//            onChange={(e)=>{setEmail(e.target.value)}}
//            />


        
//         <label htmlFor="password">Password </label>

//            Password: <input type="password" 
//            value={password} 
//            id="password"
//            onChange={(e)=>{setPassword(e.target.value)}}
//            />

// <button
//         onClick={() => {
//           btnFunc(email, password);
//         }}
//       >
//         {btnlabel}
//       </button>
        
//         </>
//     )
// }
