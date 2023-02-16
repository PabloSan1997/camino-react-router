import React from "react";

function LogoutPage(){
    const loggout=(e)=>{
        e.preventDefault();
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