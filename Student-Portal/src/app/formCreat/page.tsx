"use client"

import Link from "next/link"
import { useState } from "react"

export default function UserInfo({addOne}: any){

    const [studentName,SetStudentName] = useState('')
    const [fathername,SetFatherName] = useState('')
    const [rollNumber,setRollNumber] = useState('')
    const [subject,setSubject,] = useState('')
    const [section,setSection,] = useState('')
    const [feePaid,setFeePaid,] = useState('')
    const [course,setCourse,] = useState('')





      const submit = (e:any)=>{
        e.preventDefault()
      let user ={
        id: `%20%7B${studentName}%7D%20%7B${rollNumber}%7D%20%7B${subject}%7D%20%7B${section}%7D`,
       studentName: studentName,
       fatherName: fathername,
       rollNumber: rollNumber,
       subject: subject,
       section: section,
       feePaid: feePaid,
courseDuration: course

}
addOne(user)
    SetStudentName('')
    SetFatherName('')
    setRollNumber('')
    setSubject('')
    setSection('')
  setFeePaid('')
  setCourse('')
    }
    return(
        <>

        <div style={{border: '1px solid black',display: 'block' }} className="mi">
        <form onSubmit={submit} >
        StudentName
        <label htmlFor="studentName" >
        <input style={{width: '280px',height: "25px"}} type="text" 
        value={studentName}
        onChange={(e)=>{SetStudentName(e.target.value)}}
        />
        </label>
<br />
 FatherName
        <label htmlFor="fathername"></label>
        <input style={{width: '280px',height: "25px",margin: '10px'}} type="text" 
        value={fathername}
        onChange={(e)=>{SetFatherName(e.target.value)}}
        /> 

 <br />
RollNumber
        <label htmlFor="rollNum"></label>
        <input style={{width: '280px',height: "25px",margin: '10px'}} type="text" 
        value={rollNumber}
        onChange={(e)=>{setRollNumber(e.target.value)}}
        />

<br />


subject
        <label htmlFor="class"></label>
        <input style={{width: '280px',height: "25px",margin: '10px'}} type="text" 
        value={subject}
        onChange={(e)=>{setSubject(e.target.value)}}
        /> 
 <br />
        
Section
        <label htmlFor="class"></label>
        <input style={{width: '280px',height: "25px",margin: '10px'}}type="text" 
        value={section}
        onChange={(e)=>{setSection(e.target.value)}}
        /> 

<br />
fees
        <label htmlFor="class"></label>
        <input style={{width: '280px',height: "25px",margin: '10px'}} type="text" 
        value={feePaid}
        onChange={(e)=>{setFeePaid(e.target.value)}}
        /> 
        <br />
        course Duration
        <label htmlFor="class"></label>
        <input style={{width: '280px',height: "25px",margin: '10px'}} type="text" 
        value={course}
        onChange={(e)=>{setCourse(e.target.value)}}
        /> 
        
<button type ='submit'>Save</button>
  
 </form> 

 </div>

 



        
        </>

 )   
}


