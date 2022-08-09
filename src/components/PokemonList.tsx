import { Pokemon, PokemonListProps, PokemonType } from "../types";
import { useState } from "react";

export const PokemonList = (props: PokemonListProps) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a Pokemon"
        className=" w-full text-center outline-none placeholder:text-slate-800"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <ul>
        {/* <button onClick={props.onClick}> */}
        {props.data
          .filter((pokemon) => pokemon.name.includes(searchInput) || (pokemon.index.includes(searchInput)) || (pokemon.type.includes(searchInput as PokemonType)))
          .map((pokemon) => (
            <li
              className=" items-left flex cursor-pointer select-none list-none flex-col pl-2 pr-2 pt-1 hover:bg-[#24796A]"
              key={pokemon.index}
            >
              <div className="flex flex-row items-center">
                {pokemon.index}
                <img
                  className="mr-2 ml-2 h-[30px] w-[30px]"
                  src={pokemon.image}
                  alt={pokemon.name}
                />

                {`${pokemon.name} - ${pokemon.type[0]} ${
                  pokemon.type[1] !== undefined ? pokemon.type[1] : ""
                }`}
              </div>

              <div className="mt-0 h-[0.5px] w-[100%] bg-zinc-800" />
            </li>
          ))}
        {/* </button> */}
      </ul>
    </div>
  );
};
