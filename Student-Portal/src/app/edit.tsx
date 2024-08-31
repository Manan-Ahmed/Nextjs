"use client"
import UserContext from "@/context/user-Context";
import { useContext } from "react";
import EditUser from "./editForm/page";
import { useRouter } from "next/navigation";







export default function EditInfo(){

    // const {addUser,setAddUser,checkAuth, setCheckisAuth,status,setStatus,num}: any = useContext(UserContext)
    // const addOne = (newUser: any)=>{
    //     // let clone = [...addUser,newUser]
    //     // clone.splice(num,1,newUser)
    //     // setAddUser([...clone])
    //     // // setCheckisAuth(!checkAuth)
    //     console.log();
        
    // }
//     const addOne = (target:any)=>{
//         console.log(target.studentName);
        
// }
    return(
        <>
        {/* <EditUser addOne={addOne}/> */}
        
        </>
    )
}