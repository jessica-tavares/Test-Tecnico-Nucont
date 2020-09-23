function saveStorage(infos) {
  const loadOldState = localStorage.getItem('usuariosCadastrados');
  const oldState = (loadOldState) ? JSON.parse(loadOldState) : [];

  if (oldState.length > 0) {
    return localStorage.setItem('usuariosCadastrados', JSON.stringify([...oldState, infos]));
  }
  return localStorage.setItem('usuariosCadastrados', JSON.stringify([infos]));
}

export default saveStorage;
