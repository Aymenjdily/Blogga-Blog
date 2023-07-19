"use client"

import { createContext, useState, useEffect } from "react";

export const PostContext = createContext()

export const PostContextProvider = ({ children }) => {
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await fetch('/api/post')
          const data = await res.json()
    
          setPosts(data)
          if(res.ok){
            setLoading(false)
          }
        }
    
        fetchPosts()
    }, [])
    
    return(
        <PostContext.Provider value={{posts, loading}}>
            {children}
        </PostContext.Provider>
    )
}