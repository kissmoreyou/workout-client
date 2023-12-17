import { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import instance from "../util/axios";

const Login = () => {
  const loginData = { email: "", password: "" };
  const [data, setData] = useState(loginData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/users/login", data);
      if (response.statusText === "OK") {
        console.log(response);
        setData(loginData);
      }
    } catch (error) {
      console.log(error.message);
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
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
