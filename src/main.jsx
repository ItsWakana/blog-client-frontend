import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Layout from './components/Layout.jsx'
import './index.css'

const handleLoginClick = (username, password) => {

  console.log(username);
  console.log(password);
  

  
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/login",
        element: <Login handleLoginClick={handleLoginClick}/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
