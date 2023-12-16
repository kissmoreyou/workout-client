import { createContext, useReducer } from "react";
export const WorkoutContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_WORKOUTS":
      return { workouts: action.payload };
    case "ADD_WORKOUT":
      return { workouts: [action.payload, ...state.workouts] };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    workouts: null,
  });
  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;
