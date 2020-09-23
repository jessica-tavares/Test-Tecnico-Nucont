function saveStorage(infos) {
  const loadOldState = localStorage.getItem('usuariosCadastrados');
  const oldState = (loadOldState) ? JSON.parse(loadOldState) : [];

  alert("Dados salvos com sucesso");
  if (oldState.length > 0) {
    return localStorage.setItem('usuariosCadastrados', JSON.stringify([...oldState, infos]));
  }
  return localStorage.setItem('usuariosCadastrados', JSON.stringify([infos]));
}

export default saveStorage;
