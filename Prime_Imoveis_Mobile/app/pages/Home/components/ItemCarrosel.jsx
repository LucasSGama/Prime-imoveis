import React, { useState } from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function ItemImovel({ imagem, nome, descricao }) {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };
    return (
        <View style={EstiloItemImovel.ItemImovelBox}>
            <Image source={imagem} style={EstiloItemImovel.ItemImovelImagem} />
            <View style={EstiloItemImovel.ItemImovelDetalhes}>
                <View>
                    <Text style={EstiloItemImovel.ItemImovelNome} numberOfLines={1}>{nome}</Text>
                    <Text style={EstiloItemImovel.ItemImovelDescricao} numberOfLines={3}>{descricao}</Text>
                    <TouchableOpacity onPress={toggleLike}>
                        <Icon name="favorite" size={20} color={liked ? 'red' : 'gray'} />
                    </TouchableOpacity>
                </View>
                <Text style={EstiloItemImovel.ItemImovelVerMais}>Clique para ver mais!</Text>
            </View>
        </View>
    );
}

const EstiloItemImovel = StyleSheet.create({
    ItemImovelBox: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginBottom: 20,
        width: 170,
        marginBottom: 30,
        marginRight: 15,
    },
    ItemImovelImagem: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 10,
    },
    ItemImovelDetalhes: {
        height: 150,
        maxHeight: 150,
        padding: 5,
        backgroundColor: 'rgba(136, 184, 218, 0.6)',
        shadowColor: 'rgba(31, 38, 135, 0.37)',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 32,
        borderBottomEndRadius: 10,
        overflow: 'hidden',
        justifyContent: 'space-between'
    },
    ItemImovelNome: {
        fontSize: 18,
        fontFamily: 'Poppins_700Bold',
    },
    ItemImovelDescricao: {
        fontSize: 11,
        textAlign: 'justify',
        fontFamily: 'Poppins_400Regular',
    },
    ItemImovelVerMais: {
        fontSize: 11,
        marginTop: 5,
        paddingTop: 5,
        color: 'black',
        paddingHorizontal: 5,
        textAlign: 'center',
        alignSelf: 'center',
        width: '100%',
        borderTopWidth: 1,
        borderColor: 'black',
        fontFamily: 'Poppins_400Regular',
    },
});
