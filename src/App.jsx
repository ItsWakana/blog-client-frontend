import BlogList from "./components/BlogList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import { useState } from "react";
import BlogPostPage from "./components/BlogPostPage";

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const validateLogin = async (username, password) => {
    const response = await fetch("http://localhost:3000/api/sign-in", {
      method: "POST",
      credentials: "include",
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

    const userResponse = await fetch("http://localhost:3000/api/me", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (response.status !== 200) {
      console.log(`Error code:${response.status}. Issue logging in`);
    }
    const { user } = await userResponse.json();
    setCurrentUser(user);
    setIsLoggedIn(true);
  }

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <BlogList currentUser={currentUser} isLoggedIn={isLoggedIn}/>
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
  // "username": "jimmyjames2", "password": "jimmy167"

  //SET SOME STATE FOR THE POSTS. WE COULD ALSO MAKE A HOOK HERE INSTEAD.

    // const getAuthToken = async () => {
    //   const response = await fetch("http://localhost:3000/api/sign-in", {
    //     method: 'POST',
    //     headers: {
    //       "Content-Type": 'application/json',
    //     },
    //     body: JSON.stringify({ username: "jimmyjames2", password: "jimmy167" })
    //   });
    //   const token = await response.json();
    // }

    //WORK ON FETCHING THE BLOG POSTS. WE SHOULD PROBABLY OPEN UP THE POSTS ROUTE TO ANYTHING SO WE DONT NEED ANY SIGN INS. THIS WAY USERS WHO ARENT LOGGED IN CAN STILL VIEW THE BLOG POSTS.
    
    //FOR NOW WE CAN LEAVE CORS OPEN, UNTIL THIS GOES INTO PRODUCTION.


  return (
    <RouterProvider router={router}/>

  )
}

export default App;
