import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

export default function Header() {
  return (
    <div id="Header">
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="sm"
        variant="dark"
        style={{ backgroundColor: '#1d1d1d', fontFamily: 'Mulish, sans-serif' }}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto  w-100  justify-content-end">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/projects">PROJECTS</Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/cshafizadeh"
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN
              </Nav.Link>
              <Nav.Link
                href="https://github.com/cshafizadeh"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </Nav.Link>
              <Nav.Link href="/about">ABOUT ME / CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
