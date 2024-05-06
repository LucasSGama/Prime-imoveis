import React from "react";
import './Footer.css';
import background_footer from '../../images/Background-footer-prime-prime.png';
import footer_logo from '../../images/Logo-Prime-Prime_Prime.png'

export function Footer() {
    return (
        <footer>
            <img src={background_footer} className="background_footer" alt="Background_Footer"></img>
            <div className="Conteudo_footer">
                <div className="Esquerda_footer">
                    <h1 className="Titulo-footer">Siga o Prime nas redes sociais</h1>
                    <img src={footer_logo} className="footer-logo" alt="Footer_Logo"></img>
                </div>
                <div className="Direita_footer">
                <div className="Redes_Sociais">
                    <a href="https://pt-br.facebook.com/" className="Links_Redes_Sociais"><i className="bi bi-tiktok"></i> Tiktok</a>
                    <a href="https://www.instagram.com/primeimoveis2015/" className="Links_Redes_Sociais"><i className="bi bi-instagram"></i> Instagram</a>
                    <a href="https://www.tiktok.com/pt-BR/" className="Links_Redes_Sociais"><i className="bi bi-facebook"></i> Facebook</a>
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
