import React from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import { useState } from 'react';

function App() {
  
  const [nome, setNome] = useState('ok')
  
  return (
    <div className="App">
        <h1>Turma 2022 ADS</h1>
        <p>{nome}</p>  
        <hr/>


        <Article
          titulo = "Disciplina"
          descricao = "Descrição da Disciplina"
        />
    </div>
  );
}

export default App;
