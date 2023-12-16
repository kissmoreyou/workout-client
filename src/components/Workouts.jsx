import { Button, Card } from "react-bootstrap";
const Workouts = ({ data }) => {
  const { _id, title, weight, reps, createdAt, updatedAt } = data;
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
        <Button variant="danger" size="sm">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Workouts;
