import { Container, Row, Col } from "react-bootstrap";
import WorkoutForm from "../components/WorkoutForm";
import { useEffect, useState } from "react";
import instance from "../util/axios";
import Workouts from "../components/Workouts";
import useWorkoutContext from "../hooks/useWorkoutContext";
const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  // const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await instance.get("/workouts");

        if (response.statusText === "OK") {
          // setWorkouts(response.data);
          dispatch({ type: "GET_WORKOUTS", payload: response.data });
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <WorkoutForm />
        </Col>
        <Col lg={8}>
          {workouts?.map((workout) => {
            return <Workouts key={workout._id} data={workout} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
