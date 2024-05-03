import React from "react";
import "./ItemCarrosel.css"

export function ItemCarrosel({ link, imagem, nome, descricao}) {
    return(
        <div className="caixa-scrool-horizontal">
            <div className="imagens-caixa">
                <div className="descricao-podcast">
                    <img src={imagem} alt="produto" className="banner-menor"  width="100%" height="170px" style={{ borderBottom: '2px solid black' }} />
                    <div className="descricao-podcast descricao-podcast-texto">
                        <p>{nome}</p>
                        <p style={{ fontSize: "14px", opacity: "70%" }} className="Txt_Descricao_Produto">{descricao}</p>
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
