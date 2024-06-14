import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import logo from "../../Image/Logo_Sem_Nome-Prime-Prime_Prime.png";
import menu from "../../Image/55003.png";
import { MaterialIcons } from '@expo/vector-icons'; // Importando o ícone MaterialIcons
import styles from './HeaderPrimeCSS';
import Drawer from 'react-native-drawer';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  let drawer;


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

    
  
  const openDrawer = () => {
      drawer.open();
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
            <MaterialIcons name={showDropdown ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="black" />
          </TouchableOpacity>
          {showDropdown && (
            <View style={styles.Headerdropdown}>
              {/* Aqui você pode adicionar as opções do dropdown */}
              <Text>Opção 1</Text>
              <Text>Opção 2</Text>
              <Text>Opção 3</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.HeaderrightContainer}>
        {/* Ícone do menu hambúrguer */}
        <Drawer
      ref={(ref) => { drawer = ref; }}
      content={<View><Text>Menu lateral</Text></View>}
      type="overlay"
      side="left"
      tapToClose={true}
      openDrawerOffset={0.2}
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      tweenHandler={(ratio) => ({
        main: { opacity: (2 - ratio) / 2 }
      })}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={openDrawer}>
          <Text>Menu Hamburguer</Text>
        </TouchableOpacity>
      </View>
    </Drawer>
        {/* <TouchableOpacity onPress={() => console.log("Menu hambúrguer clicado!")}>
          <Image source={menu} style={styles.HeadermenuIcon} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

export default Header;

