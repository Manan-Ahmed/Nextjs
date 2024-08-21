// "use client"
// import { useRouter } from "next/router"
// import { useEffect } from "react"

// const isAuthenticate = false
// export default function About(){

//     const router = useRouter()
//     useEffect(()=>{
//         if(isAuthenticate){
//             console.log('this is about page');
            
//         }
//         else{
//             router.push('/')
//         }
//     },[])
   
//     return(
//         <>

//            <h2>this is about page</h2>
        
           
//         </>
//     )
// }




"use client"


export default function About() {
   
    return (
        <>
           <h1>This is About page</h1>
        </>
    )
}