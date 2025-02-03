import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import News from './pages/News.jsx'

const router = createBrowserRouter([
  {
    path: "/site-icafrn",
    element: <App />,
    children: [
      {
        path: "/site-icafrn",
        element: <Home />,
      },
      {
        path: "/site-icafrn/sobre-nos/",
        element: <About />,
      },
      {
        path: "/site-icafrn/noticias/",
        element: <News />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
