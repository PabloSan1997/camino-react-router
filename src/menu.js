import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Menu() {
  const auth = useAuth();


  return (
    <nav>
      <ul>
       {routes.map(elemento=>{
        if(elemento.publicOnly && !!auth.user) return null;
        if(elemento.private && !auth.user) return null;
        return (
          <li key={elemento.text}>
            <NavLink
            to={elemento.to}
            style={({ isActive }) => ({ color: isActive ? "blue" : "red" })}
            >{elemento.text}</NavLink>
        </li>
        );
      })}
      </ul>
    </nav>
  );
}

const routes = [];
routes.push({
    to:'/',
    text:"home",
    private:false
});
routes.push({
    to:'/blog',
    text:"Blog",
    private:false
});
routes.push({
    to:'/profile',
    text:"Profile",
    private:true
});
routes.push({
  to:'/login',
  text:"Login",
  private:false,
  publicOnly:true
});
routes.push({
  to:'/logout',
  text:"LogOut",
  private:true
});
export { Menu };
