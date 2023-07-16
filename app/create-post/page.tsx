"use client"

import { Form, Intro } from '@/components'
import Modal from '@/components/Modal'
import React,{ useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const page = () => {
  const [formBlog, setForm] = useState({
    title: '',
    description: '',
    firstParagraph: '',
    image: '',
    secondParagraph: '',
    quote: '',
    category: ''
  })

  return (
    <Modal>
      <Form
        type="create"
        formBlog={formBlog}
        setForm={setForm}
      />
    </Modal>
  )
}

export default page