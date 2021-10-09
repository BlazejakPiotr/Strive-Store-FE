import { Container, Row, Col } from "react-bootstrap";

import "./home.css";

import Categories from "./Categories";
import Slides from "./Slides";
import DealOfTheDay from "./DealOfTheDay";

export default function Home() {
  return (
    <Container>
      <Row className="my-5">
        <Col md={2}>
          <Categories />
        </Col>
        <Col md={10}>
          <Slides />
        </Col>
      </Row>
      <Row>
        <Col className="content p-3">
          <DealOfTheDay />
        </Col>
      </Row>
    </Container>
  );
}
