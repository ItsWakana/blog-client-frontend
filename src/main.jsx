import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Layout from './components/Layout.jsx'
import './index.css'

const handleLoginClick = (username, password) => {

  console.log(username);
  console.log(password);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App />
  </React.StrictMode>,
)
