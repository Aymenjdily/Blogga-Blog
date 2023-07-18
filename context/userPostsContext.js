"use client"

import { createContext, useState, useEffect } from "react";
import { useSession } from 'next-auth/react'

export const UserPostContext = createContext()

export const UserPostContextProvider = ({ children }) => {
    const [posts, setPosts] = useState(null)

   
    
    return(
        <UserPostContext.Provider value={{posts, setPosts}}>
            {children}
        </UserPostContext.Provider>
    )
}