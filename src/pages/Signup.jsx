import { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const { signup, errors, isLoading } = useSignup();
  const sigunpData = { email: "", password: "" };
  const [data, setData] = useState(sigunpData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(data);
      setData(sigunpData);
    } catch (error) {
      // console.log(error.message);
      console.log(errors);
    }
  };
  return (
    <Container>
      <Row className="mt-3">
        <Col lg={4} md={6} xs={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="email.gmail.com"
                value={data.email}
                onChange={handleChange}
              />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isLoading}>
              Signup
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
