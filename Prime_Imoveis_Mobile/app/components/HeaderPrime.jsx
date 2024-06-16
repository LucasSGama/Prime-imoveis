import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, Animated, Dimensions } from 'react-native';
import logo from "../../Image/Logo_Sem_Nome-Prime-Prime_Prime.png";
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Importando o ícone MaterialIcons
import styles from './HeaderPrimeCSS';
import SideMenu from './SideMenu';

// Importante conexão com a authenticação do usuario
import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const auth = getAuth();

const { width } = Dimensions.get('window');

const Header = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const translateX = useState(new Animated.Value(width))[0]; // Starting position is off-screen

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const openMenu = () => {
    setMenuVisible(true);
    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(translateX, {
      toValue: width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setMenuVisible(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // O usuário está logado
            setUserEmail(user.email);
        } else {
            // O usuário não está logado
            setUserEmail(null);
        }
    });

    return unsubscribe; // Limpa o listener ao desmontar o componente
}, []);

const handleLogout = () => {
    signOut(auth)
        .then(() => {
            // Logout bem-sucedido
            toggleDropdown();
            navigation.navigate('Login');
        })
        .catch((error) => {
            // Tratamento de erro
            console.error('Erro ao fazer logout:', error);
        });
};
  
  return (
    <View style={styles.header}>
      <View style={styles.HeaderleftContainer}>
        {/* Adicionando a logo no canto esquerdo */}
        <Image source={logo} style={styles.Headerlogo} />
      </View>
      <View style={styles.HeadermiddleContainer}>
        {/* Texto "Home" e "Perfil" um ao lado do outro */}
        <View style={styles.HeadertitleContainer}>
          <Text style={styles.Headertitle}>Home</Text>


          <TouchableOpacity onPress={toggleDropdown} style={styles.HeaderdropdownToggle}>
            <Text style={styles.Headertitle}>Perfil</Text>
            {/* Ícone de seta apontando para baixo */}
            <MaterialIcons name={showDropdown ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={25} color="black" />
          </TouchableOpacity>
          {showDropdown && (
            <View style={styles.Headerdropdown}>
              {/* Adicionando ícones aos itens do dropdown */}
              <TouchableOpacity style={styles.HeaderdropdownBox}>
                <MaterialIcons name="account-circle" size={20} color="black" />
                <Text style={styles.HeaderdropdownText}>Ver Perfil</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.HeaderdropdownBox}>
                <FontAwesome name="heart" size={20} color="black" />
                <Text style={styles.HeaderdropdownText}>Favoritos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.HeaderdropdownBox} onPress={handleLogout}>
                <MaterialIcons name="exit-to-app" size={20} color="black" />
                <Text style={styles.HeaderdropdownText}>Sair</Text>
              </TouchableOpacity>
            </View>
          )}



        </View>
      </View>
      <View style={styles.HeaderrightContainer}>
        {/* Ícone do menu hambúrguer */}
        <TouchableOpacity onPress={openMenu}>
          <MaterialIcons name="menu" size={60} color="black" />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="none"
        onRequestClose={closeMenu}
      >
        <TouchableOpacity style={modalStyles.overlay} onPress={closeMenu} />
        <Animated.View style={[modalStyles.menu, { transform: [{ translateX }] }]}>
          <SideMenu onClose={closeMenu} />
        </Animated.View>
      </Modal>
    </View>
  );
}

// Estilos do modal
const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  menu: {
    position: 'absolute',
    right: 0,
    width: '50%',
    height: '100%',
    backgroundColor: '#fff',
    elevation: 5,
  },
});

export default Header;
