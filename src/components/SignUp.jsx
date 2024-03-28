import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import './SignUpcss.css'
const SignUp = () => {
    const [name,SetName]=useState('')
    const [email,SetEmail]=useState('')
    const [password,SetPassword]=useState('')
    const user=useSelector((state)=>state.userDetails)
    const isAuthenticate=useSelector((state)=>state.isAuthenticate)

    function HandleSubmit(e){
        e.preventDefault()
        if(isAuthenticate){

        }
    }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e)=>SetName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e)=>SetEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=>SetPassword(e.target.value)}
            required
          />
        </div>
        <button 
           onClick={HandleSubmit}
        type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
