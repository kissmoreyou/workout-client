import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import instance from "../util/axios";

const useLogin = () => {
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useContext(UserContext);
  const login = async (data) => {
    try {
      setIsLoading(true);
      setErrors(null);
      const response = await instance.post("/users/login", data);

      if (response.statusText === "OK") {
        setIsLoading(false);
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({ type: "USER_LOGIN", payload: response.data });
      }
    } catch (error) {
      // console.log(error.response.data);
      setErrors(error.response.data);
      setIsLoading(false);
    }
  };
  return { login, errors, isLoading };
};

export default useLogin;
