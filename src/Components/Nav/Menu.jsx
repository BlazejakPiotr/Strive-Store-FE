import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Cart from "./Cart";
import Profile from "./Profile";

export default function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <h1>Strive Store</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="res    ponsive-navbar-nav">
          <Nav className="w-75">
            <Form className="d-flex w-100 px-5">
              <FormControl
                type="search"
                placeholder="Search"
                className="pr-4"
                aria-label="Search"
              />
              <Button variant="primary" className="mx-3">
                Search
              </Button>
            </Form>
          </Nav>
          <Nav>
            <Profile />
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
