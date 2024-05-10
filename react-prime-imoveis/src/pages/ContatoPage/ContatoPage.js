import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './ContatoPage.css';
import MapaGoogle from "./MapaGoogle";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Alert from 'react-bootstrap/Alert';

export function ContatoPage() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [email, setEmail] = useState('');


    useEffect(() => {
        const auth = getAuth(); // Obter a instância de autenticação do Firebase

        // Use onAuthStateChanged para verificar o estado de autenticação do usuário
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Usuário logado:", user);
                // Se o usuário estiver autenticado, definir loggedIn como true
                setLoggedIn(true);
                setEmail(user.email); // Set the email state variable to the user's email

            } else {
                // Se o usuário não estiver autenticado, definir loggedIn como false e redirecioná-lo para a página de login
                console.log("Nenhum usuário logado");

                setLoggedIn(false);
                navigate("/SemLoginPage");
            }
        });
    })
    
    const firebaseConfig = {
        apiKey: "AIzaSyAMCviqLmTay3J4yEv-Xc1gLh0kZa9M0ec",
        authDomain: "prime-imoveis-77d1d.firebaseapp.com",
        projectId: "prime-imoveis-77d1d",
        storageBucket: "prime-imoveis-77d1d.appspot.com",
        messagingSenderId: "520048431287",
        appId: "1:520048431287:web:4415225dbd32e9ae363d32",
        measurementId: "G-XY4XT3ZBLM"
    };
    
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore();

    const handleSubmit = async (event) => {
        event.preventDefault();

        
        
        const nome = event.target.elements.nome.value;
        const email = event.target.elements.email.value;
        const mensagem = event.target.elements.mensagem.value;

        try {
            await addDoc(collection(db, "MensagensContato"), {
                nome: nome,
                email: email,
                mensagem: mensagem
            });
            console.log("Mensagem enviada com sucesso!");
            // Aqui você pode exibir uma mensagem de sucesso para o usuário, se desejar
            setShowSuccessAlert(true);
            setShowErrorAlert(false);
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            // Aqui você pode exibir uma mensagem de erro para o usuário, se desejar
            setShowSuccessAlert(true);
            setShowErrorAlert(false);
        }
    };

    return(
        <>
        <Header/>
            <br /><br /><br /><br />
            <div className="topo-azul-contato">
                <div className="Esquerda_topo_azul_contato">
                    <h1 className="TXT_titulo_contato">Quer entrar em <span>CONTATO</span>?</h1>
                </div>
            </div>
            <div className="Corpo_Contato">
                <div className="Esquerda_Corpo_Contato">
                    <div className="Endereco_contato">
                        <p className="Rua_Endereco_contato">Praça Dr. Armando Arruda Pereira, 100
                        <br />Santa Teresinha, Santo André 
                        <br />SP, 09210-550</p>
                    </div>
                    <div className="Endereco_GoogleMaps">
                        <MapaGoogle />
                    </div>
                </div>
                <div className="Direita_Corpo_Contato">
                    <form className="Deixar_Mensagem_Contato" onSubmit={handleSubmit}>
                        <div className="Titulo_form_msg_contato">
                            Deixe aqui a sua mensagem
                        </div>
                        <div className="Meio_formulario_contato">
                            <div className="ValoresInputsContato">
                                <div className="LayoutsInputsGeral LayoutValorNome">
                                    <label className="LabelsTelaContato LabelValorNome">Nome:</label>
                                    <input className="InputsTelaContato" name="nome" required/>
                                </div>
                                <div className="LayoutsInputsGeral LayoutValorEmail">
                                    <label className="LabelsTelaContato LabelValorEmail">Email:</label>
                                    <input className="InputsTelaContato" name="email" value={email} required/>
                                </div>
                                <div className="LayoutsInputsGeral LayoutValorProblema">
                                    <label className="LabelsTelaContato LabelValorProblema">Como podemos ajudar?</label>
                                    <textarea className="InputsTelaContato" name="mensagem" required/>
                                </div>
                            </div>
                        </div>
                        <div className="Final_formulario_contato">
                        <Alert variant="success" show={showSuccessAlert} className="Aviso_de_erro_Contato" onClose={() => setShowSuccessAlert(false)} > Mensagem enviada com sucesso! </Alert>
                        <Alert variant="danger" show={showErrorAlert} className="Aviso_de_erro_Contato" onClose={() => setShowErrorAlert(false)} > Erro ao enviar mensagem. Por favor, tente novamente. </Alert>                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ContatoPage;
