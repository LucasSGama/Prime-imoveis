import React from "react";
import './Logar.css'
import Imagem from '../../images/Imagem_Esquerda_Login.jpeg';

export function LogarPage() {
    return(
        <>
        <br /><br /><br /><br />
        <div className="Login_container">
            <div className="Login_Esquerda">
                <img src={Imagem} className="Imagem_Login" alt="Image_Login"></img>
            </div>
            <div className="Login_Direita">
                <div className="Login_Titulo">
                    <h1>LOGIN</h1>
                </div>
                <form action="" method="POST" className="">
                    <div className="Inputs">
                        <div className="Inputs_email">
                            <p>Email:</p>
                            <input type="email" className="Input_Inserir" id="Input_Email" placeholder="@gmail.com"></input>
                        </div>
                        <div className="Inputs_senha">
                            <p>Senha:</p>
                            <input type="password" className="Input_Inserir" id="Input_Senha" placeholder="Insira sua senha"></input>
                        </div>
                    </div>
                    <div className="Opcoes_adicionais">
                        <input type="checkbox" placeholder=""></input>
                        <label>Lembrar de mim</label>

                        <a className="Btn_EsqueceuSenha">Esqueceu a senha?</a>
                    </div>
                    <div className="EnviarFormulario">
                        <button type="submit" className="Btn_EnviarFormulario">Enviar</button>
                    </div>
                </form>
                <div className="Cadastro">
                    <p className="Txt_Cadastro">Não tem uma conta?<a href="#" className="Btn_Cadastro" >Cadastre-se</a></p>
                </div>
                <div className="Login_Google">
                    <div className="Fundo_Google">
                        <i className="bi bi-google"></i>
                    </div>
                    <p>Logar com Google</p>
                </div>
            </div>
        </div>
        </>
    )
}