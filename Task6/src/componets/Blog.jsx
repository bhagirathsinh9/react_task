import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

export default function Blog({ blogs, onDelete }) {
  const navigate = useNavigate()
  return (
    <>
      {blogs.map((blog) => {
        return (
          <>
            <div class='flex  justify-center m-4 p-2' key={blog.id}>
              <div class='max-w-sm  rounded overflow-hidden shadow-lg border-gray-300 border-2'>
                <div class='px-6 py-4'>
                  <div
                    class='font-bold text-xl mb-2 cursor-pointer'
                    onClick={() => {
                      navigate(`/blog/${blog.id}`)
                    }}
                  >
                    <h1>{blog.title}</h1>
                  </div>
                  <p class='text-gray-700 text-base mb-5'>{blog.content}</p>
                  <Button
                    onClick={() => {
                      onDelete(blog.id)
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}
