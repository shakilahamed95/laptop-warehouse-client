import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <div className='mb-3'>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-5'>
                <Container>
                    <Navbar.Brand as={Link} to="/"> Laptop Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-light' as={Link} to="/inventory">Manage inventory</Nav.Link>
                            {
                                user ? <button onClick={handleSignout} className='btn btn-dark'>Log Out</button>
                                    : <Nav.Link className='text-light' as={Link} to="/login">Login</Nav.Link>
                            }
                            <Nav.Link className='text-light' as={Link} to="/signup">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;