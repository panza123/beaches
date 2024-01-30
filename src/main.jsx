import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Hero from './components/Hero.jsx'
import Destination from './components/Destination.jsx'

const router = createBrowserRouter([
  {path:'/',
   element:<Layout/>,

   children:[
       {index:true,element:<Hero/>},
       {path:'/',element:<Destination/>}
   ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
