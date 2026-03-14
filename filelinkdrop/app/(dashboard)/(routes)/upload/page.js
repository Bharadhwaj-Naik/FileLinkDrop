"use client"
import React from 'react'
import UploadForm from './_components/UploadForm'

function Upload() {
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] m-5 text-center'>Start <strong className='text-orange-400'>Uploading</strong> Files and <strong className='text-orange-400'>Share</strong> it </h2>
      <UploadForm/>
    </div>
  )
}

export default Upload
