import React from 'react';
import { View, Image, Text, TextInput, Button, SafeAreaView} from 'react-native';
import styles from "./CadastroCSS"
import ImagemTopoCadastro from "../../../Image/Mulher_Abrindo_Porta_Prime.png"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    // Usando o hook de navegação para obter acesso para ir para outra tela
    const navigation = useNavigation(); 

  return (
    <SafeAreaView style={styles.containerCadastro}>
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
            <Text>Cadastro</Text>
        </View>
      </View>
        {/* -- PARTE DE CIMA DO CADASTRO */}

        {/* ++ PARTE DO MEIO DO CADASTRO */}
        <View style={styles.CadastroMeio}>
            <View style={styles.CadastroMeioInputs}>

                {/* ++ INPUTS EMAIL */}
                <View style={styles.CadastroLayoutInputsEmail}>
                    <Text>Email</Text>
                    <TextInput
                    style={[styles.Cadastroinput, styles.CadastroInputEmail]}
                    // value={username}
                    // onChangeText={setUsername}
                    placeholder="Insira seu Email"
                    />
                </View>
                {/* -- INPUTS EMAIL */}
                
                {/* ++ INPUTS SENHA */}
                <View style={styles.CadastroInputsSenha}>
                    <Text>Senha</Text>
                        <TextInput
                        style={[styles.Cadastroinput, styles.CadastroInputSenha]}
                        // value={username}
                        // onChangeText={setUsername}
                        placeholder="Insira sua Senha"
                    />
                </View>
                {/* -- INPUTS EMAIL */}
                
                {/* ++ INPUTS CONFIRMA SENHA */}
                <View style={styles.CadastroInputsConfirmaSenha}>
                    <Text>Confirme sua senha</Text>
                        <TextInput
                        style={[styles.Cadastroinput, styles.CadastroInputConfirmaSenha]}
                        // value={username}
                        // onChangeText={setUsername}
                        placeholder="Confirme sua senha"
                    />
                </View>
                {/* -- INPUTS CONFIRMA SENHA */}

                {/* ++ BOTÃO PARA CADASTRAR */}
                <View style={styles.CadastroMeioBotão}>
                    <Button
                    title="Cadastrar"
                    // onPress={handleCadastrar}
                    />
                </View>
                {/* -- BOTÃO PARA CADASTRAR */}

            </View>
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
    </SafeAreaView>
  );
}