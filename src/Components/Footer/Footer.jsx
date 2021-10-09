import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  Truck,
  Headset,
  CreditCardFill,
  CheckSquareFill,
  Facebook,
  Twitter,
  Instagram,
  Messenger,
  Whatsapp,
} from "react-bootstrap-icons";

export default function Footer() {
  return (
    <Container className="my-5">
      <Row>
        <Col className="text-center">
          <Truck size={48} className="mb-3" />
          <h6>Worldwide Shipping</h6>
          <p>Fast and convinient door to door delivery</p>
        </Col>
        <Col className="text-center">
          <Headset size={48} className="mb-3" />
          <h6>Customer Service</h6>
          <p>Product warranty and proffesional 24/7 customer service</p>
        </Col>
        <Col className="text-center">
          <CreditCardFill size={48} className="mb-3" />
          <h6>Secured Payment</h6>
          <p>Pay with most popular and secure payment methods</p>
        </Col>
        <Col className="text-center">
          <CheckSquareFill size={40} className="mb-3" />
          <h6>Highest Quality</h6>
          <p>Competetive prices with best products quality</p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col sm={12} md={4} className="footer">
          <h6>Check our social media</h6>
          <Facebook size={28} className="m-2" />
          <Twitter size={28} className="m-2" />
          <Instagram size={28} className="m-2" />
          <Messenger size={28} className="m-2" />
          <Whatsapp size={28} className="m-2" />
          <h6 className="mt-4 ">Subscribe</h6>
          <p className="footer">
            By subscribing you agree to recive email from us. Please read our
            Privacy Policy
          </p>
          <Form.Group className="mb-3 d-flex">
            <Form.Control type="email" placeholder="name@example.com" />
            <Button className="ml-2">Subscribe</Button>
          </Form.Group>
        </Col>
        <Col sm={6} md={4} className="footer">
          <h6>Get to know us</h6>
          <ul>
            <li> About us</li>
            <li> Contact us</li>
            <li> Help center</li>
            <li> Site map</li>
            <li> Guarantee and return policy</li>
          </ul>
        </Col>
        <Col sm={6} md={4} className="footer">
          <h6>Payment & Shipping</h6>
          <ul>
            <li> About us</li>
            <li> Contact us</li>
            <li> Help center</li>
            <li> Site map</li>
            <li> Guarantee and return policy</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
