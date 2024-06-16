import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PrimeFooter = () => {
  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/rd_prime2015/');
  };

  return (
    <ImageBackground source={require('../../Image/Background-footer-prime-prime.png')} style={styles.FooterBackground}>
      <View style={styles.Footer}>
        <TouchableOpacity style={[styles.Footerbox, styles.FooterleftBox]}>
          <Text style={styles.FooterleftText}>Mande mensagem para o suporte!</Text>
        </TouchableOpacity>
        <View style={[styles.Footerbox, styles.FooterrightBox]}>
          <TouchableOpacity style={styles.FootericonContainer} onPress={handleInstagramPress}>
            <Icon name="instagram" size={30} color="#D82D7E" />
            <Text style={styles.FootericonText}>Instagram</Text>
          </TouchableOpacity>
          <View style={styles.FootericonContainer}>
            <Icon name="whatsapp" size={30} color="#7FFF00" />
            <Text style={styles.FootericonText}>WhatsApp</Text>
          </View>
          <View style={styles.FootericonContainer}>
            <Icon name="facebook" size={30} color="#1877F2" />
            <Text style={styles.FootericonText}>Facebook</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  FooterBackground: {
    width: '100%', // Garante que a imagem de fundo cubra todo o footer
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    overflow: 'hidden', // Evita que a imagem de fundo ultrapasse os limites do componente
    objectFit: 'cover',
  },
  Footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Garante que o footer ocupe toda a largura do componente
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  Footerbox: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  FooterleftBox: {
    marginRight: 10, // Ajuste de margem para separar as caixas
    backgroundColor: 'rgba(80, 120, 200, 0.30)', // Background com opacidade
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: 'rgba(80, 80, 80, 0.3)', // Sombra cinza claro com opacidade 0.3
  },
  FooterleftText: {
    color: '#000', // Cor do texto preto
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins_700Bold',
  },
  FooterrightBox: {
    display: 'flex',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: 10, // Ajuste de margem para separar as caixas
    backgroundColor: '#fff', // Fundo branco com opacidade 0.7
    flexDirection: 'column', // Alterado para coluna para alinhar os itens um abaixo do outro
    alignItems: 'flexstart',
    padding: 10,
  },
  FootericonContainer: {
    // borderBottomColor: 'black',
    // borderBottomRightRadius: 15,
    // borderRightWidth: 1,
    // borderBottomWidth: 1,
    // marginTop: 10
    width: '80%',
    height: 45,
    flexDirection: 'row', // Para colocar o ícone e o texto na mesma linha
    alignItems: 'center',
  },
  FootericonText: {
    color: '#000', // Cor do texto preto
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    marginLeft: 10, // Espaçamento entre o ícone e o texto
  },
});

export default PrimeFooter;
