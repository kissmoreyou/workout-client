import { createContext, useEffect, useReducer } from "react";

export const UserContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      console.log("You are logged in");
      return { user: action.payload };
    case "USER_LOGOUT":
      console.log("You are logged out");

      return { user: null };
    default:
      return state;
  }
};
const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
  });
  console.log("UserContext state:", state);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "USER_LOGIN", payload: user });
    }
  }, []);
  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
