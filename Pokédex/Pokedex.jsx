import React, {useState, useEffect} from "react";
import PokemonCard from "./PokemonCard.jsx";



const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch("https://pokedex.mimo.dev/api/pokemon");
      const data = await response.json();
      setPokemons(data);
    };
    fetchPokemons();
  }, []);
  return (
    <>
    <h1>Pokédex</h1>
    <ul>
    {pokemons.map ((pokemon,index) => (<PokemonCard key={index} pokemon={pokemon} />))}
    </ul>
    </>
  );
}

export default Pokedex;