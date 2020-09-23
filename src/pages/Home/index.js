import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ReactGA from 'react-ga';
import FormularioCadastro from '../../components/FormularioCadastro';
import Topics from '../../components/Topics';
import './styles.css';

function Home() {

  const onClickEvent = () => {
    ReactGA.event({
      category: 'Button-Scroll',
      action: 'Rolando a página até o formulário',
    });
  }

  return (
    <>
      <div className="first-container">
        <div className="first-left">
          <h1 className="yellow-title-1">CONSULTORIA CONTÁBIL NA PRÁTICA</h1>
          <p className="white-text"><span>Indentifique</span> situações problemáticas nas empresas através de análise de indicadores e entenda como fazer uma consultoria contábil eficiente. Seja o responsável por ajudar as pequenas empresas a se recuperarem dos impactos gerados pela crise econômica, aplicando a contabilidad como ciência.</p>
          <p className="white-text footer-text">com Fernanda Rocha - CEO da Nucont</p>
        </div>
        <div className="first-rigth">
          <FormularioCadastro textAnalitycs="primeiro formulário" />
        </div>
      </div>
      <div className="second-container">
        <h1>COMO SER ESSENCIAL NA TOMADA DE DECISÃO DAS EMPRESAS?</h1>
        <p className="white-text center">Responder essa pergunta <span>pode ser mais fácil</span> do que parece: A Consultoria Contábil é sua aliada para analisar a real situação das empresas. No entanto, para colocar em prática, você precisa de informações e dedicação.</p>
        <span>Vamos conversar a respeito?</span>
        <AnchorLink href="#subscription">
          <button className="btn-link-div" onClick={() => onClickEvent()}>
            QUERO ASSITIR A SÉRIE: CONSULTORIA CONTÁBIL NA PRÁTICA
          </button>
        </AnchorLink>
      </div>
      <div className="third-container">
        <div>
          <h1 className="title">ESSA SÉRIE É PRA VOCÊ CONTADOR:</h1>
          <Topics text="Que quer ter processos contábeis ágeis" />
          <Topics text="Que quer aumentar o valor percebido pelo seu cliente e ajudá-lo na tomada de decisão" />
          <Topics text="Que deseja ver na prática como aplicar uma consultoria contábil eficaz e com método claro" />
        </div>
        <hr/>
        <div>
          <h1 className="title">O QUE SERÁ ABORDADO NA SÉRIE:</h1>
          <Topics text="Análises de indicadores de empresas reais no contexto atual" />
          <Topics text="Doenças financeiras como insolvência, undertrading e excesso de endividamento" />
          <Topics text="Metodologia científica para aplicação de consultoria contábil" />
          <Topics text="Pesquisas e comparativos de mercado para entender o contexto das pequenas empresas na pandemia" />
        </div>
        <hr/>
      </div>
      <div className="fourth-container">
        <h1 className="yellow-title">QUEM É FERNANDA ROCHA?</h1>
        <div className="fourth-infos">
          <img src={require('../../assets/AtivSSo12.webp')} alt="Foto da Fernanda fundadora da Nucont" />
          <div className="fourth-infos-text">
            <h4>Fala galera, beleza?</h4>
            <p>Eu sou a Fernanda Rocha, <span>fundadora da Nucont e do Movimento Contabilidade Sem Chatice.</span> 
              Como empresária contábil eu já estive no fundo do poço, a ponto de largar tudo. Até que através da 
              Contabilidade Consultiva me reergui e achei uma maneira de entregar mais valor para as empresas e 
              com isso fui mais valorizada. <span>Cansada de ser tratada como mal necessário,</span> decidi fazer 
              diferente. Corri atrás e resolvi encarar de frente o desafio de aplicar na prática a verdadeira contabilidade. 
              Não foi fácil, muitas vezes me decepcionei, mas <span>me coloquei na missão de mudar para sempre a forma com que 
              Contadores e Empresas se relacionam.</span> Hoje tenho um compromisso com a classe contábil de replicar tudo o 
              que eu aprendi nessa jornada e garantir que o contador salve empresas e ajude os empresários na tomada de decisões. 
              Vem comigo!
            </p>
          </div>
        </div>
        <hr/>
      </div>
      <div className="fifth-container">
        <div id="subscription">
          <p>A Consultoria Contábil na Prática é um série de vídeo gratuita. Será realizada durante o mês de Julho e para ter acesso exclusivo, preencha o formulário ao lado!</p>
          <div className="forms">
            <FormularioCadastro textAnalitycs="segundo formulário" />
          </div>
        </div>
        <hr/>
        <h1 className="yellow-title-2">ESTAMOS JUNTOS NESSA</h1>
      </div>
    </>
  )
}

export default Home;
