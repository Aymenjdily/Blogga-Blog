import React from 'react'
import Image from 'next/image'
import { PostCardProps } from '@/types/types'
import Link from 'next/link'

const PostCard = ({ post, handleDelete, isDeleted } : PostCardProps) => {
    const { _id, title, category, description, image, createdAt} = post

    return (
        <div className='flex flex-col w-full'>
            {
                isDeleted && (
                    <div className='flex items-end justify-end mb-5'>
                        <button>
                            <Image
                                src="/delete.svg"
                                alt="delete"
                                width={50}
                                height={50}
                            />
                        </button>
                    </div>
                )
            }
            <Link href={`/postDetails/${_id}`}>
                <div className='flex md:flex-row flex-col gap-10'>
                    <div className='flex-1 flex flex-col justify-center'>
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
            </Link>
        </div>
    )
}

export default PostCard