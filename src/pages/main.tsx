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
    <div className="h-auto min-h-[235px]">
      <TiChevronLeft className=" rotate-90 sticky left-[92%] top-[2%] z-[9999]"/>
      <TiChevronLeft className=" -rotate-90 sticky left-[92%] top-[92%] z-[9999]"/>
      <PokemonList 
        data={pokemonData}
        onClick={(id) => navigateToSelected(id)}
     />

    </div>
  );
};
