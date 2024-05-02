import React from "react";
import ItemCarrosel from "./ItemCarrosel";
import ImagemExemplo from "../../../images/Logo-Prime-Prime_Prime.png"
import "./Carrosel.css"

export function Carrosel() {
    return(
        <>
            <div className="scrool-horizontal">
            <ItemCarrosel
            link="#"
            imagem={ImagemExemplo}
            nome="Lucas"
            descricao="Negro"
            />
            <ItemCarrosel
            link="#"
            imagem={ImagemExemplo}
            nome="Lucas"
            descricao="Negro"
            />
            <ItemCarrosel
            link="#"
            imagem={ImagemExemplo}
            nome="Lucas"
            descricao="Negro"
            />
            </div>
        </>
    );
}

export default Carrosel;