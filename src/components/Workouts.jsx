import { Button, Card } from "react-bootstrap";
import useWorkoutContext from "../hooks/useWorkoutContext";
import instance from "../util/axios";
const Workouts = ({ data }) => {
  const { dispatch } = useWorkoutContext();
  const { _id, title, weight, reps, createdAt, updatedAt } = data;
  const handleClick = async (id) => {
    try {
      const response = await instance.delete("/workouts/" + id);

      if (response.statusText === "OK") {
        dispatch({ type: "DELETE_WORKOUT", payload: response.data });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Card className="mt-3">
      <Card.Header className="text-capitalize">{title}</Card.Header>
      <Card.Body>
        <Card.Title>{createdAt}</Card.Title>
        <Card.Text>
          <strong>Weight: </strong>
          {weight} kg
        </Card.Text>
        <Card.Text>
          <strong>Reps: </strong>
          {reps}
        </Card.Text>
        <Button onClick={() => handleClick(_id)} variant="danger" size="sm">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Workouts;
