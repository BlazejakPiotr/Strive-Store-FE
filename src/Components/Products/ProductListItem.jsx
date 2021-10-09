import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductListItem({ data }) {
  return (
    <Col sm={4} md={3} lg={2} className="my-2">
      <Card>
        <Card.Img
          variant="top"
          src={data.imageUrl}
          className="product-list-item"
        />
        <Card.Body>
          <Card.Text>
            <p className="product-list-item-name">
              {data.brand} {data.name}
            </p>
            <p className="product-list-item-price">US $ {data.price}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
