import BlogList from "./components/BlogList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import BlogPostPage from "./components/BlogPostPage";
import useAuth from "../hooks/useAuth";
import Cookies from "universal-cookie";

function App() {

  const cookies = new Cookies();

  const {
    currentUser,
    isLoggedIn,
    validateLogin,
    handleLogOut
  } = useAuth(cookies);

  const router = createBrowserRouter([
    {
      element: <Layout isLoggedIn={isLoggedIn} handleLogOut={handleLogOut}/>,
      children: [
        {
          path: "/",
          element: <BlogList currentUser={currentUser} isLoggedIn={isLoggedIn} cookies={cookies}/>
        },
        {
          path: "/login",
          element: <Login validateLogin={validateLogin} isLoggedIn={isLoggedIn}/>
        },
        {
          path: "/posts/:postId",
          element: <BlogPostPage />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>

  )
}

export default App;
