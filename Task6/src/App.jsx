import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import BlogList from './componets/BlogList'
import BlogDetails from './page/BlogDetails'
import NotFound404 from './page/NotFound404'

const browserRouter = createBrowserRouter([
  {
    path:'/',
    element:<BlogList/>,
  },
  {
    path:'/blog/:id',
    element:<BlogDetails/>
  },
  {
    path:"*",
    element:<NotFound404/>
  }
]);

function App() {



  return (
    <>
   
    <RouterProvider router={browserRouter}/>
    </>
  )
}

export default App
