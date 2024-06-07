import React from 'react';
import { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import styles from "./CadastroCSS"
import ImagemTopoCadastro from "../../../Image/Mulher_Abrindo_Porta_Prime.png"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

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



   
    
    // Verificação do input de email para verificar se algo de errado
    const handleEmailChange = (text) => {
        if (text === '') {
          setEmail('');
        }  else if (text.startsWith('@')) {
            setInvalidEmail(true);
            setEmail('');
      } else if (text.includes('@gmail.com')) {
          setEmail(text);
          setInvalidEmail(false);
        } else if (text.includes('@')) {
          setInvalidEmail(true);
          setEmail(text);
        } else {
          setEmail(text + '@gmail.com');
        }
      };

    //   Aqui coloca o "@gmail.com" apos digitar qualquer letra
      const inputStyleEmail = email === ''? styles.CadastroInputSemValor :
  email.includes('@gmail.com')? styles.CadastroInputComValor :
  styles.CadastroInputComValorInvalido;

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
      
      const inputStyleConfirmSenha = confirmSenha === ''? styles.CadastroInputSemValor : invalidConfirmSenha? styles.CadastroInputComValorInvalido : styles.CadastroInputComValor;
        

      const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
      }

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
                    placeholder="@gmail.com"
                    onChangeText={handleEmailChange}
                    value={email}
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
                    <Icon name={showPassword? "visibility" : "visibility-off"} size={24} color="#000" style={{ position: 'absolute', top: '60%', right: 15 }} onPress={handleShowPassword} />
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
                    <Icon name={showConfirmPassword? "visibility" : "visibility-off"} size={24} color="#000" style={{ position: 'absolute', top: '60%', right: 15 }} onPress={handleShowConfirmPassword} />
                </View>
                {/* -- INPUTS CONFIRMA SENHA */}
                </View>

                {/* ++ BOTÃO PARA CADASTRAR */}
                <View style={styles.CadastroLayoutMeioBotão}>
                        <TouchableOpacity style={styles.CadastroMeioBotão}>
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
                <Icon name="account-circle" size={30} color="#000" />
            </View>
        </View>
        {/* ++ PARTE DE BAIXO DO CADASTRO */}
        </ScrollView>
    </SafeAreaView>
  );
}