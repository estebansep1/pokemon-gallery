import './App.css';
import {useState, useEffect} from 'react'
import ButtonBar from './Components/ButtonBar';
import Gallery from './Components/Gallery';

function App() {

  let[data, setData] = useState({})
  let [pokemonId, setPokemonId] = useState(25)

  useEffect(() => {
    document.title = 'Welcome to the Pokedex!'
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [pokemonId])

  return (
    <div className="App">
      {data.name && <Gallery image={data.sprites.front_default} name={data.name} weight={data.weight}/>}
      <ButtonBar setPokemonId={setPokemonId} pokemonId={pokemonId}/>
    </div>
  );
}

export default App;
