import React from 'react';
import "./global.css" 
import { HomePage } from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Cadastro from './pages/Cadastro/Cadastro';
import { LogarPage } from './pages/LogarPage/LogarPage';

export function App() {
  return ( 
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/LogarPage" element={<LogarPage />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
    // <HomePage/>
  )
}
