import React from "react";
import './Logar.css'
import imagemTeste from '../../images/Imagem_ultra_prime.jpg';
import { Link } from 'react-router-dom';


export function LogarPage() {
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
                <form action="" method="POST" className="Formulario_Login">
                    <div className="Inputs">
                        <div className="Inputs_email">
                            <label>Email</label>
                            <input type="email" className="Input_Inserir" id="Input_Email" placeholder="@gmail.com"></input>
                        </div>
                        <div className="Inputs_senha">
                            <label>Senha</label>
                            <input type="password" className="Input_Inserir" id="Input_Senha" placeholder="Insira sua senha"></input>
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
                        <button type="submit" className="Btn_EnviarFormulario">Enviar</button>
                    </div>
                </form>
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