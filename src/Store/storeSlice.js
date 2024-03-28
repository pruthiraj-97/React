import { createSlice} from "@reduxjs/toolkit";
import products from "../Store/products";
const initialState = {
    product:products,
    cards:[],
    userDetails:{
        name:"",
        email:"",
        password:"",
    },
    isAuthenticate:false
}

const storeDetails=createSlice({
    name:'Ecommerce',
    initialState,
    reducers:{
        addTocard:(store,action)=>{
            const updatedProducts = store.product.filter((pro) => pro.id === action.payload);
            store.cards.push(updatedProducts[0]);
        },
        removeProduct:(store,action)=>{
         console.log("remove")
         const updatedProducts = store.product.filter((pro) => pro.id !== action.payload);
         store.product = updatedProducts;
        },
        removefromCard:(store,action)=>{
            const updatedCards = store.cards.filter((pro) => pro.id !== action.payload);
            store.cards=updatedCards;
        },
        setUserDetails:(store,action)=>{
            store.userDetails=action.payload
        }
    }
});

export const storeAction=storeDetails.actions;
export default storeDetails