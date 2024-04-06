import React ,{useContext}from 'react'
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const {currentUser,logout} =useContext(AuthContext)
  return (
    <div>
        <ul>
        <li>home</li>
         <li>blog</li>
         <li>{currentUser?.username}</li>
         {currentUser?<span onClick={logout}>Logout</span>:<Link to="/login">Login</Link>}
        </ul>
      
    </div>
  )
}
