"use client"

import { usePost } from '@/hooks/usePost'
import React from 'react'
import PostCard from './PostCard'

const DailyUpdates = () => {
    const { posts } = usePost()

    const filteredPosts = posts && posts.filter((post:any) => post.category=="Daily Updates")
    
    return (
        <section className='container mx-auto py-24 md:px-0 px-5'>
            <h1
                className='font-extrabold text-4xl text-[#27374D]'
            >
                Weekly Updates
            </h1>

            <div className='flex flex-col space-y-[80px] my-10'>
                { filteredPosts && filteredPosts.slice(0, 3).map((post: any) => (
                    <PostCard 
                     post={post}
                     key={post._id}
                    />
                ))}
            </div>
        </section>
    )
}

export default DailyUpdates