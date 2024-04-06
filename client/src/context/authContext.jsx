import { useEffect, useState} from "react";
import { createContext } from "react";
import axios from "axios"
export const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
    const[currentUser,SetCurrentUser]=useState(JSON.parse(localStorage.getItem("user")||null));
    const login=async(input)=>{
        const res= await axios.post("/auth/login",input);
        SetCurrentUser(res.data);
    };
    const logout=async(input)=>{
        await axios.post("/auth/logout");
        SetCurrentUser(null);
    }
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser]);
    return(
        <AuthContext.Provider value={{currentUser,login,logout}} >
            {children}
        </AuthContext.Provider>
    );

}
