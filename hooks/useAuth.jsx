import { useState, useEffect } from "react"
import { getUserInfo } from "../helper functions/authHelpers";

const useAuth = (cookies) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [jwtToken, setjwtToken] = useState(null);

    useEffect(() => {
  
      const checkAndFetchUser = async () => {
  
        const jwtValue = cookies.get("token");
        if (jwtValue) {
          const fetchedUserInfo = await getUserInfo(jwtValue);
          setCurrentUser(fetchedUserInfo);
          setIsLoggedIn(true);
        }
      }
  
      checkAndFetchUser();
    },[]);

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

    const validateUserComment = async (comment, blogData) => {

      try {
        const response = await fetch(`http://localhost:3000/api/posts/${blogData._id}/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${cookies.get("token")}`
          },
          body: JSON.stringify({ comment, blogData })
        });
        const newComment = await response.json();

        return newComment;

      } catch(error) {
        console.log(error);
      }

    }

    const handleLogOut = async () => {
        cookies.remove("token");

        // await fetch("http://localhost:3000/api/sign-out", {
        //     method: "POST",
        //     credentials: "include",

        // });

        setCurrentUser(null);
        setIsLoggedIn(false);
    }

    return {
        currentUser,
        isLoggedIn,
        validateLogin,
        handleLogOut,
        validateUserComment
    }
}

export default useAuth;