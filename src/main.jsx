import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { Provider } from 'react-redux'
import {store} from './Store/store.js'
import AllProducts  from './components/Allproduct.jsx'
import MyCard from './components/MyCard.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import CardDetails from './components/CardDetails.jsx'
import ProductList from './components/ProductLists.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Layout/>}>
           <Route path='' element={<AllProducts/>}/>
           <Route path='addtoCard' element ={<MyCard/>}/>
           <Route path='About' element={<About/>}/>
           <Route path='cardDetails/:id' element={<CardDetails/>}/>
           <Route path='Contact' element={<Contact/>}/>
           <Route path='SignUp' element={<SignUp/>}/>
           <Route path='Login' element={<Login/>}/>
           <Route path='ProductList' element={<ProductList/>}/>
         </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
)
