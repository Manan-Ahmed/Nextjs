"use client"
type StudentListType = {
    name: string,
    rollNum: number,
    feePaid: boolean
}


export default function StudentList({name,rollNum,feePaid}:StudentListType){
    return(
        <>
        <div style={{backgroundColor:  "pink"}}>
        <h2>{name}</h2>
        <h3>{rollNum}</h3>
        
        {
            feePaid? 
            <p>your fee is paid</p>
            : <p style={{color: '#ff0000'}}>please clear your dues</p>
        }
        </div>
        </>
    )
}