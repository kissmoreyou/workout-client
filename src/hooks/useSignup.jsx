import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import instance from "../util/axios";

const useSignup = () => {
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useContext(UserContext);

  const signup = async (data) => {
    try {
      setIsLoading(true);
      setErrors(null);
      const response = await instance.post("/users/signup", data);

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
  return { signup, errors, isLoading };
};

export default useSignup;
