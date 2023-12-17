import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import WorkoutContextProvider from "./context/WorkoutContext.jsx";
import UserContextProvider from "./context/UserContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <WorkoutContextProvider>
        <App />
      </WorkoutContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
