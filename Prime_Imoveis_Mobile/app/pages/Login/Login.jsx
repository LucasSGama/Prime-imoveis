import React from 'react';
import { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import styles from "./LoginCSS"
import ImagemTopoLogin from "../../../Image/Logo-Prime-Prime_Prime.png"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    // Usando o hook de navegação para obter acesso para ir para outra tela
    const navigation = useNavigation(); 
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
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
      const inputStyleEmail = email === ''? styles.LoginInputSemValor :
  email.includes('@gmail.com')? styles.LoginInputComValor :
  styles.LoginInputComValorInvalido;

   // Aqui verifica se tem algo digitado na senha
   const inputStyleSenha = senha ? styles.LoginInputComValor : styles.LoginInputSemValor;        

      const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

  return (
    <SafeAreaView style={styles.ConfigContainerLogin}>
    <ScrollView style={styles.containerLogin}>
        {/* ++ PARTE DE CIMA DO Login */}
      <View style={styles.LoginTopo}>
        <View style={styles.LoginTopoImagem}>
          <Image
            source={ImagemTopoLogin}
            style={styles.LoginImage}
            // resizeMode="cover"
          />
        </View>
        <View style={styles.LoginTopoTitulo}>
            <Text style={styles.LoginTopoTituloText}>Logar</Text>
        </View>
      </View>
        {/* -- PARTE DE CIMA DO Login */}

        {/* ++ PARTE DO MEIO DO Login */}
        <View style={styles.LoginMeio}>
            <View style={styles.LoginMeioInputs}>

                {/* ++ INPUTS EMAIL */}
                <View style={styles.LoginLayoutInputs}>
                    <Text style={styles.LoginLayoutInputsText}>Email</Text>
                    <TextInput
                    style={inputStyleEmail}
                    keyboardType="email-address"
                    placeholder="example@gmail.com"
                    onChangeText={handleEmailChange}
                    value={email}
                    />
                </View>
                {/* -- INPUTS EMAIL */}
                
                {/* ++ INPUTS SENHA */}
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
                    <Icon name={showPassword? "visibility" : "visibility-off"} size={24} color="#000" style={{ position: 'absolute', top: '65%', right: 15 }} onPress={handleShowPassword} />
                </View>
                {/* -- INPUTS EMAIL */}
                
                </View>

                {/* ++ BOTÃO PARA Logar */}
                <View style={styles.LoginLayoutMeioBotão}>
                        <TouchableOpacity style={styles.LoginMeioBotão} onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.LoginMeioBotaoText}>Logar</Text>
                        </TouchableOpacity>
                        <View style={styles.EsqueceuSenhaLayout}>
                            <Text style={styles.EsqueceuSenhaText}>Esqueceu a senha?</Text>
                        </View>
                </View>
                {/* -- BOTÃO PARA Logar */}

        </View>
        {/* -- PARTE DO MEIO DO Login */}

        {/* ++ PARTE DE BAIXO DO Login */}
        <View style={styles.LoginInferior}>
            <View style={styles.LoginGoToLogin}>
                <Text style={styles.LoginTextoGoToLogin}>Não tem uma conta? <Text style={styles.LoginButtonGoToLogin} onPress={() => navigation.navigate('Cadastro')}>Cadastrar</Text></Text>
            </View>
            <View style={styles.LoginLayoutAuthGoogle}>
                {/* Utilização da bliblioteca vector para pegar um icon */}
                <Text style={styles.LoginTextAuthGoogle}>Logar com Google:</Text>
                <Icon name="account-circle" size={30} color="#000" />
            </View>
        </View>
        {/* ++ PARTE DE BAIXO DO Login */}
        </ScrollView>
    </SafeAreaView>
  );
}