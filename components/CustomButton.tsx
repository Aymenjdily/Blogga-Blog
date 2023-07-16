import { CustomButtonProps } from '@/types/types'
import React from 'react'

const CustomButton = ({
    title, type, submitting
} : CustomButtonProps ) => {
  return (
    <button
        type={type || "button"}
        disabled={submitting}
        className='capitalize self-start bg-black px-7 rounded-xl py-2 text-white font-semibold'
    >
        {title} post
    </button>
  )
}

export default CustomButton