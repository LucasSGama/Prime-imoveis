import React, {useEffect, useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Alert} from 'react-native';
import styles from "./CadastroCSS"
import ImagemTopoCadastro from "../../../Image/Mulher_Abrindo_Porta_Prime.png"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import firebaseConfig from '../../../Data/firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, getReactNativePersistence } from 'firebase/auth';


import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
    // Usando o hook de navegação para obter acesso para ir para outra tela
    const navigation = useNavigation(); 
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [confirmSenha, setConfirmSenha] = useState('');
    const [invalidConfirmSenha, setInvalidConfirmSenha] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [selection, setSelection] = useState({ start: 0, end: 0 });
    const [erro, setErro] = useState(null);

   
    // ++INTERFACE DA PÁGINA
    // Verificação do input de email para verificar se algo de errado
     // Verificação do input de email para verificar se algo de errado
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
      ? styles.CadastroInputSemValor
      : email.includes('@gmail.com') && !invalidEmail
      ? styles.CadastroInputComValor
      : styles.CadastroInputComValorInvalido;

   // Aqui verifica se tem algo digitado na senha
   const inputStyleSenha = senha ? styles.CadastroInputComValor : styles.CadastroInputSemValor;

    // Verificar se a senha ta igual
    const handleConfirmSenhaChange = (text) => {
        setConfirmSenha(text);
        if (text!== senha) {
          setInvalidConfirmSenha(true);
        } else {
          setInvalidConfirmSenha(false);
        }
      };

      useEffect(() => {
        if (confirmSenha!== '' && confirmSenha!== senha) {
          setInvalidConfirmSenha(true);
        } else {
          setInvalidConfirmSenha(false);
        }
      }, [senha, confirmSenha]);
      
      
      const inputStyleConfirmSenha = confirmSenha === ''? styles.CadastroInputSemValor : invalidConfirmSenha? styles.CadastroInputComValorInvalido : styles.CadastroInputComValor;
        

      const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
      }
      // --INTERFACE DA PÁGINA


      // ++BANCO DE DADOS
      
      const firebaseApp = initializeApp(firebaseConfig);
      const auth = getAuth(firebaseApp, {
      persistence: getReactNativePersistence(AsyncStorage)
      });
      

      // Criar usuario com email e senha
      const handleCreateUser = async () => {
        if (!email ||!senha ||!confirmSenha) {
          Alert.alert('Erro', 'Preencha todos os campos');
          return;
        }
      
        if (invalidEmail || invalidConfirmSenha) {
          Alert.alert('Erro', 'Verifique os campos de email e senha');
          return;
        }

        if (senha.length < 6) {
          Alert.alert('Erro', 'Senha fraca. A senha deve ter pelo menos 6 caracteres');
          return;
        }
      
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
          const user = userCredential.user;
          Alert.alert(`Usuário criado com sucesso`, `UID: ${user.uid}`);
          navigation.navigate('Login'); // Redireciona para a tela de login
        } catch (error) {
          Alert.alert('Erro', `Erro ao criar usuário: ${error.message}`);
        }
      };

      // Criar usuario com o Google
      
      // --BANCO DE DADOS

  return (
    <SafeAreaView style={styles.ConfigContainerCadastro}>
    <ScrollView style={styles.containerCadastro}>
        {/* ++ PARTE DE CIMA DO CADASTRO */}
      <View style={styles.cadastroTopo}>
        <View style={styles.cadastroTopoImagem}>
          <Image
            source={ImagemTopoCadastro}
            style={styles.CadastroImage}
            // resizeMode="cover"
          />
        </View>
        <View style={styles.CadastroTopoTitulo}>
            <Text style={styles.CadastroTopoTituloText}>Cadastro</Text>
        </View>
      </View>
        {/* -- PARTE DE CIMA DO CADASTRO */}

        {/* ++ PARTE DO MEIO DO CADASTRO */}
        <View style={styles.CadastroMeio}>
            <View style={styles.CadastroMeioInputs}>

                {/* ++ INPUTS EMAIL */}
                <View style={styles.CadastroLayoutInputs}>
                    <Text style={styles.CadastroLayoutInputsText}>Email</Text>
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
                {/* -- INPUTS EMAIL */}
                
                {/* ++ INPUTS SENHA */}
                <View style={styles.CadastroLayoutInputs}>
                    <Text style={styles.CadastroLayoutInputsText}>Senha</Text>
                        <TextInput
                        secureTextEntry={!showPassword}
                        style={[inputStyleSenha, styles.CadastroInputSenha]}
                        value={senha}
                        onChangeText={setSenha}
                        placeholderTextColor="gray"
                        placeholder="Insira sua Senha"
                    />
                    <Icon name={showPassword? "visibility" : "visibility-off"} size={24} color="#000" style={{ position: 'absolute', top: '65%', right: 15 }} onPress={handleShowPassword} />
                </View>
                {/* -- INPUTS EMAIL */}
                
                {/* ++ INPUTS CONFIRMA SENHA */}
                <View style={styles.CadastroLayoutInputs}>
                    <Text style={styles.CadastroLayoutInputsText}>Confirme sua senha</Text>
                    <TextInput
                        secureTextEntry={!showConfirmPassword}
                        style={[inputStyleConfirmSenha, styles.CadastroInputConfirmaSenha]}
                        value={confirmSenha}
                        onChangeText={handleConfirmSenhaChange}
                        placeholder="Confirme sua senha"
                    />
                    <Icon name={showConfirmPassword? "visibility" : "visibility-off"} size={24} color="#000" style={{ position: 'absolute', top: '65%', right: 15 }} onPress={handleShowConfirmPassword} />
                </View>
                {/* -- INPUTS CONFIRMA SENHA */}
                </View>

                {/* ++ BOTÃO PARA CADASTRAR */}
                <View style={styles.CadastroLayoutMeioBotão}>
                        <TouchableOpacity style={styles.CadastroMeioBotão} onPress={handleCreateUser}>
                            <Text style={styles.CadastroMeioBotaoText}>Cadastrar</Text>
                        </TouchableOpacity>
                </View>
                {/* -- BOTÃO PARA CADASTRAR */}

        </View>
        {/* -- PARTE DO MEIO DO CADASTRO */}

        {/* ++ PARTE DE BAIXO DO CADASTRO */}
        <View style={styles.CadastroInferior}>
            <View style={styles.CadastroGoToLogin}>
                <Text style={styles.CadastroTextoGoToLogin}>Já tem uma conta? <Text style={styles.CadastroButtonGoToLogin} onPress={() => navigation.navigate('Login')}>Login</Text></Text>
            </View>
            <View style={styles.CadastroLayoutAuthGoogle}>
                {/* Utilização da bliblioteca vector para pegar um icon */}
                <Text style={styles.CadastroTextAuthGoogle}>Logar com Google:</Text>
                <Icon name="account-circle" size={30} color="#000"/>
            </View>
        </View>
        {/* ++ PARTE DE BAIXO DO CADASTRO */}
        </ScrollView>
    </SafeAreaView>
  );
}