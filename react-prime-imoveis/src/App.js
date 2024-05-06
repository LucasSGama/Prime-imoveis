import React from 'react';
import "./global.css" 
import { HomePage } from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Cadastro from './pages/Cadastro/Cadastro';
import { LogarPage } from './pages/LogarPage/LogarPage';
import Footer from './components/Footer/Footer';

export function App() {
  return ( 
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LogarPage" element={<LogarPage />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    // <HomePage/>
  )
}
