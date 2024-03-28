import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import CardProduct from "./cardProduct";
function MyCard(){
   const myCards=useSelector((state)=>state.cards)
   const [bill,setBill]=useState(null)
   console.log(myCards)

   function HandleBill(e){
      e.preventDefault()
      let sum=0;
      myCards.forEach((Item) => {
         sum=sum+parseInt(Item.price)
      });
      setBill(sum)
   }
   
   if(myCards.length==0){
    return (
        <>
        <h1>Cart is Empty</h1>
        </>
    )
   }
    return (
        <>
          <button
             onClick={HandleBill}
          >bill</button>

         {
            bill!=null&&<h1>Your total bill is {bill}</h1>
         }

          {
            myCards.map((c)=>{
                return <CardProduct id={c.id} name={c.name} price={c.price} image={c.image} key={c.id}></CardProduct>
            })
          }
        </>
    )
}

export default MyCard   