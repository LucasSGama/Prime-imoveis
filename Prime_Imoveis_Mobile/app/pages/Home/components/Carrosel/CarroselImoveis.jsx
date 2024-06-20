import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import imoveis from '../../../../../Data/Imóveis';
import ItemImovel from './ItemCarrosel';

export default function CarroselImoveis() {
    // Limitar a exibição a apenas 10 imóveis
    const imoveisExibidos = imoveis.slice(0, 10);

    return (
        <ScrollView horizontal={true} style={styles.HomePopularesCarrosel} showsHorizontalScrollIndicator={false}>
            {imoveisExibidos.map((imovel, index) => (
                <ItemImovel 
                    key={index} 
                    imagem={imovel.imagem}
                    nome={imovel.nome} 
                    descricao={imovel.descricao} 
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    HomePopularesCarrosel: {
        display: 'flex',
        width: '95%',
        flexDirection: 'row',
        padding: 10,
    },
});
