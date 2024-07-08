# Prime-imoveis
 Sprint do 1º semestre de 2024

# Comando para criar o arquvio para trabalhar com o expo
npx create-expo-app@latest Nome_Do_Porjeto

# Comando para instalar as dependência mais recentes
npm install expo@latest

# Comando para atualizar as dependência mais recentes compatíveis com o Expo
npx expo install --fix

# Comando para verificar se tem algum erro nas dependências do expo
npx expo-doctor

# Instalando os icons para usar do react native
npm install --save react-native-vector-icons

# Instalando a biblioteca react-navigation para navegação entre telas
npm install @react-navigation/native @react-navigation/stack

# Instalando os pacotes com a fonte desejada
npx expo install @expo-google-fonts/poppins expo-font

# Atualizar o expo para a versão mais recente
npx expo install --check

# Instalando o FireBase
npm install --save @react-native-firebase/app

# Deixando o React Native Expo mais detalhado, pois o expo deixa oculto alguns itens
npx expo prebuild

# Instalando o firebase npm install firebase
npm install firebase

# Adicionando a bibliotes react native alerts para alertas mais personalizados
npx expo install react-native-dialog

# Instalando um armazenamento assincrono e nativo para salvar os dados das sessões
npm install @react-native-async-storage/async-storage

# Instalando pacotes para authenticação do firebase
npm install @react-native-firebase/auth
npm install @react-native-firebase/app

# Linkando com o react native com as funções do firebase
npx react-native run-android

# Instalando as depências para fazer authenticação com o Google
npm install @react-native-google-signin/google-signin 
npm install react-native-google-signin
@react-native-firebase/app

# Como usar o celular via usb para ver o projeto:
Instalar o SDK Platform Tools
Então configurar ele no path
para ent usar o comando:
NPX expo start --android

Comando (No cmd) para checar se o dispositivo ta conectado:
adb devices

# Instalando a versão mais recente do armazenamento assincrono
 npm install @react-native-async-storage/async-storage@latest

# Instalando biblioteca para menu lateral
npm install react-native-drawer (Código da versão antiga)

Versão atual:
npm install @react-navigation/native @react-navigation/drawer

npm install react-native-gesture-handler react-native-reanimated (Opcional)

# Tela de carregamento personalizada
npm install expo-app-loading

(Serve para fazer uma tela de carregamento personalizada)

# Instalando biblioteca para a filtragem do home
npm install react-native-picker-select

# Instalando dependencia para usar a API
npm install axios

# Criando Apk mobile!!!!!

Código para atualizar o expo cli:
npm install -g expo-cli

Gerar Aab:
eas build -p android

Nesse comando ele vai pedir email e senha, então coloque o seu email e senha do site da expo, se não tiver crie uma conta.

Em seguida ele pergunta se deseja criar um EAS project, então responder "Y"

E ele pergunta se desseja gerar uma nova Android Keystore e caso você não tiver ou nem saber que bosta é essa, então responder "Y"

Depois de fazer dowload você vai receber um arquivo com a extensão aab

Para transformar de aab para apk
Instalar esse arquivo do github: bundletool-all-1.17.0.jar

usar esse comando: java -jar bundletool-all-1.17.0.jar build-apks --bundle=/path/to/your/aab/file.aab --output=/path/to/output/apk/file.apk

Código para gerar o apk: 
é a mesma coisa, só ler: https://docs.expo.dev/build-reference/apk/

depois de fazer as devidas alterações é so rodar o código: 
eas build -p android --profile preview

E no final depois de construir o build, é só ir na sua conta expo nos projetos e vai estar la para fazer o dowloading no apk