import React, { createContext, useState, useContext } from "react";

const LoginContext = createContext();

export const useLoginContext = () => useContext(LoginContext);

export const LoginProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <LoginContext.Provider value={{isLogin, setIsLogin}}>
            {children}
        </LoginContext.Provider>
    )
}