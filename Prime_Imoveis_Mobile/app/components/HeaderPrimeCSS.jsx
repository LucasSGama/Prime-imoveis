import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
      marginTop: 25,
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      height: 80,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    HeaderleftContainer: {
      flex: 1,
    },
    HeadermiddleContainer: {
      flex: 2,
      alignItems: 'center',
    },
    HeaderrightContainer: {
      flex: 1,
      alignItems: 'flex-end',
    },
    Headerlogo: {
      width: 70,
      height: 70,
    },
    HeadertitleContainer: {
      flexDirection: 'row', // Para alinhar os textos "Home" e "Perfil" horizontalmente
      alignItems: 'center',
    },
    Headertitle: {
      color: '#000000',
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 5, // Adiciona um espaço entre os textos "Home" e "Perfil"
      marginLeft: 20,
    },
    HeaderdropdownToggle: {
      flexDirection: 'row', // Para alinhar o texto "Perfil" e o ícone de seta horizontalmente
      alignItems: 'center',
    },
    Headerdropdown: {
      position: 'absolute',
      top: 50, // Ajuste conforme necessário
      right: 20, // Ajuste conforme necessário
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#CCCCCC',
      padding: 10,
      zIndex: 999,
    },
    HeadermenuIcon: {
      marginRight: 10,
      width: 40,
      height: 40,
    },
  });

  export default styles;
  