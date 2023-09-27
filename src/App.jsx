import BlogList from "./components/BlogList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import BlogPostPage from "./components/BlogPostPage";
import Cookies from "universal-cookie";

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [jwtToken, setJwtToken] = useState(null);

  const cookies = new Cookies();

  useEffect(() => {

    const checkAndFetchUser = async () => {

      const jwtValue = cookies.get("token");
      if (jwtValue) {
        setJwtToken(jwtValue);

        const fetchedUserInfo = await getUserInfo(jwtValue);
        setCurrentUser(fetchedUserInfo);
        setIsLoggedIn(true);
      }
    }

    checkAndFetchUser();
  },[]);

  const getUserInfo = async (token) => {

    const userResponse = await fetch("http://localhost:3000/api/me", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (userResponse.status !== 200) {
      console.log(`Error code:${userResponse.status}. Issue logging in`);
    }
    const { user } = await userResponse.json();


    return user; 
  }

  const validateLogin = async (username, password) => {
    
    const response = await fetch("http://localhost:3000/api/sign-in", {
        method: "POST",
        // credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password})
      });

    if (response.status !== 200) {
      console.log("invalid login");
      return;
    }
    const { token } = await response.json();

    cookies.set("token", token, {
      expires: new Date(Date.now() + 10 * 60 * 1000)
    });

    const fetchedUserInfo = await getUserInfo(token);
    setCurrentUser(fetchedUserInfo);
    setIsLoggedIn(true);
  }

  const router = createBrowserRouter([
    {
      element: <Layout isLoggedIn={isLoggedIn}/>,
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
