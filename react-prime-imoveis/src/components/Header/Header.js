import React from "react";
import './Header.css'
import logo from '../../images/Logo-Prime-Prime_Prime.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Agora importando de free-solid-svg-icons


function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="imagem">
          <img src={logo} alt="Logo" width="80px" height="80px"/>
        </div>
        <NavDropdown title="Buscar Imóveis" id="collapsible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Separated link
          </NavDropdown.Item>
        </NavDropdown>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Anunciar imóvel</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </Nav.Link>
            <Nav.Link href="#Favotitos">
                <FontAwesomeIcon icon={faHeart} /> Meus Favoritos
            </Nav.Link>
            <Nav.Link href="#Contato">Perfil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
