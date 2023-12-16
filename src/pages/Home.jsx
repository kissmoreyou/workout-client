import { Container, Row, Col } from "react-bootstrap";
import WorkoutForm from "../components/WorkoutForm";
const Home = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <WorkoutForm />
        </Col>
        <Col lg={8}></Col>
      </Row>
    </Container>
  );
};

export default Home;
