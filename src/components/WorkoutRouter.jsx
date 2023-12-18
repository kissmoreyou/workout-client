import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import useUserContext from "../hooks/useUserContext";

const WorkoutRouter = () => {
  const { user } = useUserContext();
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to={"/"} /> : <Signup />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <Login />}
        />
      </Routes>
    </Router>
  );
};

export default WorkoutRouter;
