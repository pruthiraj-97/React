import React from "react";
import { useDispatch,useSelector } from "react-redux";
import './Card.css'
import {storeAction} from "../Store/storeSlice"
function CardProduct({id,name,price,image}){
    const dispatch=useDispatch()
    function HandleRemovecard(e){
        e.preventDefault()
        dispatch(storeAction.removefromCard(id))
    }
    
    return (
        <div className="card">
        <img src={image} alt="Product Image"/>
        <div className="card-body">
            <div className="product-name">{name}</div>
            <div className="product-price">{price}</div>
        </div>
        <button
         onClick={HandleRemovecard}
        >Remove from card</button>
        </div>
    )
}
export default CardProduct