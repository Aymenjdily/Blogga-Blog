import React from 'react'
import Image from 'next/image'

const PostCard = ({
    post
}: any) => {
  return (
    <div className='flex md:flex-row flex-col'>
        <div className='flex-1'>
            <div className='flex gap-5 items-center flex-row'>
                <span className='text-[#27374D] bg-blue-100/80 text-sm font-bold px-4 py-1 rounded-lg uppercase'>
                    {post.category}
                </span>
                <span className='text-[#27374D] text-sm font-bold px-4 py-1 rounded-lg uppercase'>
                    {(post.createdAt)}
                </span>
            </div>
        </div>
        <div className='flex-1 relative w-64 h-64'>
            <Image
                src={post.image}
                fill
                alt={post.title}
                className='object-contain'
            />
        </div>
    </div>
  )
}

export default PostCard