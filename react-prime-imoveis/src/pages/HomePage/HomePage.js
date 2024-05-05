import React from 'react';
import Header from "../../components/Header/Header";
import './HomePage.css';
import Banner from '../../images/Banner-prime.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Agora importando de free-solid-svg-icons
import Carrosel from './Carrosel/Carrosel';
import Footer from '../../components/Footer/Footer';


export function HomePage() {
    return (
        <>
            <Header/>
            <br /><br /><br /><br />
            <div className="d-flex justify-content-center">
                <img src={Banner} alt="A" className="img-fluid mx-auto" />
            </div>

            <div className="blue-bar"><span className='Txt_ColoqueInformacoes'>Coloque as informações</span></div>
                    <br /><br /><br />
            
            <div className="container">
                <div className="Form-Filtro d-flex justify-content-center">
                    <select name="Tipo de compra" className='Tipo_De_Compra' id="">
                        <option className='Opcoes' value="Aluguel">Aluguel</option>
                        <option className='Opcoes' value="Compra">Compra</option>
                    </select> 
                </div>
                    <form action="" className='Formulario_Filtro'>
                        <select name="Tipo" className='Filter' id="#">
                            <option className='Opcoes' value="Nenhum">Nenhum</option>
                        </select>
                        <select name="Bairro_Condominio" className='Filter' id="A">
                            <option className='Opcoes' value="Nenhum">Nenhum</option>
                            <option className='Opcoes' value="Condomínio">Condomínio</option>
                            <option className='Opcoes' value="Bairro">Bairro</option>
                        </select>
                        <select name="Cidades" className='Filter' id="A">
                            <option className='Opcoes' value="Cidades">Nenhum</option>
                            <option className='Opcoes' value="A">AAAAA</option>
                        </select>
                        <button type="submit" className='Btn_Pesquisar_Filtros'>Pesquisar</button>
                    </form>
            </div>
                
            <br />
            <div className="blue-bar"></div>
        <br /><br />
    <div className="container">
            <div className='Carrosel'>
                <h1>Populares<FontAwesomeIcon icon={faHeart} /></h1>
            </div>
            
            <Carrosel/>
            </div> 
            
            <Footer/>
        </>

    )
}
