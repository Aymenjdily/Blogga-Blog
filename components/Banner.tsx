import React from 'react'

const Banner = () => {
  return (
    <section className='container mx-auto flex items-center justify-center py-12 md:px-0 px-4'>
        <div className='bg-[#27374D] w-full text-center py-12 rounded-xl'>
            <h1 className='text-white font-bold text-2xl mb-2'>
                Subscribe to The Blog
            </h1>
            <p className='text-gray-400'>
                By loging you we get your subscription
            </p>
        </div>
    </section>
  )
}

export default Banner