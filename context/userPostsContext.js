"use client"

import { createContext, useState, useEffect } from "react";
import { useSession } from 'next-auth/react'

export const UserPostContext = createContext()

export const UserPostContextProvider = ({ children }) => {
    const [posts, setPosts] = useState(null)
    const {data:session} = useSession()

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(`/api/users/${session?.user.id}/posts`)
            const data = await res.json()
      
            setPosts(data)
          }   
          
          fetchPosts()
    }, [])
    
    return(
        <UserPostContext.Provider value={{posts}}>
            {children}
        </UserPostContext.Provider>
    )
}