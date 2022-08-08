import { PokemonType, Pokemon, PokemonResponse } from "../types";
import useFetch from "use-http";
import { useState, useEffect, CSSProperties } from "react";
import { PokemonList } from "../components/PokemonList";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const { get, response, loading, error } = useFetch(
    "https://pokeapi.co/api/v2"
  );

  useEffect(() => {
    loadIntialPokemon();
  }, []);

  let navigate = useNavigate();

  const navigateToSelected = () => {
    return navigate("/selected", { replace: true });
  };

  async function loadIntialPokemon() {
    let num = 1;
    let pokeDataArray = [];
    while (num < 152) {
      const pokemonResponse = await get(`/pokemon-form/${num}/`);
      if (response.ok) {
        const { name, sprites, types, order } = pokemonResponse as PokemonResponse;

        let pokemonItem: Pokemon = {
          name: name,
          image: sprites.front_default,
          type: types[1]
            ? [types[0].type.name, types[1].type.name]
            : [types[0].type.name],
          index:
            (order < 10
              ? "#" + 0 + 0 + order
              : "" || order < 100
              ? "#" + 0 + order
              : "" || order < 1000
              ? "#" + order
              : "") as Pokemon["index"],
        };
        pokeDataArray.push(pokemonItem);
      }
      num++;
    }
    setPokemon(pokeDataArray);
  }

  return (
    <div className=" font-MunroSmall">
     <PokemonList 
     data={pokemon}
     onClick={navigateToSelected}
     />
    </div>
  );
};
