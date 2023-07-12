"use client"

import React,{ useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Form = ({ type, post, setPost, submitting, handleSubmit} : any) => {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

 console.log(imageSrc)

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
    setUploadData(data);
  }

  

  return (
    <section className="w-full container mx-auto md:px-0 px-4 justify-center max-w-full flex-center flex-col">
      <h1 className="head_text text-left">
        <span className="">
          {type} Post
        </span>
      </h1>
      <p className="desc text-center max-w-md">
        {type} and share amazing Blogs with the world, and let your imagination run wild with us.
      </p>
      <form 
        action="" 
        onSubmit={handleOnSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"  
      >
        <p>
            <input type="file" name="file" onChange={handleOnChange} />
          </p>
          
          <Image alt="image" width={400} height={400} src={imageSrc || ""} />
          
          {imageSrc && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-200">
            Title
          </span>
          <input 
            value={post}
            // onChange={(e) => setPost({...post,tag: e.target.value})}
            placeholder="Blog Title"
            // required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-200">
            Description
          </span>
          <input 
            value={post}
            // onChange={(e) => setPost({...post,tag: e.target.value})}
            placeholder="Blog Description"
            // required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-200">
            Quote
          </span>
          <input 
            value={post}
            // onChange={(e) => setPost({...post,tag: e.target.value})}
            placeholder="Blog Quote"
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-200">First Paragraph</span>
          <textarea 
            value={post}
            // onChange={(e) => setPost({...post,prompt: e.target.value})}
            placeholder="Write your first paragraph here..."
            // required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-200">Second Paragraph</span>
          <textarea 
            value={post}
            // onChange={(e) => setPost({...post,prompt: e.target.value})}
            placeholder="Write your second paragraph here..."
            className="form_textarea"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-md text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form