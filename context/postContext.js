"use client"

import { createContext, useState, useEffect } from "react";

export const PostContext = createContext()

export const PostContextProvider = ({ children }) => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await fetch('/api/post')
          const data = await res.json()
    
          setPosts(data)
        }
    
        fetchPosts()
    }, [])
    
    return(
        <PostContext.Provider value={{posts}}>
            {children}
        </PostContext.Provider>
    )
}