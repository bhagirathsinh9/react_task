import React from 'react'
import { useParams } from 'react-router-dom'
import { blogData } from '../utils/blogData'

export default function BlogDetails() {
  const param = useParams()
  const id = param.id

  const blog = blogData.find((item) => item.id === Number(id))
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-center m-4'>
        Blog Details Page - {id}
      </h1>
      <div className='flex  justify-center m-4 p-2'>
        <h1>{blog.title}</h1>
      </div>

      <div className='flex  justify-center m-4 p-2'>
        <p>{blog.content}</p>
      </div>
    </div>
  )
}
