import React from "react";

const AuthContexto = React.createContext();

function AuthProvider({children}){
    const [user, setUser]=React.useState(null);
    const auth={
        user
    }
    return(
        <AuthContexto.Provider
        value={{
            auth
        }}
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