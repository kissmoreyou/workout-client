import { useState } from "react";
import { Button, FloatingLabel, Form, Stack } from "react-bootstrap";
import instance from "../util/axios";
import useWorkoutContext from "../hooks/useWorkoutContext";
const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();
  const formData = {
    title: "",
    weight: "",
    reps: "",
  };
  const [data, setData] = useState(formData);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await instance.post("/workouts", data);
      if (response.statusText === "OK") {
        dispatch({ type: "ADD_WORKOUT", payload: response.data });
        setData(formData);
        setIsLoading(false);
        setErrors({});
      }
    } catch (error) {
      setErrors(error.response.data);
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack className="mt-3">
        <Form.Group className="mb-3">
          <FloatingLabel controlId="title" label="Title">
            <Form.Control
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="Workout title"
              value={data.title}
            />
          </FloatingLabel>
          <Form.Text className="text-danger">{errors.title}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel controlId="weight" label="Weight (kg)">
            <Form.Control
              onChange={handleChange}
              type="number"
              name="weight"
              placeholder="Weight"
              value={data.weight}
            />
          </FloatingLabel>
          <Form.Text className="text-danger">{errors.weight}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel controlId="reps" label="Reps">
            <Form.Control
              onChange={handleChange}
              type="number"
              name="reps"
              placeholder="Repetitions"
              value={data.reps}
            />
          </FloatingLabel>
          <Form.Text className="text-danger">{errors.reps}</Form.Text>
        </Form.Group>
      </Stack>
      <Button type="submit" disabled={isLoading ? true : false}>
        {isLoading ? "Submitting..." : "Submit"}
      </Button>
    </Form>
  );
};

export default WorkoutForm;
