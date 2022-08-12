import { PokemonList } from "../components/PokemonList";
import { useFetchAllPokemon } from "../hooks/useFetchAllPokemon";
import { useNavigate } from 'react-router-dom'
import { TiChevronLeft } from "react-icons/ti";
import React, { useContext } from "react";
import { ScrollContext } from "../context";

export const Main = () => {
  const { atTop, atBottom } = useContext(ScrollContext);

  const [pokemonData] = useFetchAllPokemon()

  const navigate = useNavigate();

  const navigateToSelected = (id: number) => {
    return navigate("/" + id, { replace: true });
  };
  
  return (
    <div className="h-auto min-h-[235px]" >
      <TiChevronLeft className=" rotate-90 sticky left-[92%] top-[2%] z-[9999]" style={{
        opacity: atTop ? 0 : 1,
      }} />
      <TiChevronLeft className=" -rotate-90 sticky left-[92%] top-[92%] z-[9999]" style={{
        opacity: atBottom ? 0 : 1}}/>
      <PokemonList 
        data={pokemonData}
        onClick={(id) => navigateToSelected(id)}
     />

    </div>
  );
};
