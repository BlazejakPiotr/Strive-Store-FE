import { NavDropdown } from "react-bootstrap";
export default function Profile() {
  return (
    <NavDropdown title="User">
      <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Manage products</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.4">Add product</NavDropdown.Item>
    </NavDropdown>
  );
}
