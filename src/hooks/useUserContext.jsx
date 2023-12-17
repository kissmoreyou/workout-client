import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useWorkoutContext must be used inside UserContextProvider"
    );
  }
  return context;
};

export default useUserContext;
