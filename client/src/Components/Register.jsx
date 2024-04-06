import React ,{useState}from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"


export default function Register() {
    const[input,setInput]= useState({
     username:"",
      email:"",
      password:""
    });
    const[Err,Seterr]=useState(null);
    const navigate=useNavigate();
    const handleChange=e=>{
        setInput(prev=>({
            ...prev ,[e.target.name]:e.target.value
        }))
    }
    console.log(input);
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
          const res = await axios.post("/auth/register", input);
          console.log("User registered successfully:", res.data);
          navigate("/login");
      } catch (err) {
           Seterr(err);
          if (err.response) {
            Seterr(err.response.data)
              console.error("Registration error:", err.response.data);
          } else {
              console.error("Request failed:", err.message);
          }
      }
  };
  
    
  return (
    <div className='register'>
      <form action="">
      <input type="text" name="username" id="" placeholder='username' onChange={handleChange}  />
      <input type="email" name="email" id=""  placeholder='email' onChange={handleChange}/>
      <input type="password" name="password" id="" placeholder='password' onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Register</button>
      {Err&& <p>{Err.message}</p>}
      </form>
    </div>
  )
}
