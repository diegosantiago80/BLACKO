import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget"


export const NavBar = () => {
    return (
    
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">BLACKO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Hogar</Nav.Link>
            <Nav.Link href="#features">Electro</Nav.Link>
            <Nav.Link href="#pricing">Indumentaria</Nav.Link>
          </Nav>
        </Container>
        <CartWidget />
        </Navbar>
      
   
    
    );
};