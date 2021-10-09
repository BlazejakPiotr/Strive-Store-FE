import { Row, Col, Image, Tab, Tabs, Button } from "react-bootstrap";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import "./product.css";
export default function ProductDetails({ data }) {
  return (
    <>
      <Row className="my-5 align-items-center">
        <Col lg={5}>
          <Image src={data.imageUrl} alt={data.name} />
          <div className="mt-3">
            <Image src={data.imageUrl} alt={data.name} className="thumbnail" />
            <Image src={data.imageUrl} alt={data.name} className="thumbnail" />
            <Image src={data.imageUrl} alt={data.name} className="thumbnail" />
          </div>
        </Col>
        <Col>
          <h6>
            {data.brand}
            {data.name}
          </h6>
          <p>4.5/5 Rating - Reviews</p>
          <h4>US $ {data.price}</h4>

          <Button>Buy now</Button>
          <Button>Add to cart</Button>
        </Col>
      </Row>
      <Row>
        <Col className="mb-5">
          <Tabs defaultActiveKey="description" className="mb-4">
            <Tab eventKey="description" title="Description" className="px-3">
              <ProductDescription />
            </Tab>
            <Tab eventKey="reviews" title="Reviews" className="px-3">
              <ProductReviews />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}
