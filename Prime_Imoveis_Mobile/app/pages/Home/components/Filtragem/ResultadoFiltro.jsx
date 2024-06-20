import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import imoveis from '../../../../../Data/Imóveis';
import ItemImovel from './ItemImovel';

const ResultadoFiltro = ({ tipoCompra, tipoResidencia, estadoSelecionado }) => {
    const [quantidadeExibida, setQuantidadeExibida] = useState(6);

    const resultadosFiltrados = imoveis.filter((imovel) => {
        return (
            (tipoCompra === "Nenhum" || imovel.Tipo_De_Compra === tipoCompra) &&
            (tipoResidencia === "Nenhum" || imovel.Tipo_de_Residencia === tipoResidencia) &&
            (estadoSelecionado === "Nenhum" || imovel.Estado === estadoSelecionado)
        );
    });

    const handleMostrarMais = () => {
        let novaQuantidade = quantidadeExibida + 6;
        if (novaQuantidade > resultadosFiltrados.length) {
            novaQuantidade = resultadosFiltrados.length;
        }
        // Se novaQuantidade é ímpar, subtrai 1 para garantir que seja par
        if (novaQuantidade % 2 !== 0) {
            novaQuantidade -= 1;
        }
        setQuantidadeExibida(novaQuantidade);
    };

    const handleMostrarMenos = () => {
        let novaQuantidade = quantidadeExibida - 6;
        if (novaQuantidade < 6) {
            novaQuantidade = 6;
        }
        // Se novaQuantidade é ímpar, subtrai 1 para garantir que seja par
        if (novaQuantidade % 2 !== 0) {
            novaQuantidade -= 1;
        }
        setQuantidadeExibida(novaQuantidade);
    };

    useEffect(() => {
        setQuantidadeExibida(6);
    }, [tipoCompra, tipoResidencia, estadoSelecionado]);

    if (tipoCompra === "Nenhum" && tipoResidencia === "Nenhum" && estadoSelecionado === "Nenhum") {
        return (
            <View style={styles.NenhumFiltro}>
                <Text style={styles.NenhumFiltroTexto}>Nenhum filtro foi colocado!</Text>
            </View>
        );
    }

    if (resultadosFiltrados.length === 0) {
        return (
            <View style={styles.NenhumFiltro}>
                <Text style={styles.NenhumFiltroTexto}>Nenhum item foi encontrado!</Text>
            </View>
        );
    }

    return (
        <>
            {resultadosFiltrados.slice(0, quantidadeExibida).map((imovel, index) => (
                <ItemImovel
                    key={index}
                    imagem={imovel.imagem}
                    nome={imovel.nome}
                    descricao={imovel.descricao}
                    preco={imovel.preco}
                />
            ))}
            {quantidadeExibida > 6 && (
                <TouchableOpacity style={styles.BotaoVerMais} onPress={handleMostrarMenos}>
                    <Text style={styles.TextoBotao}>Ver menos</Text>
                </TouchableOpacity>
            )}
            {resultadosFiltrados.length > quantidadeExibida && (
                <TouchableOpacity style={styles.BotaoVerMais} onPress={handleMostrarMais}>
                    <Text style={styles.TextoBotao}>Ver mais</Text>
                </TouchableOpacity>
            )}
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
    BotaoVerMais: {
        borderWidth: 1,
        borderColor: 'black',
        width: '40%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#29A6DE',
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    TextoBotao: {
        color: 'black',
        fontFamily: 'Poppins_700Bold',
        fontSize: 16,
    },
});

export default ResultadoFiltro;
