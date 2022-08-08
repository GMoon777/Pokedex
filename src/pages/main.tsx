import { PokemonType, Pokemon } from "../types";
import useFetch from "use-http";
import { useState, useEffect } from "react";

const getPokemon = () => {
  const url = "https://pokeapi.co/api/v2/pokemon-form";
  const [request] = useFetch(url);
  request.get();
  console.log(request.data);
};

export const Main = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const { get, response, loading, error } = useFetch(
    "https://pokeapi.co/api/v2"
  );

  useEffect(() => {
    loadIntialPokemon();
  }, []);

  async function loadIntialPokemon() {
    let num = 1;
    let pokeDataArray = [];
    while (num < 152) {
      const pokemonResponse = await get(`/pokemon-form/${num}/`);
      if (response.ok) {
        const { name, sprites, types, order } = pokemonResponse;

        let pokemonItem: Pokemon = {
          name: name,
          image: sprites.front_default,
          type: types[1]
            ? [types[0].type.name + ",", types[1].type.name]
            : [types[0].type.name],
          index:
            order < 10
              ? "#" + 0 + 0 + order
              : "" || order < 100
              ? "#" + 0 + order
              : "" || order < 1000
              ? "#" + order
              : "",
        };
        pokeDataArray.push(pokemonItem);
      }
      num++;
    }
    setPokemon(pokeDataArray);
  }

  // const data: Pokemon[] = [
  // {
  //   index: "#005",
  //     name: "Charmander",
  //     image: "https://i.imgur.com/SAF6rIy.png",
  //     type: [PokemonType.Fire],
  //   },
  //   {
  //     name: "Bulbasaur",
  //     index: "#001",
  //     image: "https://i.imgur.com/8B4FwL8.png",
  //     type: [PokemonType.Grass, PokemonType.Poison],
  //   },
  //   {
  //     index: "#007",
  //     name: "Squirtle",
  //     image: "https://i.imgur.com/vUOHirW.png",
  //     type: [PokemonType.Water],
  //   },
  // ];

  return (
    <div className=" font-MunroSmall">
      {pokemon.map((pokemon) => (
        <div
          className=" flex flex-row items-center pl-2 pt-2"
          key={pokemon.index}
        >
          <img
            className="mr-2 h-[20px] w-[20px]"
            src={pokemon.image}
            alt={pokemon.name}
          />
          {`${pokemon.index} ${pokemon.name} - ${pokemon.type[0]} ${
            pokemon.type[1] !== undefined ? pokemon.type[1] : ""
          }`}
        </div>
      ))}
    </div>
  );
};
