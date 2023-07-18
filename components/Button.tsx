import { ButtonProps } from '@/types/types'
import React from 'react'

const Button = ({
    bgColor, setNumber, number
} : ButtonProps) => {
  return (
    <button
        type="button"
        className={`px-6 py-2 text-black font-semibold rounded-lg ${bgColor}`}
        onClick={() => setNumber(number+2)}
    >
        More articles
    </button>
  )
}

export default Button