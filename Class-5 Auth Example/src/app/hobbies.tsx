
// type hobbyType = {
//     hobbies?: string[]
// }


type hobbyType = {
    hobbies?:string[]
}
export default function Hobbies({hobbies}:hobbyType){

    return(
        <ul>
            <h2>Hobbies</h2>
            {
                hobbies?.map((hobby,index)=>(
             <li key={hobby + index}>{hobby}</li>
                ))
            }


          
        </ul>
    )






}

// export default function Hobbies({hobbies}:hobbyType){
// console.log(hobbies)
// return(
//     <ul>
//         {
//             hobbies?.map((hobby,i)=>(
//                 <li>{hobby}</li>
//             )

//             )
//         }
//     </ul>
   
// )
// }



