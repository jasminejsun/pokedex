import { useState, useEffect } from 'react'
import './CardDetails.css'
import typeColors from '../../helpers/typeColors'
import getMultipliers from '../../helpers/getMultipliers'
import axios from 'axios'

function CardDetails({ pokemon }) {
    console.log(pokemon)
    const [loading, setLoading] = useState(true);
    let type = pokemon.types[0].type.name
    let multipliers = getMultipliers(type)
    let defense = multipliers.defense
    var sortable = [];
    for (var multiplier in defense) {
        sortable.push([multiplier, defense[multiplier]]);
    }
    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });
    let max = sortable[sortable.length - 1][0]
    let secondMax = sortable[sortable.length - 2][0]
    let evoUrl = 'https://pokeapi.co/api/v2/evolution-chain/' + pokemon.id + '/'
    const evoChain = [];    

    useEffect(() => {
        async function fetchData() {
            let response = await fetchEvoDetails(evoUrl).then((res) => console.log(res))
            console.log("loaded")
            setLoading(false)
          }
          fetchData();
      }, []);  

     //evolution code
    const fetchEvoDetails = async (url) => {
        const response = await axios.get(url);
        let evoData = response.data.chain;
        do {
            const evoDetails = evoData['evolution_details'][0];
            evoChain.push(
                evoData.species.name,
            );
            evoData = evoData['evolves_to'][0];
        } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
        console.log(evoChain)
        return evoChain;
        //this.fetchEvoImages(evoChain);
    }


    return (
        <div>
        { loading ? <h1>Loading..</h1> : (
        <>
            <div>
                <div className="CardDetails">
                    <p className="title-1">Weaknesses</p>
                    <div className="Card__weaknesses">
                        <div className="Card__weakness" style={{ backgroundColor: typeColors[max] }}>
                            {max}
                        </div>
                        <div className="Card__weakness" style={{ backgroundColor: typeColors[secondMax] }}>
                            {secondMax}
                        </div>
                    </div>
                    <p className="title">HP</p>
                    <div className="description">{pokemon.stats[0].base_stat}</div>
                    <p className="title">Attack</p>
                    <div className="description">{pokemon.stats[1].base_stat}</div>
                    <p className="title">Defense</p>
                    <div className="description">{pokemon.stats[2].base_stat}</div>
                    <p className="title">Special Attack</p>
                    <div className="description">{pokemon.stats[3].base_stat}</div>
                    <p className="title">Special Defense</p>
                    <div className="description">{pokemon.stats[4].base_stat}</div>
                    <p className="title">Speed</p>
                    <div className="description">{pokemon.stats[5].base_stat}</div>
                    <p className="title">Evolution</p>
                    <div className="Card__evolution">
                        {
                            evoChain.map(pokemon => {
                                return (
                                    <div className="Card__evo">
                                        {pokemon}
                                    </div>
                                )
                            })
                        }                 
                    </div>
                </div>
            </div>
        </>
      )}
    </div>
    )
}

export default CardDetails
