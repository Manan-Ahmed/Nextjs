

"use client"
import UserContext from '@/context/user-Context';
// import './globals.css'
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import Info from '../handler';
import Navbar from '../navbar';

export default function StudentList() {
   const { addUser, checkAuth, setCheckisAuth,setNum }: any = useContext(UserContext);
   console.log(addUser);
   const router = useRouter()
   const changePath = () => {
      setCheckisAuth(!checkAuth)
      
      
   }
      const delet = (ind: any)=>{
    console.log(ind.parentNode.parentNode.parentNode);
    const prnt = ind.parentNode.parentNode.parentNode
    const trg = ind.parentNode.parentNode
    
    prnt.removeChild(trg)
  }

  const edit = (ind: any)=>{
console.log(ind);
setNum(ind)
router.push('./editForm')

  }
   return (
      <>
   
     
<Navbar onchang={changePath}/>
 
<h1 style={{textAlign: 'center'}}>Student Portal</h1>

    {/* <div onClick={changePath} className="card col-3 mx-2 text-center" style={{ width: "18rem", height: "14rem", cursor: "pointer" }}>
                   <button>AddStudent</button>
               </div> */}
              
        
               <div className='hide' style={{display: checkAuth? 'none' : "block"}}>
               <table style={{border: '1px solid black',display:"block",margin: "auto",backgroundColor: 'black',color: 'white'}}>
        <thead >
            <th style={{width: '250px', padding: '15px',fontSize: '25px',fontFamily: "sans-serif"}}>StudentName</th>
            <th style={{width: '250px', padding: '15px',fontSize: '25px'}}>RollNumber</th>
            <th style={{width: '250px', padding: '15px',fontSize: '25px'}}>Section</th>
            <th style={{width: '250px', padding: '15px',fontSize: '25px'}}>FeeeStatus</th>

<th style={{width: '230px', padding: '10px',fontSize: '25px'}}>Action</th>
          </thead>
          </table>
         {
             
            addUser.map((user: any,ind:any) => (
               <>
                       <table style={{border: '1px solid black',display:"block",margin: "auto",backgroundColor: 'black',color: 'white'}}>
<tbody >
                             <tr key={user.id} >
                                  <td style={{width: '250px', padding: '15px',textAlign: "center",fontSize: "20px",fontFamily: "sans-serif"}}>{user.studentName}</td>
                                <td style={{width: '250px', padding: '15px',textAlign: "center",fontSize: "20px",fontFamily: "sans-serif"}}>{user.rollNumber}</td>
                             <td style={{width: '250px', padding: '15px',textAlign: "center",fontSize: "20px",fontFamily: "sans-serif"}}>{user.section}</td>
                             <td style={{width: '250px', padding: '15px',textAlign: "center",fontSize: "20px",fontFamily: "sans-serif"}}>{user.feePaid}</td>
      
                             <td style={{width: '250px', padding: '15px',textAlign:"center", 
               
                             }}><button onClick={(e) => {edit (ind) }}  style={{width: '70px',borderRadius: "10px", backgroundColor: 'white', color: "black", cursor: 'pointer'}}>edit</button>

                                <button onClick={(e) => { delet(e.target); } } style={{width: '70px',margin: '5px',borderRadius: "10px", backgroundColor: 'white', color: "black", cursor: 'pointer'}}>delete</button>
                               <Link href={`/ {${user.studentName}} {${user.rollNumber}} {${user.subject}} {${user.section}}`}><button style={{width: '100px',borderRadius: "10px", backgroundColor: 'white', color: "black", cursor: 'pointer'}}> see details</button></Link></td>
                             </tr>
                             </tbody>
                             </table>
                               </>
                              
              
              
            ))
         }

         {
     
          
            
         
         }
      </div>
         {checkAuth ? <Info /> : ""} 
      </>
   )
}