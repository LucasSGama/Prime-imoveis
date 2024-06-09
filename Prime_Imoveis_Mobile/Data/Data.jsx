// Importe o arquivo google-services.json no seu projeto e armazene-o em uma variável
const googleServicesJson = require('../android/app/google-services.json');

// Extraia as informações necessárias do google-services.json
const {
  project_info: { project_id, storage_bucket },
  client: [{ client_info: { mobilesdk_app_id, android_client_info: { package_name } }, api_key }],
} = googleServicesJson;

// Crie o objeto firebaseConfig com as informações extraídas
const firebaseConfig = {
  apiKey: api_key[0].current_key,
  authDomain: `${project_id}.firebaseapp.com`,
  projectId: project_id,
  storageBucket: `${storage_bucket}`,
  messagingSenderId: mobilesdk_app_id.split(':')[1],
  appId: mobilesdk_app_id,
};

// Use o firebaseConfig para inicializar o Firebase no seu projeto React Native
// Exemplo de uso:
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);

// Agora você pode usar o 'app' para acessar os serviços do Firebase, como Firestore, Auth, etc.
