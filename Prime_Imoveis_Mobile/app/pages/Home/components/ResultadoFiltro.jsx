import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import imoveis from '../../../../Data/Imóveis';
import ItemImovel from './ItemImovel';

export default function ResultadoFiltro({ tipoCompra, tipoResidencia, estadoSelecionado }) {
    const resultadosFiltrados = imoveis.filter((imovel) => {
        return (
            (tipoCompra === "Nenhum" || imovel.Tipo_De_Compra === tipoCompra) &&
            (tipoResidencia === "Nenhum" || imovel.Tipo_de_Residencia === tipoResidencia) &&
            (estadoSelecionado === "Nenhum" || imovel.Estado === estadoSelecionado)
        );
    });

    if (tipoCompra === "Nenhum" && tipoResidencia === "Nenhum" && estadoSelecionado === "Nenhum") {
        return (
            <View style={styles.NenhumFiltro}>
                <Text style={styles.NenhumFiltroTexto}>Nenhum filtro foi colocado!</Text>
            </View>
        );
    }

    return (
        <>
            {resultadosFiltrados.map((imovel, index) => (
                <ItemImovel
                    key={index}
                    imagem={imovel.imagem}
                    nome={imovel.nome}
                    descricao={imovel.descricao}
                    preco={imovel.preco}
                />
            ))}
        </>
    );
}

const styles = StyleSheet.create({
    NenhumFiltro: {
        display: 'flex',
        width: '100%',
    },
    NenhumFiltroTexto: {
        textAlign: 'center',
        fontFamily: 'Poppins_700Bold',
    },
})