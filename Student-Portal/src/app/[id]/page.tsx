
// "use client"

// import UserContext from "@/context/user-Context";
// import { useContext, useEffect, useState } from "react";





// export default function StudentDetail({params: {rollNumber}}:any){
//     const {addUser} = useContext(UserContext)
//     const [selectUser,setSelectUser] = useState<undefined | null |any>({})
//  console.log(addUser);
 
//  useEffect(()=>{
//   addUser.map((user:any)=>{
//     user.rollNumber === rollNumber?
//     setSelectUser(user): ""
// })
//  },[selectUser])
//      console.log({rollNumber});
     
//     return(
//         <>
//                 {
//                   <table>
//                     <tr>
//                       <td>{selectUser.studentName}</td>
//                     </tr>
//                   </table>
//                 }
//         </>
//     )
// }




"use client"

import UserContext from "@/context/user-Context"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"

// import '../Bootstrap.css'

export default function StudentDetails({ params: { id } }: any) {
    const [newUser, setNewUser] = useState<any>({})
    const { addUser }: any = useContext(UserContext)
    const router = useRouter()
    useEffect(() => {
        addUser.map((user: any) => { 
            console.log(user.id);
                       
            user.id === id ?
            setNewUser(user)
            :
           ''
        })
    }, [newUser])
    
    console.log({id},newUser);
const back = ()=>{
    router.push('/')
}
    return (
        <>
            {
                    

                <div className="mx-2 my-2" >
                    <h1 style={{textAlign: 'center'}}>Student Deatil</h1>
                    <div style={{textAlign: 'center',border: '1px solid black'}}>
                        <h3>StudentName: {newUser.studentName}</h3>
                        <h3>FatherName: {newUser.fatherName}</h3>
                        <h3>RollNumber: {newUser.rollNumber}</h3>
                        <h3>Subject: {newUser.subject}</h3>
                        <h3>Section: {newUser.section}</h3>
                        <h3>FeesStatus: {newUser.feePaid}</h3>
                        <h3>CourseDuration: {newUser.courseDuration}</h3>



                    </div>
                    {/* <table style={{margin: "0 auto"}}>
                    <tr>
                        <td style={{ border: "1px solid black", padding: "20px" }}>name</td>
                        <td style={{ border: "1px solid black", padding: "20px" }}> {newUser.studentName}</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", padding: "20px" }}>Roll number</td>
                        <td style={{ border: "1px solid black", padding: "20px" }}> {newUser.rollNumber}</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", padding: "20px" }}>section</td>
                        <td style={{ border: "1px solid black", padding: "20px" }}> {newUser.section}</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", padding: "20px" }}>subject</td>
                        <td style={{ border: "1px solid black", padding: "20px" }}>{newUser.subject}</td>
                    </tr>
                </table> */}

                <button onClick={back}>GoBack</button>
                </div>
            }
        </>
    )
}