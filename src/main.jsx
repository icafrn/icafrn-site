import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import News from './pages/News.jsx'
import NewsDetail from './pages/NewsDetail.jsx'

const router = createBrowserRouter([
  {
    path: "/icafrn-site",
    element: <App />,
    children: [
      {
        path: "/icafrn-site",
        element: <Home />,
      },
      {
        path: "/icafrn-site/sobre-nos/",
        element: <About />,
      },
      {
        path: "/icafrn-site/noticias/",
        element: <News />,
      },
      {
        path: "/icafrn-site/noticias/:id",
        element: <NewsDetail />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
