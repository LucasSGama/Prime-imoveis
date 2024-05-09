import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Banner from '../../images/Banner-prime.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Carrosel from './Carrosel/Carrosel';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

export function HomePage() {
    const [estados, setEstados] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth(); // Obter a instância de autenticação do Firebase

        // Use onAuthStateChanged para verificar o estado de autenticação do usuário
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Se o usuário estiver autenticado, definir loggedIn como true
                setLoggedIn(true);
            } else {
                // Se o usuário não estiver autenticado, definir loggedIn como false e redirecioná-lo para a página de login
                setLoggedIn(false);
                navigate("/SemLoginPage");
            }
        });
        
        async function fetchEstados() {
            try {
                const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
                setEstados(response.data);
            } catch (error) {
                console.error('Erro ao obter os estados:', error);
            }
        }

        fetchEstados();

        return () => unsubscribe();
    }, [navigate]);

    return (
        <>
            <Header/>
            <br /><br /><br /><br />
            <div className="d-flex justify-content-center">
                <img src={Banner} alt="Banner" className="img-fluid mx-auto" />
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
                <Carrosel />
            </div>
            <Footer />
        </>
    );
}
