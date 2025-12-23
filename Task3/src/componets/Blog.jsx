import React from "react";
import Button from "./Button";

export default function Blog({ blogs, onDelete }) {
  return (
    <>
      {blogs.map((blog) => {
        return (
          <>
          <div class="flex  justify-center m-4 p-2" key={blog.id}>
            <div class="max-w-sm  rounded overflow-hidden shadow-lg border-gray-300 border-2">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{blog.title}</div>
                <p class="text-gray-700 text-base mb-5">{blog.content}</p>
              <Button onClick={()=>{onDelete(blog.id)}}>Delete</Button>
              </div>
            </div>
          </div>
          </>
        );
      })}
    </>
  );
}
