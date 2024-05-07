import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getFirestore, query, where, getDocs } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Alert from 'react-bootstrap/Alert';
import './Logar.css';
import imagemTeste from '../../images/Imagem_ultra_prime.jpg';
import Spinner from 'react-bootstrap/Spinner';

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
const auth = getAuth();

export function LogarPage() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Adicionado para controlar o estado de carregamento
    const navigate = useNavigate();
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Se o usuário estiver autenticado, redirecione para a página inicial
                navigate("/HomePage");
            }
        });

        // Retornar uma função de limpeza para desinscrever o observador
        return () => unsubscribe();
    }, [auth, navigate]);
    
    const db = getFirestore();
    const userCollectionRef = collection(db, 'users');

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); // Mostrar spinner ao iniciar o processo de login
    
        try {
            const q = query(userCollectionRef, where("email", "==", email));
            const querySnapshot = await getDocs(q);
    
            if (!querySnapshot.empty) {
                // Utilize a constante 'auth' para realizar a autenticação
                await signInWithEmailAndPassword(auth, email, senha);
                navigate("/HomePage");
            } else {
                setError("Usuário não encontrado. Por favor, verifique suas credenciais.");
                setLoading(false); // Reverter para o estado inicial após a verificação do banco de dados

            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            setError("Erro ao fazer login. Por favor, tente novamente mais tarde.");
            setLoading(false); // Reverter para o estado inicial após a verificação do banco de dados
        } finally {
            setLoading(false); // Reverter para o estado inicial após a verificação do banco de dados
        }
    };
    
    return(
        <>
        <br /><br /><br /><br />
        <div className="Login_container">
            <div className="Login_Esquerda">
                <img src={imagemTeste} className="Imagem_Login" alt="Image_Login"></img>
            </div>
            <div className="Login_Direita">
                <div className="Login_Titulo">
                    <h1>LOGIN</h1>
                </div>
                <form onSubmit={handleLogin} className="Formulario_Login">
                    <div className="Inputs">
                        <div className="Inputs_email">
                            <label>Email</label>
                            <input
                            type="email"
                            className="Input_Inserir"
                            id="Input_Email"
                            placeholder="@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className="Inputs_senha">
                            <label>Senha</label>
                            <input
                            type="password"
                            className="Input_Inserir"
                            id="Input_Senha"
                            placeholder="Insira sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="Opcoes_adicionais">
                        <div className="LembrarDeMim">
                            <input type="checkbox"></input>
                            <label>Lembrar de mim</label>
                        </div>
                        <a className="Btn_EsqueceuSenha" href="https://www.youtube.com/watch?v=r-yKCf5XWL0&rco=1">Esqueceu a senha?</a>
                    </div>
                    <div className="EnviarFormulario">
                        {loading ? (
                            <Spinner animation="border" variant="primary" className="Spinner" />
                        ) : (
                            <button type="submit" className="Btn_EnviarFormulario">Enviar</button>
                        )}
                    </div>
                </form>
                {error && <Alert variant="danger" className="Aviso_de_erro">{error}</Alert>}
                <div className="Cadastre-se">
                    <p className="Txt_Cadastro">Não tem uma conta?<Link to="../Cadastro" className="Btn_Cadastro">Cadastre-se</Link></p>
                </div>
                <div className="Login_Google">
                    <div className="Fundo_Google">
                        <a href="#"><i className="bi bi-google"></i></a>
                    </div>
                    <p>Logar com Google</p>
                </div>
            </div>
        </div>
        </>
    )
}
