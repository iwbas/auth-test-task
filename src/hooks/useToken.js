import { useState } from 'react';
import getToken from "../utils/getToken";

export default function useToken() {
  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    console.log("save", userToken)
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  }
}