import useUserContext from "./useUserContext";
import { useNavigate } from "react-router-dom";
import useWorkoutContext from "./useWorkoutContext";
export const useLogout = () => {
  const navigate = useNavigate();
  const { dispatch } = useUserContext();
  const { dispatch: workoutDispatch } = useWorkoutContext();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "USER_LOGOUT" });
    workoutDispatch({ type: "GET_WORKOUTS", payload: null });
    navigate("/login");
  };
  return { logout };
};
