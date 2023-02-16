import React from "react";
import { useNavigate } from "react-router-dom";

const AuthContexto = React.createContext();

function AuthProvider({children}){
    const [user, setUser]=React.useState(null);
    const navegar = useNavigate(); 
    const login=({userName})=>{
        setUser({userName});
        navegar('/profile');
    }
    const logout = () =>{
        setUser(null);
        navegar('/');
    }
    const auth={
        user,
        login,
        logout
    }
    return(
        <AuthContexto.Provider
        value={
            auth
        }
        >
            {children}
        </AuthContexto.Provider>
    );
}

function useAuth(){
    const auth = React.useContext(AuthContexto);
    return auth;
}
export{AuthProvider, useAuth}