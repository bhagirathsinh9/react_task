import React from 'react'
import Blog from './Blog.jsx'
import { useState } from 'react'
import { blogData } from '../utils/blogData.js'

export default function BlogLists() {
  const [blogs, setBlogs] = useState(blogData)

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id))
  }

  return (
    <>
      <div className='flex '>
        <Blog blogs={blogs} onDelete={handleDelete} />
      </div>
    </>
  )
}
