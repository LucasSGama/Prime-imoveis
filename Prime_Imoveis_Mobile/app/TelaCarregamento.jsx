import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import GifCarregamento from "../Image/X26U.gif";

const LoadingScreen = () => {
  return (
      <View style={styles.container}>
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
  gif: {
    width: 200, // Ajuste o tamanho do gif conforme necessário
    height: 200, // Ajuste o tamanho do gif conforme necessário
  },
});

export default LoadingScreen;
