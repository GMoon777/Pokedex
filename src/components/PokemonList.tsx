
import { Pokemon, PokemonListProps } from "../types"
import { useState } from "react"


export const PokemonList = (props: PokemonListProps) => {
const [searchInput, setSearchInput] = useState("");
return (

    <div>
        <input type="text" 
        placeholder="Search for a Pokemon"
        className=" text-center w-full placeholder:text-slate-800 outline-none"
        onChange={(e) => setSearchInput(e.target.value)} />
    <ul>
          {/* <button onClick={props.onClick}> */}
          {props.data.filter(pokemon => pokemon.name.includes(searchInput)).map(pokemon => (
  <li
    className=" cursor-pointer select-none flex flex-col items-left pl-2 pr-2 pt-1 list-none hover:bg-[#24796A]"
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

   <div className="w-[100%] h-[0.5px] bg-zinc-800 mt-0"/>

  </li>

))}
  {/* </button> */}
</ul>
</div>
)
}