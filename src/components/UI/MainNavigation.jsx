import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

const MainNavigation = () => {
  const count = useSelector((state) => state.book.totalContacts);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1em",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">Logo</Link>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            padding: 0,
            margin: 0,
            marginLeft: "1em",
          }}
        >
          <li>
            <Link style={{ marginRight: ".25rem" }} to="/">
              About
            </Link>
          </li>
          <li>
            <Link to="/contacts">Contacts: {count}</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;

{
  /* <Nav
  activeKey="/"
  // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/">
      <Link to="/">Logo</Link>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">
      <Link to="/contacts">Contacts</Link>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">
      <Link to="/login">Login</Link>
    </Nav.Link>
  </Nav.Item>
</Nav>; */
}
{
  /* <Navbar variant="dark" bg="dark" expand="lg">
<Container fluid>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbar-dark-example" />
  <Navbar.Collapse id="navbar-dark-example">
    <Nav>
      <NavDropdown
        id="nav-dropdown-dark-example"
        title="Dropdown"
        menuVariant="dark"
      >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */
}
