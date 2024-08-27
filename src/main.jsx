import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { Auth_Layout, SignIn, LogIn } from './Auth/index.js';
import { RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Auth_Layout />,
        children: [
          {
            path:"",
            element: <LogIn />
          }
        ]
      },
      {
        path: "signin",
        element: <Auth_Layout />,
        children: [
          {
            path:"",
            element: <SignIn />
          }
        ]
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes}/>
  </StrictMode>,
)
