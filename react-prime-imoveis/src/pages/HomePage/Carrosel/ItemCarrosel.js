import React from "react";
import "./ItemCarrosel.css"

export function ItemCarrosel({ link, imagem, nome, descricao}) {
    return(
        <div className="caixa-scrool-horizontal">
            <div className="imagens-caixa">
                <a href={link} className="descricao-podcast">
                    <img src={imagem} alt="produto" className="banner-menor"  width="100%" height="170px" style={{ borderBottom: '2px solid black' }} />
                    <p className="descricao-podcast descricao-podcast-texto">{nome} <br /> <p style={{ fontSize: "14px", opacity: "70%" }}>{descricao}</p></p>
                </a>
            </div>
        </div>
    );
}

export default ItemCarrosel;
