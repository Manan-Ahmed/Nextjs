"use client"

import UserContext from "@/context/user-Context"
import Link from "next/link";
import { useContext, useState } from "react"

import { useRouter } from "next/navigation"

export default function EditUser(){
    const { addUser,setAddUser, num }: any = useContext(UserContext);
const router = useRouter()
    let count = addUser[num]
    console.log(count);
    
    const [editName,setEditName] = useState(count.studentName)
    const [editFatherName,setEditFatherName] = useState(count.fatherName)
    const [editRollNum,setEditRolllNum] = useState(count.rollNumber)
    const [editSection,setEditSection] = useState(count.section)
    const [editSubject,setEditSubject] = useState(count.subject)
    const [editFeePaid,setEditFeePaid,] = useState(count.feePaid)


    const addOne = (target:any)=>{
        console.log(target);
        let clone = [...addUser]
    clone.splice(num,1,target)  
    setAddUser([...clone])      
}
      

      const submit = (e:any)=>{
        e.preventDefault()
      let user ={
        studentName: editName,
                    fatherName: editFatherName,
                    rollNumber: editRollNum,
                    section: editSection,
                    subject: editSubject,
                    feePaid: editFeePaid

}
addOne(user)
setEditName('')
setEditFatherName('')
setEditRolllNum('')
setEditSection('')
setEditSubject('')
setEditFeePaid('')
}
         
//  const home = ()=>{
//      router.push('/')
//  }
const back = ()=>{
        router.push('/')
    }
    return(
        <>
           <button onClick={back}>Home</button>        
        <form onSubmit={submit}>
         StudentName
        <label htmlFor=""></label>
        <input type="text" 
        value={editName}
        onChange={(e)=>{setEditName(e.target.value)}}
        />
<br />
  FatherName
         <label htmlFor="fathername"></label>
         <input type="text" 
         value={editFatherName}
        onChange={(e)=>{setEditFatherName(e.target.value)}}
         /> 

 
 RollNumber
         <label htmlFor="rollNum"></label>
         <input type="text" 
        value={editRollNum}
        onChange={(e)=>{setEditRolllNum(e.target.value)}}
        />




subject
        <label htmlFor="class"></label>
        <input style={{width: '150px'}} type="text" 
        value={editSubject}
        onChange={(e)=>{setEditSubject(e.target.value)}}
        /> 

        
Section
        <label htmlFor="class"></label>
        <input type="text" 
        value={editSection}
        onChange={(e)=>{setEditSection(e.target.value)}}
        /> 

fees
        <label htmlFor="class"></label>
        <input style={{width: '280px',height: "25px",margin: '10px'}} type="text" 
        value={editFeePaid}
        onChange={(e)=>{setEditFeePaid(e.target.value)}}
        /> 
        <br />
<button type ='submit'>Save</button>
  
</form>
        
        </>
    )
}