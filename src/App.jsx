import BlogList from "./components/BlogList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {


  const validateLogin = async (username, password) => {
    const response = await fetch("http://localhost:3000/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password})
    });

    const token = await response.json();
    console.log(token);
  }

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <BlogList />
        },
        {
          path: "/login",
          element: <Login validateLogin={validateLogin}/>
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
