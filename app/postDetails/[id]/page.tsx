"use client"

import { Intro } from '@/components'
import React,{ useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const PostDetails = () => {
    const [posts, setPosts] = useState(null)
    const searchParams = useSearchParams()

    const id = searchParams.get('id')

    console.log(id)

    useEffect(() => {
        const fetchPrompts = async () => {
          const res = await fetch(`/api/post/${id}`)
          const data = await res.json()
    
          setPosts(data)
        }   
        
        fetchPrompts()
    }, [])
  return (
    <>
        <Intro 
            category="👋 Hello"
            bgColor='bg-[#27374D]'
            categoryClasses=''
        />
    </>
  )
}

export default PostDetails