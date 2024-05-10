import React from "react";
import './Footer.css';
import background_footer from '../../images/Background-footer-prime-prime.png';
// import footer_logo from '../../images/Logo-Prime-Prime_Prime.png'
import { useNavigate } from 'react-router-dom';


export function Footer() {
    const navigate = useNavigate()
    
    const IrParatelaDeContato = () => {
        navigate('/ContatoPage')
    }
    return (
        <footer>
            <img src={background_footer} className="background_footer" alt="Background_Footer"></img>
            <div className="Conteudo_footer">
                {/* <h1>Contatos</h1> */}
                <div className="Esquerda_footer">
                        <div className="Entrar_em_contato">
                            <p>Mande mensagem para o suporte!</p>
                        </div>
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
