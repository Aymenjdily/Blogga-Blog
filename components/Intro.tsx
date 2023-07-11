import { IntroProps } from '@/types/types'
import React from 'react'

const Intro = (
    { category, date, description } : IntroProps
) => {
  return (
    <section
        className='py-24 flex items-center justify-start bg-[#27374D]'
    >
        <div className='px-20 container mx-auto'>
            <div className='text-white uppercase font-semibold text-sm'>
                {category}
            </div>
            <h1 className='my-5 text-white font-bold md:text-6xl text-3xl'>
                Insights about my personal and work<br/>
                life, and the in-betweens
            </h1>
        </div>
    </section>
  )
}

export default Intro