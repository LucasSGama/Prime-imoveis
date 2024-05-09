import React from "react";
import ItemFiltros from "./ItemFiltros";
import imoveis from "../../../DB/Imóveis";
import './ResultadoFIltros.css';

export function ResultadoFIltros({ tipoCompra, tipoResidencia, estadoSelecionado }) {

    const resultadosFiltrados = imoveis.filter((imovel) => {
        return (
            (tipoCompra === "Nenhum" || imovel.Tipo_De_Compra === tipoCompra) &&
            (tipoResidencia === "Nenhum" || imovel.Tipo_de_Residencia === tipoResidencia) &&
            (estadoSelecionado === "Nenhum" || imovel.Estado === estadoSelecionado)
        );
    });

    if (tipoCompra === "Nenhum" && tipoResidencia === "Nenhum" && estadoSelecionado === "Nenhum") {
        return (
            <div className="Container_Resultado_Filtro">
                <h1>Nenhum filtro foi colocado</h1>
            </div>
        );
    }
    
    return (
        <div className="Container_Resultado_Filtro">
            {resultadosFiltrados.map((imovel, index) => (
            <ItemFiltros
                Tipo_De_Compra={imovel.Tipo_De_Compra}
                Tipo_de_Residencia={imovel.Tipo_de_Residencia}
                Estado={imovel.Estado}
                key={index}
                link={imovel.link}
                imagem={imovel.imagem}
                nome={imovel.nome}
                descricao={imovel.descricao}
            />
            ))}
        </div>
    );
}

export default ResultadoFIltros;