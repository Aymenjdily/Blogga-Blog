import { IntroProps } from '@/types/types'
import React from 'react'

const Intro = (
    { category, date, description, bgColor, categoryClasses } : IntroProps
) => {
  return (
    <section
        className={`py-24 md:h-[70vh] h-[80vh] flex items-center justify-start ${bgColor}`}
    >
        <div className='px-20 container mx-auto mt-20'>
            <div className={`text-white uppercase font-semibold text-sm ${categoryClasses}`}>
                {category}
            </div>
            <h1 className='my-5 text-white font-bold md:text-6xl text-3xl'>
                Insights about my personal and work<br/>
                life, and the in-betweens
            </h1>
            {
                description && (
                    <p className='text-gray-400 text-xl'>
                        {description}
                    </p>
                )
            }
        </div>
    </section>
  )
}

export default Intro