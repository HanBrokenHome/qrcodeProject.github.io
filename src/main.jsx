import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Error from './layout/error'
import Kalkulator from './pages/qrCode'

const router = createBrowserRouter([
  {
    path:"/kalkulator",
    element:<Kalkulator/>
  },
  {
    path: "*",
    element:<Error/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
