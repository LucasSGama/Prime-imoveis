import React from "react";
import './Header.css';

function Header() {
    return(
        <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src={process.env.PUBLIC_URL + "/img/Logo-Prime-Prime_Prime.png"} alt="Logo" width="80" height="80" class="d-inline-block align-text-top"></img>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Buscar Imóveis
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Anunciar imóvel</a>
                    </li>
                    <li class="nav-item WhatsApp-item">
                    <a class="nav-link active" aria-current="page" href="#">Anunciar imóvel</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
    )
}

export default Header;