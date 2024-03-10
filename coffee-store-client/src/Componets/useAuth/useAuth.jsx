import React, { useContext } from "react";
import { userContext } from "../../Provider/Provider";

const useAuth = () => {
  const user = useContext(userContext);
  return user;
};

export default useAuth;
