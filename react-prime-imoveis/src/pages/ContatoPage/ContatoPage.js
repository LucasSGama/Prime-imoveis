import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './ContatoPage.css';
import MapaGoogle from "./MapaGoogle";

export function ContatoPage() {
    return(
        <>
            <div className="topo-azul-contato">
                <div className="Esquerda_topo_azul_contato">
                    <h1 className="TXT_titulo_contato">Quer entrar em <span>CONTATO</span>?</h1>
                </div>
            </div>
            <div className="Corpo_Contato">
                <div className="Esquerda_Corpo_Contato">
                    <div className="Endereco_contato">
                        <p className="Rua_Endereco_contato">Praça Dr. Armando Arruda Pereira, 100</p>
                        <p className="CidadeEstado_Endereco_contato">Santa Teresinha, Santo André </p>
                        <p className="SiglaCep_Endereco_contato">SP, 09210-550</p>
                    </div>
                    <div className="Endereco_GoogleMaps">
                    <MapaGoogle />
                    </div>
                </div>
                <div className="Direita_Corpo_Contato">
                    <form className="Deixar_Mensagem_Contato">
                        <div className="Titulo_form_msg_contato">
                            Deixe aqui a sua mensagem
                        </div>
                        <div className="Meio_formulario_contato">
                            <div className="ValoresInputsContato">
                                <div className="LayoutValorNome">
                                    <label className="LabelValorNome">Nome:</label>
                                    <input className="InputsTelaContato inputValornome"/>
                                </div>
                                <div className="LayoutValorEmail">
                                    <label className="LabelValorEmail">Email:</label>
                                    <input className="InputsTelaContato inputValorEmail"/>
                                </div>
                                <div className="LayoutValorProblema">
                                    <label className="LabelValorProblema">Como podemos ajudar?</label>
                                    <input className="InputsTelaContato inputValorProblema"/>
                                </div>
                            </div>
                        </div>
                        <div className="Final_formulario_contato">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContatoPage;