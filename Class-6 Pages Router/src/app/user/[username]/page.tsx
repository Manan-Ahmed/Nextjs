
"use client"

import { UsersDataType } from "@/app/type"
import Profile from "@/component/user"
import { useEffect, useState } from "react"

type UserNameType = {
    params: {username:string}
}



const users =[
    {
        name: 'manan',
        rollNum: 123456,
        subject: 'javascript'
    },
    {
        name: 'anus',
        rollNum: 12345,
        subject: 'php'
    },
    {
        name: 'ali',
        rollNum: 1234,
        subject: 'java'
    },
]

export default function UserName({params: {username}}: UserNameType){
    const [user,setUser] = useState<UsersDataType | null >(null)
   const [matchUser,setMatchUser] = useState(false)
const [error,setError] = useState("")
   useEffect(()=>{
    fetchUser()
   
},[])

const fetchUser = () => {
    let [userData] = users.filter(({ name }) => name === username);
    setUser(userData);
     setMatchUser(true)
}


   
    return(
        
        <>
         {
            user && matchUser?
            <Profile
                        userName={user.name}
                        rolnum={user.rollNum}
                        subj={user.subject} 
            />
            : <h1>loading...</h1>
         }
         
         {
            !user  && matchUser && <h1>user not found</h1>
         }

        </>
    )
}

