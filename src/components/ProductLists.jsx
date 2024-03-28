import './ProductListsCss.css'
import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import Card from "./card";
function ProductList(){
   const product=useSelector((state)=>state.product)
   const [Items,setItems]=useState(product)
   function HandleSelect(e){
    e.preventDefault()
    const type=e.target.value
    console.log(type)
    if (type === "sortbyincreasing" && Items) {
        const newProduct = [...Items]; // Create a copy of the array
        newProduct.sort((a, b) => parseInt(a.price) - parseInt(b.price));
        setItems(newProduct);
    }else if(type==="sortbyDecreasing"){
        const newProduct = [...Items]; // Create a copy of the array
        newProduct.sort((a, b) => parseInt(b.price) - parseInt(a.price));
        setItems(newProduct)
    }
}

    return (
        <>
      <select name="" id=""
         onChange={HandleSelect}
      >
      <option value="Defaultcase">Default case</option>
      <option value="sortbyincreasing">sort by increasing</option>
      <option value="sortbyDecreasing">sort by Decreasing</option>
      </select>
      <div className="container-Items">
      {
       Items.map((pro)=>{
           return <Card id={pro.id} name={pro.name} price={pro.price} image={pro.image} key={pro.id}></Card>
        })
      }
      </div>
     </>
    )
}

export default ProductList