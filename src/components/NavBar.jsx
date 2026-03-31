import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicExample() {
    return (
        <Navbar expand="lg" className="custom-navbar">

            <Container fluid>
                <Navbar.Brand href="#home" className="brand-logo">
                    OptiTask
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-links">

                        <Nav.Link href="#services" className="nav-link-custom">Services</Nav.Link>
                        <Nav.Link href="#how-it-works" className="nav-link-custom">How It Works</Nav.Link>
                        <Nav.Link href="#robots" className="nav-link-custom">Robots</Nav.Link>
                        <Nav.Link href="#request" className="nav-link-custom"><button>Request A Robot</button></Nav.Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;