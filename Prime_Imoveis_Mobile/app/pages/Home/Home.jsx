import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseConfig from '../../../Data/firebaseConfig';

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

    return (
        <View style={styles.HomeContainer}>
            <Text style={styles.HomeText}>Você está logado!</Text>
            {userEmail && <Text style={styles.HomeText}>E-mail: {userEmail}</Text>}
            <Button
                title="Logout"
                onPress={() => {
                    // Implemente a lógica de logout aqui
                    // Por exemplo, auth.signOut()
                    navigation.navigate('Login');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    HomeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HomeText: {
        fontSize: 18,
        marginBottom: 10,
    },
});
