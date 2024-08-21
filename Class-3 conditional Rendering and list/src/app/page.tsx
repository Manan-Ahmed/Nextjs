"use client"

import Counter from "./Counter";
import StudentList from "./StudentList";


export default function Home(){

const students = [
  {
    name: 'ali',
    rollNum: 2643,
    feePaid: true,
  },
  {
    name: 'haider',
    rollNum: 1643,
    feePaid: true,
  },
  {
    name: 'hammad',
    rollNum: 3643,
    feePaid: false,
  },
]

  return(
    <>
    {
        students.forEach(({name,rollNum,feePaid})=>{
             console.log(name);
             
          <StudentList name={name} rollNum={rollNum} feePaid={feePaid}/>
        })
       }
    <Counter
     count={1}
     message="welcome"
     />
     
    </>
  )
}
















