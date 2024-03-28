import React from "react";
import './CardDetailscss.css'
import { useDispatch,useSelector } from "react-redux";
import { storeAction } from "../Store/storeSlice";
import { useParams } from "react-router-dom";
function CardDetails(){  
    const { id } = useParams();
    console.log(id)
    const dispatch=useDispatch()
    const product=useSelector((state)=>state.product)
    console.log(product)
    let pro=product.filter((item)=>item.id===id)
    console.log(pro)
   function onAddToCart(e){
    e.preventDefault()
       dispatch(storeAction.addTocard(id))
   }

    return(
        <div className="product-card">
      <div className="product-details">
        <div className="product-image">
          <img src={pro[0].image} alt={pro[0].name} />
        </div>
        <h2 className="product-name">{pro[0].name}</h2>
        <p className="product-price">{pro[0].price}</p>
        <p className="product-about">{pro[0].about}</p>
      </div>
      <button className="add-to-cart-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
    )
}

export default CardDetails