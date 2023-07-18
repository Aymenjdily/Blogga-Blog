"use client"

import { Button, Intro, PostCard } from '@/components'
import { usePost } from '@/hooks/usePost'
import React,{ useState } from 'react'

const DailyUpdates = () => {
  const { posts } = usePost()
  const [number, setNumber] = useState(2)
  const filteredPosts = posts && posts.filter((post:any) => post.category=="Daily Updates")
  
  return (
    <>
        <Intro 
            category="Daily Updates"
            bgColor='bg-[#635985]'
            categoryClasses="border border-white w-[150px] rounded-lg flex items-center justify-center px-2 py-1"
        />

      <section className='container mx-auto py-24 md:px-0 px-5'>
          <h1
              className='font-extrabold text-4xl text-[#27374D]'
          >
              Weekly Updates
          </h1>

          <div className='flex flex-col space-y-[80px] my-10'>
              { filteredPosts && filteredPosts.slice(0, number).map((post: any) => (
                  <PostCard 
                  post={post}
                  key={post._id}
                  />
              ))}
          </div>

          <div className='flex items-center mt-32 justify-center w-full'>
            {
              filteredPosts && filteredPosts.length >= number && (
                <Button
                  number={number}
                  setNumber={setNumber}
                  bgColor='bg-[#635985]/30'
                />
              )
            }
          </div>
      </section>
    </>
  )
}

export default DailyUpdates