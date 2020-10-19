import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import saveStorage from "../services/saveStorage";

function FormularioCadastro({textAnalitycs}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const onSubmit = () => {
    ReactGA.event({
      category: 'Button-Subscript',
      action: textAnalitycs,
    });

    const infos = { nome: name, email };
    const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    (regexp.test(email)) ? saveStorage(infos) : alert("Email Inválido")
    setName('');
    setEmail('');
    setShouldRedirect(true);
  }

  return (shouldRedirect) ? <Redirect path='/Thanks' /> :
  (
    <div className="forms-container">
      <div>
        <h3>Fale agora com nossos consultores!</h3>
        <p>Conheça a Consultoria para Contadores e garanta uma vaga exclusiva na <span>Imersão Nucont</span></p>
      </div>
      <div className="forms" method="get">
        <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
        <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"/>
        <button className="btn-submit" onClick={() => onSubmit()}>QUERO ACOMPANHAR A SÉRIE</button>
      </div>
    </div>
  )
}

export default FormularioCadastro;
