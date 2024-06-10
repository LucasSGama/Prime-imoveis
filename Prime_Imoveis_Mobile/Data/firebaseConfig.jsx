// firebaseConfig.js

const googleServicesJson = require('../android/app/google-services.json');
// Extraia as informações necessárias do google-services.json
const {
  project_info: { project_id, storage_bucket },
  client: [{ client_info: { mobilesdk_app_id, android_client_info: { package_name } }, api_key }],
} = googleServicesJson;

const firebaseConfig = {
  apiKey: api_key[0].current_key,
  authDomain: `${project_id}.firebaseapp.com`,
  projectId: project_id,
  storageBucket: `${storage_bucket}`,
  messagingSenderId: mobilesdk_app_id.split(':')[1],
  appId: mobilesdk_app_id,
};


export default firebaseConfig;