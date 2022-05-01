import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mb-3'>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-5'>
                <Container>
                    <Navbar.Brand as={Link} to="/"> Laptop Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-light' as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link className='text-light' as={Link} to="/signup">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;