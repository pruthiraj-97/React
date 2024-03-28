import {useSelector} from "react-redux"
import { useState } from "react";
import Card from "./card";
import './Allproduct.css'
function AllProducts(){
    let prod=useSelector((state)=>state.product)
    prod=prod.slice(0,12)

    return (
        <>
         <div className="container">
       {
        prod.map((pro)=>{
            return <Card id={pro.id} name={pro.name} price={pro.price} image={pro.image} key={pro.id}></Card>
         })
       }
       </div>
       
         </>
    )
}

export default AllProducts