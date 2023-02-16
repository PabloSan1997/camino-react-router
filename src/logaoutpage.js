import React from "react";
import { useAuth } from "./auth";

function LogoutPage(){
    const auth = useAuth();

    const loggout=(e)=>{
        e.preventDefault();
        auth.logout();
    }
    return (
        <>
        <h1>Logout</h1>
        <form onSubmit={loggout}>
         <label>Seguro que deseas irte alv</label>
         <button type="submit">Salir</button>
        </form>
        </>
     );     
}
export{LogoutPage}