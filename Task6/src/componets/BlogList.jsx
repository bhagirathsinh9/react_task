import React from 'react'
import Blog from './Blog';
import { useState } from 'react';

const blogData =[
  {
    "id": 1,
    "title": "Introduction to JavaScript",
    "content": "JavaScript is a versatile programming language used for both frontend and backend development."
  },
  {
    "id": 2,
    "title": "What is React?",
    "content": "React is a component-based library developed by Facebook for building modern web applications."
  },
  {
    "id": 3,
    "title": "Understanding JSON",
    "content": "JSON stands for JavaScript Object Notation and is commonly used for data exchange between client and server."
  }
]

export default function BlogList() {

  const [blogs, setBlogs] = useState(blogData);

  const handleDelete = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <>
    <div className='flex '>
      <Blog blogs={blogs} onDelete={handleDelete} />
    </div>
    </>
  )
}
