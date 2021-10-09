import { Nav } from "react-bootstrap";

export default function Categories() {
  return (
    <>
      <Nav
        defaultActiveKey="/home"
        className="flex-column categories h-100 p-2"
      >
        <Nav.Link>
          <h6>Categories</h6>
        </Nav.Link>
        <Nav.Link href="/home">Fashion</Nav.Link>
        <Nav.Link eventKey="link-1">Smartphones</Nav.Link>
        <Nav.Link eventKey="link-2">Consumer Electronics</Nav.Link>
      </Nav>
    </>
  );
}
