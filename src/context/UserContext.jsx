import { createContext, useReducer } from "react";

export const UserContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { user: action.payload };
    case "LOGOUT_USER":
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

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
