import React from 'react'
import { FormFieldProps } from '@/types/types'

const CustomInput = ({
    type, title, state, placeholder, isTextArea, setState
} : FormFieldProps) => {
  return (
    <div className='flexStart flex-col w-full gap-4'>
        <label className='w-full text-black capitalize font-semibold'>
            {title}
        </label>
        {
            isTextArea ? (
                <textarea placeholder={placeholder} value={state} required className='form_field-input' onChange={(e) => setState(e.target.value)}></textarea>
            ) :
            (
                <input type={type || 'text'} placeholder={placeholder} value={state} required className='form_field-input' onChange={(e) => setState(e.target.value)} />
            )
        }
    </div>
  )
}

export default CustomInput