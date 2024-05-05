import React, { useState } from "react";
import { faHeart as emptyHeart, faHeartbeat as filledHeart } from '@fortawesome/free-solid-svg-icons'; // Importando ícones de coração vazio e cheio
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import "./ItemCarrosel.css";

export function ItemCarrosel({ link, imagem, nome, descricao }) {
    const [isFavorited, setIsFavorited] = useState(false); // Estado para controlar se o item está favoritado

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited); // Alternar entre favoritado e não favoritado
    };

    return (
        <div className="caixa-scrool-horizontal">
            <div className="imagens-caixa">
                <div className="descricao-podcast">
                    <img src={imagem} alt="produto" className="banner-menor" width="100%" height="170px" style={{ borderBottom: '2px solid black' }} />
                    <div className="descricao-podcast descricao-podcast-texto">
                        <p>{nome}<FontAwesomeIcon
                                icon={isFavorited ? solidHeart  : faHeart}
                                className="heart-icon"
                                onClick={toggleFavorite}
                                style={{ marginLeft: "5px", color: isFavorited ? "red" : "black", cursor: "pointer" }}
                            /></p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <p style={{ fontSize: "14px", opacity: "70%" }} className="Txt_Descricao_Produto">{descricao}</p>
                        </div>
                        <div className="Acessar_item">
                            <a href={link} className="TXT_Acessar_item">Mais detalhes</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCarrosel;
