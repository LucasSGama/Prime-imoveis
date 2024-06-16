import React, { useEffect, useState } from "react";
import { View, Text, Button, Image } from 'react-native';
import styles from './HomeCSS';
import HeaderPrime from '../../components/HeaderPrime';
import Banner from '../../../Image/Banner-prime.png';

export default function Home() {
    return (
        <View style={styles.HomeContainer}>
            {/* Adicionando o Header */}
            <HeaderPrime />
            {/* Adicionando o banner */}
            <Image source={Banner} style={styles.BannerImage} resizeMode="cover" />
            <View style={styles.HomeBlueBar}>
                <View style={styles.HomeFiltroTitulo}>
                    <Text style={styles.HomeFiltroTituloTexto}>Busque Imóveis</Text>
                </View>
            </View>
        </View>
    );
}

