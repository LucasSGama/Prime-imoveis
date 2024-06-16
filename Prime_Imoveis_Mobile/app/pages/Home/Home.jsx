import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importe o ícone desejado
import styles from './HomeCSS';
import HeaderPrime from '../../components/HeaderPrime';
import Banner from '../../../Image/Banner-prime.png';
import axios from 'axios';
import ItemImovel from './components/ItemImovel';
import imoveis from '../../../Data/Imóveis';


export default function Home() {
    const [selectedValue, setSelectedValue] = useState("java");
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Função para buscar estados da API do IBGE
        const fetchStates = async () => {
          try {
            const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
            const states = response.data.map(state => ({
              label: state.nome,
              value: state.sigla
            }));
            setItems([{ label: 'Nenhum', value: 'Nenhum' }, ...states]);
            setLoading(false);
          } catch (error) {
            console.error('Erro ao buscar estados: ', error);
            setLoading(false);
          }
        };
    
        fetchStates();
      }, []);

    return (
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.HomeContainer} >
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    {/* Adicionando o Header */}
                    <HeaderPrime />
                    {/* Adicionando o banner */}
                    <Image source={Banner} style={styles.BannerImage} resizeMode="cover" />
                    <View style={styles.HomeBlueBar}>
                        <View style={styles.HomeFiltroTitulo}>
                            <Text style={styles.HomeFiltroTituloTexto}>Busque Imóveis</Text>
                        </View>
                    </View>
                    <View style={styles.HomeFiltrosLayout}>
                        <Text style={styles.FiltrosLayoutTitulo}>Aplique seus filtros</Text>
                        <View style={styles.FiltrosInputBox}>
                            <RNPickerSelect
                                placeholder={{
                                    label: 'Tipo de compra',
                                    value: null,
                                    
                                    
                                }}
                                onValueChange={(value) => setSelectedValue(value)}
                                items={[
                                    { label: 'Nenhum', value: 'Nenhum' },
                                    { label: 'Aluguel', value: 'Aluguel' },
                                    { label: 'Compra', value: 'Compra' },
                                ]}
                                style={pickerSelectStyles}
                                useNativeAndroidPickerStyle={false}
                                Icon={() => <Icon name="arrow-drop-down" size={24} color="gray" />}
                            />
                            <RNPickerSelect
                                placeholder={{
                                    label: 'Tipo de Residencia',
                                    value: null,
                                }}
                                onValueChange={(value) => setSelectedValue(value)}
                                items={[
                                    { label: 'Nenhum', value: 'Nenhum' },
                                    { label: 'Condomínio', value: 'Condomínio' },
                                    { label: 'Bairro', value: 'Bairro' },
                                ]}
                                style={pickerSelectStyles}
                                useNativeAndroidPickerStyle={false}
                                Icon={() => <Icon name="arrow-drop-down" size={24} color="gray" />}
                            />

                            <RNPickerSelect
                                placeholder={{
                                    label: 'Estado',
                                    value: null,
                                }}
                                onValueChange={(value) => setSelectedValue(value)}
                                items={items}
                                style={pickerSelectStyles}
                                useNativeAndroidPickerStyle={false}
                                Icon={() => <Icon name="arrow-drop-down" size={24} color="gray" />}
                            />
                        </View>
                        <View style={styles.FiltrosLayoutBlueBar}></View>
                        <View style={styles.FiltrosLayoutResultado}>
                        {imoveis.map((imovel, index) => (
                                <ItemImovel
                                    key={index}
                                    imagem={imovel.imagem}
                                    nome={imovel.nome}
                                    descricao={imovel.descricao}
                                    preco={imovel.preco} // Certifique-se de que a propriedade 'preco' existe no array imoveis
                                />
                            ))}
                        </View>
                    </View>
                </>
            )}
        </View>
        </ScrollView>
    );
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width: '100%',
        backgroundColor: '#E8E7E7',
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 10,
    },
    inputAndroid: {
        width: 250,
        alignSelf: 'center',
        backgroundColor: '#E8E7E7',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 10,
        fontFamily: 'Poppins_400Regular',
    },
    iconContainer: {
        top: '20%',
        right: 10,
    },
    placeholder: {
        color: '#9EA0A4',
    },
});