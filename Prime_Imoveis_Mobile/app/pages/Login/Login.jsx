import React from 'react';
import { View, Image, Text, TextInput, Button, SafeAreaView } from 'react-native';
import styles from "./LoginCSS"
import ImagemTopoLogin from "../../../Image/Imagem_ultra_prime.jpg"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const navigation = useNavigation(); 
    
  return (
    <SafeAreaView style={styles.containerLogin}>
    <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        {/* ++ PARTE DE CIMA DO LOGIN */}
      <View style={styles.loginTopo}>
        <View style={styles.loginTopoImagem}>
          <Image
            source={ImagemTopoLogin}
            style={styles.LoginImage}
            // resizeMode="cover"
          />
        </View>
        <View style={styles.LoginTopoTitulo}>
            <Text style={styles.LoginTextoTopoTitulo}>LOGIN</Text>
        </View>
      </View>
        {/* -- PARTE DE CIMA DO LOGIN */}

        {/* ++ PARTE DO MEIO DO LOGIN */}
        <View style={styles.LoginMeio}>
            <View style={styles.LoginMeioInputs}>

                {/* ++ INPUTS EMAIL */}
                <View style={styles.LoginLayoutInputsEmail}>
                    <Text>Email</Text>
                    <TextInput
                    style={[styles.Logininput, styles.LoginInputEmail]}
                    // value={username}
                    // onChangeText={setUsername}
                    placeholder="Insira seu Email"
                    />
                </View>
                {/* -- INPUTS EMAIL */}
                
                {/* ++ INPUTS SENHA */}
                <View style={styles.LoginInputsSenha}>
                    <Text>Senha</Text>
                        <TextInput
                        style={[styles.Logininput, styles.LoginInputSenha]}
                        // value={username}
                        // onChangeText={setUsername}
                        placeholder="Insira sua Senha"
                    />
                </View>
                {/* -- INPUTS EMAIL */}
                
                {/* ++ INPUTS CONFIRMA SENHA */}
                <View style={styles.LoginInputsConfirmaSenha}>
                    <Text>Confirme sua senha</Text>
                        <TextInput
                        style={[styles.Logininput, styles.LoginInputConfirmaSenha]}
                        // value={username}
                        // onChangeText={setUsername}
                        placeholder="Confirme sua senha"
                    />
                </View>
                {/* -- INPUTS CONFIRMA SENHA */}

                {/* ++ BOTÃO PARA CADASTRAR */}
                <View style={styles.LoginMeioBotão}>
                    <Button
                    title="Cadastrar"
                    // onPress={handleCadastrar}
                    />
                </View>
                {/* -- BOTÃO PARA CADASTRAR */}

            </View>
        </View>
        {/* -- PARTE DO MEIO DO LOGIN */}

        {/* ++ PARTE DE BAIXO DO LOGIN */}
        <View style={styles.LoginInferior}>
            <View style={styles.LoginGoToLogin}>
                <Text style={styles.LoginTextoGoToLogin}>Já tem uma conta? <Text style={styles.LoginButtonGoToCadastro} onPress={() => navigation.navigate('Cadastro')}>Cadastro</Text></Text>
            </View>
            <View style={styles.LoginLayoutAuthGoogle}>
                {/* Utilização da bliblioteca vector para pegar um icon */}
                <Text style={styles.LoginTextAuthGoogle}>Logar com Google:</Text>
                <Icon name="account-circle" size={30} color="#000" />
            </View>
        </View>
        {/* ++ PARTE DE BAIXO DO LOGIN */}
    </SafeAreaView>
  );
}