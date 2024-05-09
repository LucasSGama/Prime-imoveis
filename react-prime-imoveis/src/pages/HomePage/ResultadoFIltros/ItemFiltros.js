import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import "./ItemFiltros.css";

export function ItemFiltros({ link, imagem, nome, descricao }) {
    const [isFavorited, setIsFavorited] = useState(false); // Estado para controlar se o item está favoritado

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited); // Alternar entre favoritado e não favoritado
    };

    return (
        <div className="caixa-filtros">
            <div className="imagens-caixa-filtros">
                <div className="descricao-item-filtros">
                    <img src={imagem} alt="produto" className="banner-menor-filtros" width="100%" height="170px" style={{ borderBottom: '2px solid black' }} />
                    <div className="descricao-item-filtros descricao-filtros-texto">
                        <p>{nome}<FontAwesomeIcon
                                icon={isFavorited ? solidHeart  : faHeart}
                                className="heart-icon"
                                onClick={toggleFavorite}
                                style={{ marginLeft: "5px", color: isFavorited ? "red" : "black", cursor: "pointer" }}
                            /></p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <p style={{ fontSize: "14px", opacity: "70%" }} className="Txt_Descricao_Produto">{descricao}</p>
                        </div>
                        <div className="Acessar_item_filtros">
                            <a href={link} className="TXT_Acessar_item_filtros">Mais detalhes</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemFiltros;
