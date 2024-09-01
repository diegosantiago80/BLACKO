import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="d-flex justify-content-between">
                <div className="d-flex">
                    <Navbar.Brand href="/">BLACKO</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/category/Hogar">Hogar</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/Electro">Electro</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/Indumentaria">Indumentaria</Nav.Link>
                    </Nav>
                </div>
                <div className="cart-container">
                    <CartWidget />
                </div>
            </Container>
        </Navbar>
    );
};
