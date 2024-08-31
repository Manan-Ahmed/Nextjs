// 'use client'

// import UserContext from "@/context/userProvider"
// import { useContext } from "react" 


// import { useState } from "react"
// import UserInfo from "./formCreat/page"


// export default function Info(){

//     const {addUser,setAddUser}: any = useContext(UserContext)

//     const addOne = (newUser: any)=>{
//         let clone = [...addUser,newUser]
//         setAddUser([...clone])
//         console.log(addOne);
        
//     }
//     return(
//         <>
//            <UserInfo addOne={addOne}/>
        
//         </>
//     )
// }






"use client"

import UserContext from "@/context/user-Context"
import { useContext, useEffect } from "react"
import UserInfo from "@/app/formCreat/page"
// import { Router } from "next/navigation"
import {useRouter} from "next/navigation"
import Router from "next/navigation"
// import router from "next/router"
// import router from "next/dist/client/router"


export default function Info(){

    const {addUser,setAddUser,checkAuth, setCheckisAuth,status,setStatus}: any = useContext(UserContext)

    const addOne = (newUser: any)=>{
        let clone = [...addUser,newUser]
        setAddUser([...clone])
        // setCheckisAuth(!checkAuth)
    }
    return(
        <>
        <UserInfo addOne={addOne}/>
        
        </>
    )
}