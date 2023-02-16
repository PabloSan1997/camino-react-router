import React from "react";
import { useAuth } from "./auth.js";

function LoginPage(){
    const [userName, setUserName]=React.useState('');
    const auth = useAuth();
    const loggin=(e)=>{
        e.preventDefault();
        auth.login({userName});
    }
    return (
       <>
       <h1>Login</h1>
       <form onSubmit={loggin}>
        <label>Escribe tu nombre de usuario:</label>
        <input className="entrada" onChange={(event)=>setUserName(event.target.value)} value={userName}/>
        <button type="submit">Entrar</button>
       </form>
       </>
    );   
}
export{LoginPage}