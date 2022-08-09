import { useParams } from "react-router-dom";
import { useFetchSelectedPokemon } from "../hooks/useFetchSelectedPokemon";
import { formatPokemonHeight } from "../utils/formatPokemonHeight";
import { formatPokemonWeight } from "../utils/formatPokemonWeight";

export const Selected = () => {

  const params = useParams();
  const selectedPokemon = useFetchSelectedPokemon(params.id);

  let pokemonHeight = formatPokemonHeight(selectedPokemon[0]?.height);
    let pokemonWeight = formatPokemonWeight(selectedPokemon[0]?.weight);

  return (
    <div className=" flex flex-col items-center justify-center">
      <img
        src={selectedPokemon[0]?.sprites.front_default}
        alt={selectedPokemon[0]?.name}
      />

      <div className="flex flex-row">
        <div className=" flex-col outline-dashed outline-1 outline-offset-4 mr-4 ml-2 ">
          <div>{selectedPokemon[0]?.name} </div>
          <div> #{selectedPokemon[0]?.order} </div>
          <div> H: {pokemonHeight} </div>
          <div> W: {pokemonWeight} </div>
        </div>
        
        <div className=" flex flex-col outline-dashed outline-1 outline-offset-4 items-center">
        <div className=""> Stats</div>
        
      <div className="flex flex-row items-center">
        <div className=" flex flex-col mr-4 ml-1 ">
          <div> HP: {selectedPokemon[0]?.stats[0].base_stat} </div>
          <div> Attack: {selectedPokemon[0]?.stats[1].base_stat} </div>
          <div> Defence: {selectedPokemon[0]?.stats[2].base_stat} </div>
        </div>
        <div className=" flex flex-col">
          <div> Sp.Atk: {selectedPokemon[0]?.stats[3].base_stat} </div>
          <div> Sp.Def: {selectedPokemon[0]?.stats[4].base_stat} </div>
          <div> Speed: {selectedPokemon[0]?.stats[5].base_stat} </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};
