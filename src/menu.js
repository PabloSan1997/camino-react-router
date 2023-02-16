import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        {/* <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/blog">Blog</Link>
        </li>
        <li>
            <Link to="profile">Profile</Link>
        </li> */}

        {/* <li>
          <NavLink
            to="home"
            style={({ isActive }) => ({ color: isActive ? "blue" : "red" })}
          >
            Home
          </NavLink>
        </li>
        <li>
        <NavLink
          to="blog"
          style={({ isActive }) => ({ color: isActive ? "blue" : "red" })}
        >
          blog
        </NavLink>
        </li>
       <li>
       <NavLink
          to="profile"
          style={({ isActive }) => ({ color: isActive ? "blue" : "red" })}
        >
          profile
        </NavLink>
       </li> */}
       {routes.map(elemento=>(
        <li key={elemento.text}>
            <NavLink
            to={elemento.to}
            style={({ isActive }) => ({ color: isActive ? "blue" : "red" })}
            >{elemento.text}</NavLink>
        </li>
       ))}
      </ul>
    </nav>
  );
}

const routes = [];
routes.push({
    to:'/',
    text:"home"
});
routes.push({
    to:'/blog',
    text:"Blog"
});
routes.push({
    to:'/profile',
    text:"Profile"
});
routes.push({
  to:'/login',
  text:"Login"
});
routes.push({
  to:'/logout',
  text:"LogOut"
});
export { Menu };
