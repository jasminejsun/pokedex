import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { useLocation } from "react-router-dom";
import { getPokemon } from './services/pokemon'
import Card from '../src/components/Card'
import CardDetails from '../src/components/CardDetails'

function Detail() {
    const location = useLocation();
    const { from } = location.state;
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);

    const initialUrl = 'https://pokeapi.co/api/v2/pokemon/'
    const pokemonUrl = initialUrl + from.input

    useEffect(() => {
        async function fetchData() {
          let pokemon = await loadingPokemon();
          setLoading(false);
        }
        fetchData();
      }, []);
    

    const loadingPokemon = async() => {
        let pokemonRecord = await getPokemon(pokemonUrl);    
        setPokemonData(pokemonRecord)
        console.log(pokemonRecord)
      }

    return (
    <div>
      { loading ? <h1>Loading..</h1> : (
        <>
            <Card key={0} pokemon={pokemonData}/>
            <CardDetails pokemon={pokemonData}/>
        </>
      )}
    </div>
    )
}

export default Detail
