import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1/workouts",
  withCredentials: true,
});

export default instance;
