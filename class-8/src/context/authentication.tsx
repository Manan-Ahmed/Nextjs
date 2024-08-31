"use client"
import { createContext, ReactNode, useContext, useState } from "react";


type AuthContextProviderType = {
    children: ReactNode
}

type userType = {
    name: string,
    password: string,
    email: string
}

const AuthContext = createContext({})

export default function AuthContextProvider({children}:AuthContextProviderType){
      const [user,setUser] = useState()

      const onAuthStateChange = (userData: userType)=>{
             setUser(user)
      }

      return(
        <AuthContext.Provider value={{user,onAuthStateChange}}>
            {children}
        </AuthContext.Provider>
      )
}

export const AuthContextData = ()=> useContext(AuthContext)