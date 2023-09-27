import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

const useLocalCookieToken = () => {

    const [jwtToken, setJwtToken] = useState(null);

    const cookies = new Cookies();
  
    useEffect(() => {
      const jwtValue = cookies.get("token");
      if (jwtValue) {
        setJwtToken(jwtValue);
      }
    },[]);

    return [cookies, jwtToken]
}

export default useLocalCookieToken;