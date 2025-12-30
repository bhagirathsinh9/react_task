import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import BlogList from './componets/BlogList'
import BlogDetails from './page/BlogDetails'
import NotFound404 from './page/NotFound404'
import Home from './page/Home'

const browserRouter = createBrowserRouter([
  {
    path: '/',
    // element:<Home/>,
    errorElement: <NotFound404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'blog',
        element: <BlogList />,
      },
    ],
  },
  {
    path: '/blog/:id',
    element: <BlogDetails />,
    //use For this route if blog not found
    errorElement: <NotFound404 />,
  },

  //this use for any route not defined
  {
    path: '*',
    element: <NotFound404 />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
