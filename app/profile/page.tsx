"use client"

import { Intro, PostCard } from '@/components'
import React,{ useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useUserPost } from '@/hooks/useUserPosts'

const Profile = () => {
    const { data:session } = useSession()
    const { posts, setPosts } = useUserPost()

    useEffect(() => {
        const fetchPosts = async () => {
            // @ts-ignore
            const res = await fetch(`/api/users/${session?.user.id}/posts`)
            const data = await res.json()
            setPosts(data)
        }   
          
        if(session) {fetchPosts()}
    }, [])


    return (
        <>
            <Intro
                category="👋 Hello"
                bgColor='bg-[#27374D]'
                username={`${session?.user?.name}`}
                categoryClasses=''
            />
            <section className='container mx-auto py-16 md:px-0 px-4'>
                <h1 className='font-extrabold text-3xl mb-10 underline'>
                    Your Last Posts
                </h1>
                <div className='grid lg:grid-cols-2 gap-20 mb-20'>
                    {
                        posts && posts.map((post:any) => (
                            <PostCard
                                key={post._id}
                                post={post}
                                isDeleted={true}
                                handleDelete={() => {}}
                            />
                        ))
                    }
                </div>
                <h1 className='font-extrabold text-3xl mb-10 underline'>
                    Your Shared Books
                </h1>
            </section>
        </>
    )
}

export default Profile
