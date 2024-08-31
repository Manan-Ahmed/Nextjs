"use client"

export default  async function  GetAllProducts(){

    try{
   const products = await fetch(' https://api.escuelajs.co/api/v1/products').then
           ((res)=>res.json())
    return products
        }
    catch(error){
        console.log('products not found');
        
    }
}

