import React,{useState} from "react";
import UserContext from "./Usercontext";

const UserContextProvider =({children})=>{
    const [user,setUSer]= useState(null);
return(
    <UserContext.Provider value={{user,setUSer}}>
    {children}
    </UserContext.Provider>
);
}

export default UserContextProvider;