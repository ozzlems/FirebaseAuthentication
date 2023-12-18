import { useEffect, useState } from "react";



export default function UseAuth(){
const[user , setUser] = useState(null);

useEffect(()=>{
 const unsub = onAuthStateChanged(auth , user=>{
    console.log("got user:" , user);
    if(user){
        setUser(user);
    }
    else{
        setUser(null);
    }
 });   
})

return {user}

}