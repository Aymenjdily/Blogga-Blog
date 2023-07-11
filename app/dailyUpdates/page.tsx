import { Intro } from '@/components'
import React from 'react'

const DailyUpdates = () => {
  return (
    <>
        <Intro 
            category="Daily Updates"
            bgColor='bg-[#635985]'
            categoryClasses="border border-white w-[150px] rounded-lg flex items-center justify-center px-2 py-1"
        />
    </>
  )
}

export default DailyUpdates