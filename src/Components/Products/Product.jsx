import { Container, Row, Col, Spinner, Alert, Image } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import ProductDetails from "./ProductDetails";

export default function Product() {
  const params = useParams();
  const fetchProduct = async () => {
    const res = await fetch(
      "http://localhost:3001/products/" + params.productID
    );
    const data = await res.json();
    return data;
  };
  const { data, status } = useQuery(
    ["product", params.productID],
    fetchProduct
  );
  return (
    <Container>
      <Row>
        <Col>
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
          {status === "success" && <ProductDetails data={data} />}
        </Col>
      </Row>
    </Container>
  );
}
