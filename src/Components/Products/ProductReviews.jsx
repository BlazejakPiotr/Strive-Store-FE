import { Row, Col } from "react-bootstrap";

export default function ProductReviews() {
  return (
    <Row>
      <Col>
        <h4>Customer Reviews</h4>
        <h2>4.70 / 5</h2>
      </Col>
      <Col>
        <p>5 star</p>
        <p>4 star</p>
        <p>3 star</p>
        <p>2 star</p>
        <p>1 star</p>
      </Col>
      <Col>
        <h6>Add your review</h6>
      </Col>
    </Row>
  );
}
