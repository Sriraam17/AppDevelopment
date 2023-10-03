import { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
}

export const UserProvider = ({children}) => {
    const[isUserLoggeIn, setIsUserLoggedIn] = useState(false);

    const login = () => {
        setIsUserLoggedIn(true);
    }

    const logout = () => {
        setIsUserLoggedIn(false);
    }

    const UserValue = useMemo(() => (
        {
            isUserLoggeIn,login,logout
        }
    ),[isUserLoggeIn]);

    return(
        <UserContext.Provider value={UserValue}>
            {children}
        </UserContext.Provider>
    )
}