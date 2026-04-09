import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar1() {
    return (
        <Navbar expand="lg" className="custom-navbar" fixed="top" variant="dark">
            <Container fluid>
                <Navbar.Brand as={NavLink} to ="/" className="brand-logo">
                    OptiTask
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-links">
                        <Nav.Link as={NavLink} to ="/services-lp" className="nav-link-custom">Optimus</Nav.Link>
                        <Nav.Link as={NavLink} to ="/figure03" className="nav-link-custom">Figure 03</Nav.Link>
                        <Nav.Link as={NavLink} to ="/request-cta" className="nav-link-custom">Request A Robot</Nav.Link>
                        <Nav.Link as={NavLink} to="/manageReservation" className="nav-link-custom">Manage Request</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar1;