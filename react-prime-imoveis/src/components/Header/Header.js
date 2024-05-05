import React from "react";
import './Header.css'
import logo from '../../images/Logo-Prime-Prime_Prime.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Agora importando de free-solid-svg-icons


function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary header">
      <Container>
        <div className="imagem">
          <img src={logo} alt="Logo" width="80px" height="80px"/>
        </div>
        {/* Adicionar o perfil aqui */}
        <NavDropdown title="Perfil" id="basic-nav-dropdown">
          <NavDropdown.Item href="#acessar_perfil">Acessar Perfil</NavDropdown.Item>
          <NavDropdown.Item href="#login">Login</NavDropdown.Item>
          <NavDropdown.Item href="#cadastrar">Cadastrar</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#sair">Sair</NavDropdown.Item>
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
            {/* Adicionar o dropdown aqui */}
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
