import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useQuery } from "react-query";

import "./home.css";

import Categories from "./Categories";
import Slides from "./Slides";
import DealOfTheDay from "./DealOfTheDay";
import ProductList from "../Products/ProductList";

const fetchProducts = async () => {
  const res = await fetch("http://localhost:3001/products");
  const data = await res.json();
  return data;
};

export default function Home() {
  const { data, status } = useQuery("products", fetchProducts);

  return (
    <>
      <Container fluid className="bg">
        <Container>
          <Row className="py-5">
            <Col md={3}>
              <Categories />
            </Col>
            <Col md={9}>
              <Slides />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="content">
        <Container>
          <Row>
            {status === "loading" && (
              <div className="pt-5 text-center">
                <Spinner animation="border" variant="primary" />
              </div>
            )}
            {status === "error" && (
              <div>
                <Alert variant="danger" className="text-center">
                  Something went wrong. Try to refresh page.
                </Alert>
              </div>
            )}
            {status === "success" && <ProductList data={data} />}
          </Row>
        </Container>
      </Container>
    </>
  );
}
