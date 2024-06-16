// SideMenu.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Substitua 'FontAwesome' pela biblioteca de ícones que você deseja usar

const SideMenu = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={stylesSideMenu.menu}>
      <View style={stylesSideMenu.header}>
        <Icon name="bars" size={24} color="#000" style={stylesSideMenu.headerIcon} />
        <Text style={stylesSideMenu.headerTitle}>Menu</Text>
      </View>
      <TouchableOpacity style={stylesSideMenu.menuItem} onPress={() => { navigation.navigate('Home'); onClose(); }}>
        <Icon name="bullhorn" size={20} color="#000" style={stylesSideMenu.menuIcon} />
        <Text style={stylesSideMenu.menuItemText}>Anunciar imóvel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesSideMenu.menuItem} onPress={() => { navigation.navigate('Profile'); onClose(); }}>
        <Icon name="search" size={20} color="#000" style={stylesSideMenu.menuIcon} />
        <Text style={stylesSideMenu.menuItemText}>Procurar Imóveis</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesSideMenu.menuItem} onPress={() => { navigation.navigate('Other'); onClose(); }}>
        <Icon name="building" size={20} color="#000" style={stylesSideMenu.menuIcon} />
        <Text style={stylesSideMenu.menuItemText}>Meus imóveis</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesSideMenu.menuItem} onPress={() => { navigation.navigate('Other'); onClose(); }}>
        <Icon name="shopping-cart" size={20} color="#000" style={stylesSideMenu.menuIcon} />
        <Text style={stylesSideMenu.menuItemText}>Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const stylesSideMenu = StyleSheet.create({
    menu: {
        flex: 1,
        padding: 20,
        
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 20,
        paddingBottom: 10,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
      },
    //   headerIcon: {
    //     transform: [{ rotate: '90deg' }], // Rotaciona o ícone em 180 graus
    //   },
      headerTitle: {
        fontSize: 20,
        marginLeft: 10,
        marginTop: 3,
        fontFamily: 'Poppins_700Bold',
      },
      menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
      },
      menuIcon: {
        marginRight: 10,
      },
      menuItemText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
      },
    });

export default SideMenu;
