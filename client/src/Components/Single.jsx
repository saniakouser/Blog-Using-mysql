import React,{useEffect, useState,useContext} from 'react';
import Delete from "../img/delete (1).png";
import edit from "../img/edit.png"
import { Link,useLocation } from 'react-router-dom';
import Menu from './Menu';
import axios from "axios";
import moment from "moment"
import { AuthContext } from '../context/authContext';


export default function Single() {
 
    
  const [post,setPost]=useState({});
  const location= useLocation();
  const postId= location.pathname.split("/")[2];
  const{currentUser}= useContext(AuthContext);
  useEffect(()=>{
    const fetchData=async()=>{
      try{
       const res=await axios.get(`/post/${postId}`);
        setPost(res.data);
      }
      catch(err){
          console.log(err);
      }
    }
    fetchData();
  })
  return (
    <div className="single">
    <div className="content">
      <img src={post?.img} alt="" /> 
      <div className="user">
         <img src={edit} alt="" />
        <div className="info">
          <span>{post?.username}</span>
          <p>Posted {moment(post.date).fromNow()}</p>
        </div>
        {currentUser.username==post.username&&<div className="edit">
          <Link to={`/write?edit=2`}>
            <img src={edit} alt="" /> 
          </Link>
          <img src={Delete} alt="" /> 
        </div>}
         <h1>{post.title}</h1>
         <p>{post.desc
         }</p>
      </div>
      <div className="menu">
      </div>
    </div>
    <Menu/>
  </div>
  
  );
};

