import React from 'react';
import Header from "../../components/Header/Header"
import './HomePage.css';
import Banner from '../../images/Banner-prime.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Agora importando de free-solid-svg-icons
import logo from '../../images/Logo-Prime-Prime_Prime.png'
import Carrosel from './Carrosel/Carrosel';


export function HomePage() {
    return (
        <>
            <Header/>
            <div className="d-flex justify-content-center">
                <img src={Banner} alt="A" className="img-fluid mx-auto" />
            </div>

            <div className="blue-bar"><span>Coloque as informações</span></div>
                    <br /><br /><br />
            
            <div className="container">
                <div className="Form-Filtro">
                <select name="Tipo de compra" id="">
                        <option value="">Aluguel</option>
                        <option value="">Compra</option>
                    </select> 
                </div>
            </div>
                
            <div className="blue-bar"></div>
        <br /><br />
    <div className="container">
            <div className='Carrosel'>
                <h1>Populares<FontAwesomeIcon icon={faHeart} /></h1>
            </div>
            
            <Carrosel/>
            </div> 
        </>
    )
}
