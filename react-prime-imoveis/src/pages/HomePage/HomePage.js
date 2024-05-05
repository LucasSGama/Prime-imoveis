import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import './HomePage.css';
import Banner from '../../images/Banner-prime.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Agora importando de free-solid-svg-icons
import Carrosel from './Carrosel/Carrosel';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';



export function HomePage() {

    const [estados, setEstados] = useState([]);

    useEffect(() => {
      async function fetchEstados() {
        try {
          const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
          setEstados(response.data);
        } catch (error) {
          console.error('Erro ao obter os estados:', error);
        }
      }
  
      fetchEstados();
    }, []);
    
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
                    <p className='Tipo_De_Compra'>Aplique seus filtros</p>
                </div>
                    <form action="" className='Formulario_Filtro'>
                        <select name="Tipo_de_Compra" className='Filter' id="Tipo_de_Compra">
                            <option className='Opcoes' value="Nenhum">Nenhum</option>
                            <option className='Opcoes' value="Aluguel">Aluguel</option>
                            <option className='Opcoes' value="Compra">Compra</option>
                        </select>
                        <select name="Tipo_de_Residencia" className='Filter' id="TIpo_de_Residencia">
                            <option className='Opcoes' value="Nenhum">Nenhum</option>
                            <option className='Opcoes' value="Condomínio">Condomínio</option>
                            <option className='Opcoes' value="Bairro">Bairro</option>
                        </select>
                        <select name="Estados" className='Filter' id="Estados">
                            <option className='Opcoes' value="Nenhum">Nenhum</option>
                            {estados.map(estado => (
                            <option key={estado.id} className='Opcoes' value={estado.sigla}>{estado.nome}</option>
                        ))}
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
