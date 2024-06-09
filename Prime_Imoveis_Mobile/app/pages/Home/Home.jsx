import React from "react";
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";

export default function Home() {
    const navigation = useNavigation(); 

    
    return(
        <View style={styles.HomeContainer}>
            <Text>
                Você logou
            </Text>
            <Text onPress={() => navigation.navigate('Cadastro')}>Cadastrar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    HomeContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})