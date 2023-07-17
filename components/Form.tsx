"use client"

import React,{ useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomInput from './CustomInput'
import CustomMenu from './CustomMenu'
import { postCategories } from '@/constants'
import CustomButton from './CustomButton'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Form = ({ type, formBlog, setForm } : any) => {
  const [imageSrc, setImageSrc] = useState('');
  const [uploadData, setUploadData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter()

  // Get User Data
  const {data:session} = useSession()

  // Change Image State
  // @ts-ignore
  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function(onLoadEvent) {
      // @ts-ignore
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    }

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  // Change Input Value
  const handleStateChange = (fieldName: string, value:string) => {
    setForm((prev: any) => ({ ...prev, [fieldName]: value}))
  }

  // Submit Data
  // @ts-ignore
  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    // @ts-ignore
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

    const formData = new FormData();
    // @ts-ignore
    for ( const file of fileInput.files ) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'my-uploads');

    const data = await fetch('https://api.cloudinary.com/v1_1/djbhriakj/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    setImageSrc(data.secure_url);
    handleStateChange('image', imageSrc)
    setUploadData(data);
    
    if(formBlog.image != ''){
      setIsSubmitting(true)
      try {
        const response = await fetch("/api/post/new", {
          method: "POST",
          body: JSON.stringify({
            // @ts-ignore
            userId: session?.user.id ,
            title: formBlog.title,
            image: formBlog.image,
            category: formBlog.category,
            description: formBlog.description,
            firstParagraph: formBlog.firstParagraph,
            secondParagraph: formBlog.secondParagraph,
            quote: formBlog.quote
          }),
        });
    
        if (response.ok) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsSubmitting(false)
      }
    }
  }


  return (
    <section className="w-full container mx-auto md:px-0 px-4 justify-center max-w-full flex-center flex-col">
      <h1 className="head_text text-left">
        <span className="capitalize">
          {type} Post
        </span>
      </h1>
      <p className="desc md:text-center max-w-md mb-10">
        {type} and share amazing Blogs with the world, and let your imagination run wild with us.
      </p>
      <form 
        action="" 
        onSubmit={handleOnSubmit}
        className="flexStart form border-t"  
      >
        <div className='w-full'>
          <label className="block mb-2 text-sm font-semibold text-gray-900">Upload Image</label>
          <p>
            <input type="file" name="file" className='block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 
            file:bg-transparent file:border-0
            file:bg-gray-100 file:mr-4
            file:py-3 file:px-4'
            onChange={handleOnChange} />
          </p>

          <div className='relative w-full h-64 rounded-xl'>
            <Image alt="image" fill src={imageSrc || "/upload.png"} className='my-5 object-contain rounded-xl' />
          </div>
            
{/*             
            {imageSrc && !uploadData && (
              <p>
                <button type='button' onClick={() => {}} className='bg-black text-white w-full py-2 rounded-lg'>Upload the Picture</button>
              </p>
            )} */}
        </div>
        
        <CustomInput 
          title="Blog title"
          state={formBlog.title}
          placeholder="Blog Title"
          setState={(value) => handleStateChange('title', value)}
        />
        <CustomInput
          isTextArea={true}
          title="Description"
          state={formBlog.description}
          placeholder="Blog Description"
          setState={(value) => handleStateChange('description', value)}
        />
        <CustomMenu 
          title="Blog Category"
          state={formBlog.category}
          filters={postCategories}
          setState={(value) => handleStateChange('category', value)}
        />
        <CustomInput
          isTextArea={true}
          title="First Paragraph"
          state={formBlog.firstParagraph}
          placeholder="Blog Paragraph"
          setState={(value) => handleStateChange('firstParagraph', value)}
        />
        <CustomInput
          isTextArea={true}
          title="Second Paragraph"
          state={formBlog.secondParagraph}
          placeholder="Blog Paragraph"
          setState={(value) => handleStateChange('secondParagraph', value)}
        />
        <CustomInput 
          title="Blog Quote"
          state={formBlog.quote}
          placeholder="The Progress is the Key !"
          setState={(value) => handleStateChange('quote', value)}
        />

        <CustomButton
          type='submit'
          title="create"
          submitting={isSubmitting}
        />
      </form>
    </section>
  )
}

export default Form