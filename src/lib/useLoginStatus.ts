import { useEffect, useState } from 'react';


export function useLoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    // Check if login cookie is present or any other login logic
    const loginCookie = document.cookie.includes('isLoggedIn=true');
    if (loginCookie)
      setIsLoggedIn(true);
  }, []);



  return isLoggedIn;
}