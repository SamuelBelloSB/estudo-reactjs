import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/index.js';

function App() {
  
  const [animes, setAnimes] = useState([])

  const aoNovoAnimeAdicionado = (anime) => {
    console.log(anime)
    setAnimes([...animes, anime])
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario aoAnimeCadastrado={anime => aoNovoAnimeAdicionado(anime)}/>
    </div>
  );
}

export default App;
