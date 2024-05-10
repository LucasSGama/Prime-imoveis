import React from 'react';
import "./global.css" 
import { HomePage } from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
import Cadastro from './pages/Cadastro/Cadastro';
import { LogarPage } from './pages/LogarPage/LogarPage';
// import Footer from './components/Footer/Footer';
import { SemLoginPage } from './pages/SemLoginPage/SemLoginPage'; // Importe o componente SemLoginPage
import ContatoPage from './pages/ContatoPage/ContatoPage';


export function App() {
  return ( 
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/LogarPage" element={<LogarPage />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/SemLoginPage" element={<SemLoginPage />} /> {/* Adicione a rota para SemLoginPage */}
          <Route path="/ContatoPage" element={<ContatoPage />} />

        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
    // <HomePage/>
  )
}
