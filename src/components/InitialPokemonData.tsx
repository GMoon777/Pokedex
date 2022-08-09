import useFetch from "use-http";
import { PokemonType, Pokemon, PokemonFullResponse } from "../types";
// my alpha code
/*
export async function loadIntialPokemon() {
  const { get, response, loading, error } = useFetch(
    "https://pokeapi.co/api/v2"
  );
  let num = 1;
  let pokeDataArray = [];
  while (num < 152) {
    const pokemonResponse = await get(`/pokemon-form/${num}/`);
    if (response.ok) {
      const { name, sprites, types, order } =
        pokemonResponse as PokemonFullResponse;

      let pokemonItem: Pokemon = {
        name,
        image: sprites.front_default,
        type: types[1]
          ? [types[0].type.name, types[1].type.name]
          : [types[0].type.name],
        index: (order < 10
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
  return pokeDataArray;
}
*/