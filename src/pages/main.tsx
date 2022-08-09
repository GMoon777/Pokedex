import { PokemonList } from "../components/PokemonList";
import { useFetchAllPokemon } from "../hooks/useFetchAllPokemon";
import {useNavigate} from 'react-router-dom'

export const Main = () => {
  const [pokemonData, isPokemonDataLoading] = useFetchAllPokemon()
  

  let navigate = useNavigate();

  const navigateToSelected = (id: number) => {
    return navigate("/" + id, { replace: true });
  };
  
  return (
    <div className=" font-MunroSmall">
      <PokemonList 
        data={pokemonData}
        onClick={(id) => navigateToSelected(id)}
     />
    </div>
  );
};
