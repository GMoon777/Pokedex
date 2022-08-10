import { PokemonList } from "../components/PokemonList";
import { useFetchAllPokemon } from "../hooks/useFetchAllPokemon";
import { useNavigate } from 'react-router-dom'
import { TiChevronLeft } from "react-icons/ti";

export const Main = () => {
  const [pokemonData] = useFetchAllPokemon()
  
  let navigate = useNavigate();

  const navigateToSelected = (id: number) => {
    return navigate("/" + id, { replace: true });
  };
  
  return (
    <div>
    <TiChevronLeft className=" rotate-90 fixed left-[64%] top-[42.0%] z-[9999]"/>
      <TiChevronLeft className=" -rotate-90 fixed left-[64%] top-[67.0%] z-[9999]"/>
      <PokemonList 
        data={pokemonData}
        onClick={(id) => navigateToSelected(id)}
     />
    </div>
  );
};
