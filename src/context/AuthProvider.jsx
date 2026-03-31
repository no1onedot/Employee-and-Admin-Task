import React, { createContext, useState , useEffect} from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage';
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const existing = localStorage.getItem("employees", "admins");
    if(!existing){
        setLocalStorage();
    }
    const [userData, setUserData] = useState(null);
    useEffect(() => {
     const{employees,admins} = getLocalStorage();
    setUserData({employees,admins})
    
    }, [])
    
    return (
        <AuthContext.Provider value={{userData, setUserData}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider