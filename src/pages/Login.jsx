import { useState } from "react";
import { Form, Container, Row, Col, Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
const Login = () => {
  const { login, errors, isLoading } = useLogin();
  const navigate = useNavigate();
  const loginData = { email: "", password: "" };
  const [data, setData] = useState(loginData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(data);
    navigate("/");
  };
  // console.log(errors);
  return (
    <Container>
      <h4>Login</h4>
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
            <Stack>
              <Form.Text className="text-danger mt-3">
                {errors && errors}
              </Form.Text>
            </Stack>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
