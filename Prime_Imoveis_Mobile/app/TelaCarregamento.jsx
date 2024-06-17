import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import LogoCarregamento from "../Image/Logo-Prime-Prime_Prime.png";
import GifCarregamento from "../Image/7yAb.gif"

const LoadingScreen = ({ loadingText  }) => {
  return (
      <View style={styles.container}>
        <Image
          source={LogoCarregamento} // Substitua pelo seu logo desejado
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.CarregamentoTexto}>{loadingText}</Text>
        <Image
          source={GifCarregamento} // Substitua pelo seu gif de loading desejado
          style={styles.gif}
          resizeMode="contain"
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Cor de fundo da tela de carregamento
  },
  CarregamentoTexto: {
    padding: 20,
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
  },
  logo: {
    width: 200, // Ajuste o tamanho do logo conforme necessário
    height: 200, // Ajuste o tamanho do logo conforme necessário
    marginBottom: 20,
  },
  gif: {
    width: 200, // Ajuste o tamanho do gif conforme necessário
    height: 200, // Ajuste o tamanho do gif conforme necessário
  },
});

export default LoadingScreen;
