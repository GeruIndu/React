import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home'
import Bag from './routes/Bag'

const router = createBrowserRouter ([
    {
      path: '/',
      element: <App />,
      children: [
        {path: '/', element: <Home />},
        {path: '/bag', element: <Bag />}
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
