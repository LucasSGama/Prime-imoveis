import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    header: {
      marginTop: 25,
      flexDirection: 'row',
      height: 80,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      zIndex: 999,
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
      justifyContent: 'center',
      gap: 35,
    },
    Headertitle: {
      color: '#000000',
      fontSize: 18,
      fontFamily: 'Poppins_700Bold',

    },
    HeaderdropdownToggle: {
      flexDirection: 'row', // Para alinhar o texto "Perfil" e o ícone de seta horizontalmente
      alignItems: 'center',
    },
    Headerdropdown: {
      position: 'absolute',
      top: '170%', // Ajuste conforme necessário
      right: '-15%', // Ajuste conforme necessário
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: 'black',
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 10,
      padding: 10,
      zIndex: 999,
      gap: 7,
      backgroundColor: 'rgba(	41, 166, 222, 1)',

      ...Platform.select({
        ios: {
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.35,
          shadowRadius: 15,
        },
        android: {
          elevation: 8,
        },
      }),
    },
    HeaderdropdownBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
    },
    HeaderdropdownText: {
      width: 100,
      // textAlign: 'center',
      marginLeft: 10,
      paddingVertical: 10,
      fontSize: 16.5,
      fontFamily: 'Poppins_400Regular',
      
    }
  });

  export default styles;
  
  