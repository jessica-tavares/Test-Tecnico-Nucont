import React from 'react';
import FormularioCadastro from '../../components/FormularioCadastro';
import './styles.css';

function Home() {
  return (
    <>
      <div className="first-container">
        <div className="first-left">
          <h1 className="yellow-text">CONSULTORIA CONTÁBIL NA PRÁTICA</h1>
          <p className="white-text"><span>Indentifique</span> situações problemáticas nas empresas através de análise de indicadores e entenda como fazer uma consultoria contábil eficiente. Seja o responsável por ajudar as pequenas empresas a se recuperarem dos impactos gerados pela crise econômica, aplicando a contabilidad como ciência.</p>
          <p className="white-text footer-text">com Fernanda Rocha - CEO da Nucont</p>
        </div>
        <div className="first-rigth">
          <FormularioCadastro />
        </div>
      </div>
    </>
  )
}

export default Home;
