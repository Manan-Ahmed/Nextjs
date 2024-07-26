
import React, { useState } from 'react'
import Navbar from './navbar.jsx'
// const { v4: uuidv4 } = require('uuid');
export default function App() {
    const [todo, settodo] = useState("")
    const [todos, settodos] = useState([])


    function handleAdd() {
    settodos([...todos, { todo, isComplete: false }]);
    settodo("");
    console.log(todos);
  }
    
const handleChange = (e)=>{
  settodo(e.target.value)
}

const handleCheckBox = (e)=>{
  let id = e.target.name

  let index = todos.findIndex(item=>{
        return item.id === id;
})
let newTodo = todos
newTodo[index].isComplete = !newTodo[index].isComplete
settodos(newTodo) 
console.log(newTodo)
}

//     const handleEdit = ()=>{

//     }
    
const handleDelete = (index)=>{
    todos.splice(index,1)
    // newTodo()
}


  return (
     <>
     
     <Navbar/>
     
           <div className='container'>
            <div className='addtodo'>
<h1>your todos</h1>  
<input onChange={handleChange} value={todo} type="text" name="" id='' />  
<button onClick={handleAdd}>submit</button>   
     </div>

      <div className='todos'>
    
    {todos.map((item,index)=>{
          return <>
          <div key={item.todo}>
            <input name={index} onChange={handleCheckBox} type="checkbox" value={todo.isComplete}/>
            <div className= {item.isComplete}>{item.todo}
          <span>
            <button>edit</button>
            <button onClick={()=>{handleDelete(index)}}>delete</button>

          </span>
          </div>
          </div>

          </>
        })}

    <div className='todo'>
              {/* <div className='text'>{}</div> */}
                 {/* <div className='button'>
                  <button onClick={handleEdit}>edit</button>
                  <button onClick={handleDelete}>delete</button>
                  </div> */}
                 </div>
                  </div>


{/* </div> */}

     </div> 

     </>
     )

  

}







































// // import { useState } from "react"

// import { useState } from "react";

// export default function App(){

//   const [text , setText] = useState("")
// const [todo , setTodo] = useState([])

//   function addTodo(event){
//     event.preventDefault()
//     // console.log(text)
//     // todo.push(text)
//     setTodo([...todo , text])
//     console.log(todo)
//   setText('')
    
//   }

//      function deletTodo(index){
//       todo.splice(index,1)
//       console.log(todo[index])
//      }

//     //  function updateTodo(i){
        
//     // }
//   return(
//     <>
//     <h1>Todo App</h1>
//     <form onSubmit={addTodo}>
//     <input type="text" name="" id="" 
//     onChange={(e) => setText(e.target.value)}
//        value={text} />
//     <button type="submit">addtodo</button>
//     </form>
  
//    <ul>
//        {todo.map((item,index)=>{
//                 return   <li key={index}>{item}
//                 <button onClick={()=>updateTodo(index)}>edit</button>
//                 <button onClick={()=>deletTodo(index)}>delete</button>
                
//                 </li>
//        })}
              
//    </ul>

   
      

//     </>

//      )
// }





// // export default function Counter(){
// //     const [count, setcount] = useState(0)


// //       const increament = ()=>{
// //           setcount(count + 1)
// //       }

        

// //       const decreament = ()=>{
// //         setcount(count - 1)
// //     }

// //       return(
// //          <>

// //          <div>
// //           <h1>counter app</h1>
// //           <p>{count}</p>
// //  <button onClick={increament}>+</button>
// //  <button onClick={decreament}>-</button>

// // </div>

// // </>
// //       )



// // }




