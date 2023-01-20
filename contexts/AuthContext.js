import React, {createContext, useState} from "react";

export const AuthContext = createContext();

function AuthProvider({children, initialLoggedInUser}){
    const [loggedInUser, setLoggedInUser] = useState();
    return (
        <AuthContext.Provider value={{loggedInUser, setLoggedInUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider};