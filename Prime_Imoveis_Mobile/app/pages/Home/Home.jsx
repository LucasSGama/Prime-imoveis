import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';
import styles from './HomeCSS';
import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import firebaseConfig from '../../../Data/firebaseConfig';
import HeaderPrime from '../../components/HeaderPrime';

// Inicializar Firebase
const auth = getAuth();

export default function Home() {
    const navigation = useNavigation();
    const [userEmail, setUserEmail] = useState(null);

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
                navigation.navigate('Login');
            })
            .catch((error) => {
                // Tratamento de erro
                console.error('Erro ao fazer logout:', error);
            });
    };

    return (
        <View style={styles.HomeContainer}>
            <HeaderPrime />
            <Text style={styles.HomeText}>Você está logado!</Text>
            {userEmail && <Text style={styles.HomeText}>E-mail: {userEmail}</Text>}
            <Button
                title="Logout"
                onPress={handleLogout}
            />
        </View>
    );
}

