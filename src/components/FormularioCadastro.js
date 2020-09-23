import React, { useState } from 'react';
import ReactGA from 'react-ga';
import saveStorage from "../services/saveStorage";

function FormularioCadastro(textAnalitycs) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    ReactGA.event({
      category: 'activity',
      action: textAnalitycs,
      transport: "beacon",
    });

    const infos = { nome: name, email };
    const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    (regexp.test(email)) ? saveStorage(infos) : alert("Email Inválido")
    setName('');
    setEmail('');
  }

  return (
    <div className="forms-container">
      <div>
        <h3>Fale agora com nossos consultores!</h3>
        <p>Conheça a Consultoria para Contadores e garanta uma vaga exclusiva na <span>Imersão Nucont</span></p>
      </div>
      <div className="forms" method="get">
        <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
        <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"/>
        <button type="submit" className="btn-submit" onClick={() => onSubmit()}>QUERO ACOMPANHAR A SÉRIE</button>
      </div>
    </div>
  )
}

export default FormularioCadastro;
