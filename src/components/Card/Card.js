 import React from 'react'
 import './Card.css';
 import typeColors from '../../helpers/typeColors'
 import bgColors from '../../helpers/bgColors'
 
 function Card({ pokemon }) {
     let weightKg = pokemon.weight / 10;
     let heightM = pokemon.height / 10;
     return (
         <div className="Card" style={{ backgroundColor: bgColors[pokemon.types[0].type.name] }}>
            <div className="Card__img">
                <img src={pokemon.sprites.other.dream_world.front_default} alt="Pokemon image"/>
            </div>
            <div className="Card__id_container"> 
                <div className="Card__id">
                    #{pokemon.id}
                </div>
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                        <div className="Card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                            {type.type.name}
                        </div>
                        )
                    })
                }
            </div>
            <div className="Card__info">
                 <div className="Card__data Card__data--weight">
                     <p className="title">Weight</p>
                     <p>{weightKg} kg</p>
                 </div>
                 <div className="Card__data Card__data--height">
                     <p className="title">Height</p>
                     <p>{heightM} m</p>
                 </div>
                 <div className="Card__data Card__data--ability">
                     <p className="title">Ability</p>
                     <p className="details">{pokemon.abilities[0].ability.name}</p>
                 </div>
            </div>
         </div>
     )
 }
 
 export default Card
 