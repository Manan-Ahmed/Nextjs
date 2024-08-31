"use client"

import { useEffect, useState } from "react"
import UserContext from "./user-Context"
import { useFormStatus } from "react-dom"

const users: any = [
    {
        id: "%20%7BAnus%7D%20%7B202344%7D%20%7BWeb-App-Dev%7D%20%7BG%7D",
        studentName: "Anus",
        fatherName: 'yonous',
        rollNumber: 202344,
        section: "G",
        feePaid: 'paid',
        courseDuration:'1 year',

        subject: "Web-App-Dev"
    },
    {
        id:'%20%7BOwais%7D%20%7B121123%7D%20%7BFluter-app-Dev%7D%20%7BG%7D',
        studentName: "Owais",
        fatherName: 'saleem',

        rollNumber: 121123,
        section: "G",
        feePaid: 'paid',
        courseDuration:'6 Month',

        subject: "Fluter-app-Dev"
    },
    {
        id:   "%20%7BManan%7D%20%7B907489%7D%20%7BAI-chatbot%7D%20%7BF%7D",
        studentName: "Manan",
        fatherName: 'Arif',
        rollNumber: 907489,
        section: "F",
        feePaid: 'paid',
        courseDuration:'6 Month',
        subject: "AI-chatbot"
    }
]

export default function UserProvider({ children }: { children: React.ReactNode }) {
    const [addUser, setAddUser] = useState<any>(users)
    let [status, setStatus] = useState(true)
    const [checkAuth, setCheckisAuth] = useState(false)
    const [num,setNum] = useState(null)
    const [editIndex,setEditIndex] = useState()
    return (
        <UserContext.Provider value={{ addUser, setAddUser,checkAuth, setCheckisAuth,status, setStatus,num,setNum,editIndex,setEditIndex }}>
            {children}
        </UserContext.Provider>
    )
}


// "use client"

// import { useEffect, useState } from "react"
// import UserContext from "./user-Context"

// const users: any = [
//     {
//         id: "%7BAnus%7D%20%7B202344%7D%20%7BWeb-App-Dev%7D%20%7BG%7D",
//         name: "Anus",
//         rollNumber: 202344,
//         section: "G",
//         subject: "Web-App-Dev"
//     },
//     {
//         id: "%7BOwais%7D%20%7B12112%7D%20%7BFluter-app-Dev%7D%20%7BG%7D",
//         name: "Owais",
//         rollNumber: 12112,
//         section: "G",
//         subject: "Fluter-app-Dev"
//     },
//     {
//         id: "%7BManan%7D%20%7B333302%7D%20%7BAI-chatbot%7D%20%7BF%7D",
//         name: "Manan",
//         rollNumber: 333302,
//         section: "F",
//         subject: "AI-chatbot"
//     }
// ]

// export default function UserProvider({ children }: { children: React.ReactNode }) {
//     const [addUser, setAddUser] = useState<any>(users)
//     let [status, setStatus] = useState(true)
//     const [checkAuth, setCheckisAuth] = useState(false)
//     return (
//         <UserContext.Provider value={{ addUser, setAddUser, status, setStatus, checkAuth, setCheckisAuth }}>
//             {children}
//         </UserContext.Provider>
//     )
// }