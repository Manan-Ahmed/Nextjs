






"use client"
import AuthForm from "@/component/AuthForm";
import Link from "next/link";
const signup = (email: string,password: string)=>{
    console.log("signFunct", email,password);
    
}


export default function Signup(){
    return(
        <>
        
        <AuthForm
        btnLabel={"Signup"}
        btnFunc={signup}
        />

<Link rel="stylesheet" href="./login" >
<p>Already have an account lgin here</p>
</Link>        
        </>
    )
}