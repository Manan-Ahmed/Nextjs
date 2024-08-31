"use client"

import { useEffect, useState } from "react"
import GetAllProducts from "./utils/getProduct"
import Cards from "./component/cart"
import { json } from "stream/consumers"


export default function Home(){
  const [products,setProducts] = useState<any  >([])
  const [cartItem,setCartItem] = useState([])
  const [showCart,setShowCart] = useState<boolean>(false)
  
useEffect(()=>{
  FetchProducts()
},[])


useEffect(()=>{
setShowCart(false)
},[])


useEffect(()=>{
  console.log(cartItem);
  // const item = localStorage.getItem("cart",JSON.stringify(cartItem))
  
  },[cartItem])
  

const addHandler = (item: any)=>{
let items = [...cartItem]

const data = items.findIndex((data: { id: any })=> data.id === item.id)
// console.log(data);

if(data === -1){
 items.push(item)
 setCartItem([...items])

}
else{
  alert('cart is already selected')
}

}


const FetchProducts = async ()=>{
  const product = await GetAllProducts()
  setProducts([...product])
//  console.log(product);
           
}


  return(
    <>
    <div className="container m-auto my-10">
      <div className="fixed w-full h-[50px] top-0 bg-white flex items-center justify-center gap 20">
    <h1 className="text-center text-4xl">Shopping List</h1>
    <h1 onClick={()=>{setShowCart(!showCart)}} className="text-center text-4xl underline"> 
      
      {
        showCart ?'show list' : "cart" + cartItem.length 
        
}
</h1>
    </div>
          
           
          </div>

    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">

    {
      showCart && 
        cartItem.map((data:any)=>{
          const isAddToCart =  cartItem.findIndex((product: { id: any })=> product.id === data.id) !== -1
             return   <Cards
          
               key={data.id + data.name} 
               name={data.name} 
               id={data.id}
                title={data.title}
                 img={data.images}   
                description={data.description}
                addToCart={()=>{return addHandler(data)}}
                isAddToCart={isAddToCart}
             />
        })
       }

       {
        products.map((data:any)=>{
          const isAddToCart =  cartItem.findIndex((product: { id: any })=> product.id === data.id) !== -1
             return   <Cards
          
               key={data.id + data.name} 
               name={data.name} 
               id={data.id}
                title={data.title}
                 img={data.images}   
                 price={data.price}
                description={data.description}
                addToCart={()=>{return addHandler(data)}}
                isAddToCart={isAddToCart}
             />
        })
       }


    </div>
  </div>
</section>

    </>
  )
}