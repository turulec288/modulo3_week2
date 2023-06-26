// primera parte en el front para usar AUTH
import authService from "../services/auth.service";
import { createContext, useState } from "react";

export const TOKEN_NAME = "authToken"

export const AuthContext = createContext()

export const AuthContextWrapper = ({children})=>{
    console.log(children)
    const [user, setUser]= useState()
    const [loading, setLoading] = useState(true)


    const storeToken = (token)=>{
        // const authToken = token
        localStorage.setItem(TOKEN_NAME, token); 
    }
    const logout = ()=>{
        localStorage.removeItem(TOKEN_NAME);
    }

    const authenticate = async()=>{
        try {
            const token = localStorage.getItem(TOKEN_NAME)
            const verified = await authService.verify(token)
            setUser(verified)
            setLoading(false)
            return verified
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
    <AuthContext.Provider
        value={{loading, user, storeToken, logout, authenticate}}
    >
        {/* {{children}} */}
    </AuthContext.Provider>)
}