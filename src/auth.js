import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContexto = React.createContext();
const adminList=['Juan', 'Paco', 'Sanchez'];
function AuthProvider({children}){
    const [user, setUser]=React.useState(null);
    const navegar = useNavigate(); 
    const login=({userName})=>{
        const isAdmin = adminList.find(admin=>admin===userName);
        setUser({userName, isAdmin});
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

function ProtectAutth(props){
    const auth = useAuth();

    if (!auth.user) {
      return <Navigate to="/login" />;
    }
  
    return props.children;
    
}
export{AuthProvider, useAuth, ProtectAutth}