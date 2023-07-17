import React from 'react'
import Image from 'next/image'

const PostCard = ({
    post
}: any) => {
    const { title, category, description, image, createdAt} = post

  return (
    <div className='flex md:flex-row flex-col'>
        <div className='flex-1'>
            <div className='flex gap-5 items-center flex-row'>
                <span className='text-[#27374D] bg-blue-100/80 text-sm font-bold px-4 py-1 rounded-lg uppercase'>
                    {category}
                </span>
                <span className='text-[#27374D] text-sm font-bold py-1 rounded-lg uppercase'>
                    {new Date(createdAt).toDateString()}
                </span>
            </div>
            <h1 className='my-5 font-bold text-3xl'>
                {title}
            </h1>
            <p className='text-gray-600'>
                {description}
            </p>
        </div>
        <div className='flex-1'>
            <Image
                src={image}
                width={400}
                height={400}
                alt={title}
                className='object-contain flex md:float-right float-none rounded-xl'
            />
        </div>
    </div>
  )
}

export default PostCard