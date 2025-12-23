import React from 'react'
import { useParams } from 'react-router-dom';

export default function BlogDetails() {
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

  const param = useParams();
  const id = param.id;

    const blog = blogData.find(
    (item) => item.id === Number(id)
  );
  return (
    <div>
      <h1 class="text-3xl font-bold underline text-center m-4">Blog Details Page - {id}</h1>
        <div class="flex  justify-center m-4 p-2">
             <h1>{blog.title}</h1>
        </div>

        <div class="flex  justify-center m-4 p-2">
              <p>{blog.content}</p>
        </div>
    </div>
  )
}
