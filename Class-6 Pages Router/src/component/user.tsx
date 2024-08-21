import { UsersDataType } from "@/app/type";



export default function Profile({userName,rolnum,subj}:UsersDataType){

    return(
        <>
        <h1>{userName}</h1>
         <h1>{rolnum}</h1>
        <h1>{subj}</h1> 
        
        
        </>
    )
}