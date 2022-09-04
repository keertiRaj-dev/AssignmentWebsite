import './navbar.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarApp() {
  return (
    <div>
    <Navbar className= "navbar-top" expand="lg">
      <Container >hello</Container>
    </Navbar>
    <Navbar className= "navbar-dark navbar-mid" expand="lg">
      <Container>
        <Navbar.Brand className= "navbar-text" href="">cosmofeed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className= "navbar-text" href="">About</Nav.Link>
            <Nav.Link className= "navbar-text" href="">Mentor</Nav.Link>
            <Nav.Link className= "navbar-text" href="">Details</Nav.Link>
            <Nav.Link className= "navbar-text" href="">Benefits</Nav.Link>
            <Nav.Link className= "navbar-text" href="">Register</Nav.Link>
            <Nav.Link className= "navbar-text" href="">Testimonials</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item className= "navbar-text" href="">Action</NavDropdown.Item>
              <NavDropdown.Item href="">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavbarApp;
