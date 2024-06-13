import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import ImagemTopoLogin from "../../../Image/Logo-Prime-Prime_Prime.png";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from '../../../Data/firebaseConfig';
import styles from './LoginCSS';

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Login() {
    const navigation = useNavigation();
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [selection, setSelection] = useState({ start: 0, end: 0 });
    
    const handleEmailChange = (text) => {
      let newText = text;
      let newSelection = selection;
  
      if (text === '') {
          setEmail('');
          setInvalidEmail(false);
          newSelection = { start: 0, end: 0 };
      } else if (text.startsWith('@')) {
          setInvalidEmail(true);
          setEmail('');
          newSelection = { start: 0, end: 0 };
      } else if (text.includes('@gmail.com')) {
          const domainPart = text.split('@gmail.com')[1];
          if (domainPart === '') {
              setEmail(text);
              setInvalidEmail(false);
          } else {
              setEmail(text);
              setInvalidEmail(true);
          }
      } else if (text.includes('@')) {
          setInvalidEmail(true);
          setEmail(text);
      } else {
          newText = text + '@gmail.com';
          setEmail(newText);
          newSelection = { start: text.length, end: text.length };
      }
  
      setSelection(newSelection);
  };

    // Aqui coloca o "@gmail.com" após digitar qualquer letra
    const inputStyleEmail = email === ''
      ? styles.LoginInputSemValor
      : email.includes('@gmail.com') && !invalidEmail
      ? styles.LoginInputComValor
      : styles.LoginInputComValorInvalido;

    const inputStyleSenha = senha ? styles.LoginInputComValor : styles.LoginInputSemValor;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Login bem-sucedido
                const user = userCredential.user;
                Alert.alert('Login bem-sucedido!', `Bem-vindo, ${user.email}`);
                navigation.navigate('Home');
            })
            .catch((error) => {
                // Erro no login
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert('Erro no login', errorMessage);
            });
    };

    return (
        <SafeAreaView style={styles.ConfigContainerLogin}>
            <ScrollView style={styles.containerLogin}>

                <View style={styles.LoginTopo}>
                    <View style={styles.LoginTopoImagem}>
                        <Image
                            source={ImagemTopoLogin}
                            style={styles.LoginImage}
                        />
                    </View>
                    <View style={styles.LoginTopoTitulo}>
                        <Text style={styles.LoginTopoTituloText}>Logar</Text>
                    </View>
                </View>
                
                <View style={styles.LoginMeio}>
                    <View style={styles.LoginMeioInputs}>
                        <View style={styles.LoginLayoutInputs}>
                            <Text style={styles.LoginLayoutInputsText}>Email</Text>
                            <TextInput
                                style={inputStyleEmail}
                                keyboardType="email-address"
                                placeholder="example@gmail.com"
                                onChangeText={handleEmailChange}
                                value={email}
                                selection={selection}
                                onSelectionChange={(event) => setSelection(event.nativeEvent.selection)}
                            />
                        </View>
                        
                        <View style={styles.LoginLayoutInputs}>
                            <Text style={styles.LoginLayoutInputsText}>Senha</Text>
                            <TextInput
                                secureTextEntry={!showPassword}
                                style={[inputStyleSenha, styles.LoginInputSenha]}
                                value={senha}
                                onChangeText={setSenha}
                                placeholderTextColor="gray"
                                placeholder="Insira sua Senha"
                            />
                            <Icon 
                                name={showPassword ? "visibility" : "visibility-off"} 
                                size={24} 
                                color="#000" 
                                style={{ position: 'absolute', top: '65%', right: 15 }} 
                                onPress={handleShowPassword} 
                            />
                        </View>
                    </View>
                    
                    <View style={styles.LoginLayoutMeioBotão}>
                        <TouchableOpacity style={styles.LoginMeioBotão} onPress={handleLogin}>
                            <Text style={styles.LoginMeioBotaoText}>Logar</Text>
                        </TouchableOpacity>
                        <View style={styles.EsqueceuSenhaLayout}>
                            <Text style={styles.EsqueceuSenhaText}>Esqueceu a senha?</Text>
                        </View>
                    </View>
                </View>
                
                <View style={styles.LoginInferior}>
                    <View style={styles.LoginGoToLogin}>
                        <Text style={styles.LoginTextoGoToLogin}>Não tem uma conta? 
                            <Text style={styles.LoginButtonGoToLogin} onPress={() => navigation.navigate('Cadastro')}>
                                Cadastrar
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.LoginLayoutAuthGoogle}>
                        <Text style={styles.LoginTextAuthGoogle}>Logar com Google:</Text>
                        <Icon name="account-circle" size={30} color="#000" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
