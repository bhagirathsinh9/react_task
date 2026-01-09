import { createBrowserRouter } from 'react-router-dom'
import NotFound404 from '../pages/NotFound404'
import BlogLists from '../componets/BlogList'
import BlogDetails from '../pages/BlogDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BlogLists />,
    errorElement: <NotFound404 />,
  },
  {
    path: '/blog/:id',
    element: <BlogDetails />,
    errorElement: <NotFound404 />,
  },
  {
    path: '*',
    element: <NotFound404 />,
  },
])

export default router
