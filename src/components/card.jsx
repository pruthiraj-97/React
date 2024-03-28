import React from "react";
import './Card.css'
import { useSelector,useDispatch } from "react-redux";
import {storeAction} from "../Store/storeSlice"
import { Link,useNavigate } from "react-router-dom";
function Card({id,price,name,image}){
    const dispatch=useDispatch();
    const myCard=useSelector((state)=>state.cards)
    const navigate = useNavigate()
    function HandleAddToCard(e){
       e.preventDefault();
       dispatch(storeAction.addTocard(id))
       console.log(myCard)
    }

    function HandleClick(e){
        e.preventDefault();
        // important
        navigate(`/cardDetails/${id}`)
    }
      
    return (
        <div className="card"
           onClick={HandleClick}
        >
        <img src={image} alt="Product Image"/>
        <div className="card-body">
            <div className="product-name">{name}</div>
            <div className="product-price">{price}</div>
        </div>
        <button
          onClick={HandleAddToCard}
        >Card</button>
        <br />
    </div>
    )
}

export default Card