import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error(
      "useWorkContext must be used inside WorkoutContextProvider"
    );
  }
  return context;
};

export default useWorkoutContext;
