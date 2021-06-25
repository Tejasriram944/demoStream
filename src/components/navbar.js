import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary">
            <Container>
                <Navbar.Brand className='font-weight-bold text-light'><Link to='/' className='text-white'>DEMO Streaming</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto ">
                        <Nav.Link href="#deets" className="text-light">Log in</Nav.Link>
                        <Button variant="dark">Start your free trail</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;
