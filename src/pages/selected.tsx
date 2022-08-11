import { useNavigate, useParams } from "react-router-dom";
import { PokemonTypeWrapper } from "../components/PokemonTypeWrapper";
import { useFetchSelectedPokemon } from "../hooks/useFetchSelectedPokemon";
import { formatPokemonHeight } from "../utils/formatPokemonHeight";
import { formatPokemonWeight } from "../utils/formatPokemonWeight";
import buttonShort from '../assets/Audio/Effects/buttonShort.mp3'
import useSound from 'use-sound';
import React from 'react'

export const Selected = () => {
  const [play] = useSound(buttonShort);
  const params = useParams();
  const selectedPokemon = useFetchSelectedPokemon(params.id);

  const pokemonHeight = formatPokemonHeight(selectedPokemon[0]?.height);
    const pokemonWeight = formatPokemonWeight(selectedPokemon[0]?.weight);

  const navigate = useNavigate();

  const navigateToMain = () => {
    play()
    return navigate("/main", { replace: true });
  };

  return (
    <div>
        <button 
        onClick={() => navigateToMain()}
        className=" flex justify-center items-center outline-dashed outline-1 outline-offset-2 w-4 h-4 
          absolute ml-4 mt-4 cursor-pointer">x</button>
     

    <div className=" flex flex-col items-center justify-center">
     
      <img
      className=" mt-1"
        src={selectedPokemon[0]?.sprites.front_default}
        alt={selectedPokemon[0]?.name}
      />
            <div>{selectedPokemon[0]?.name} </div>
      <div className="flex flex-row items-center justify-center mb-3 space-x-1">
        {selectedPokemon[0]?.types && <PokemonTypeWrapper type={selectedPokemon[0]?.types[0].type.name} />}
        {selectedPokemon[0]?.types[1] && <PokemonTypeWrapper type={selectedPokemon[0]?.types[1].type.name} />}
        </div>
      <div className="flex flex-row">
        <div className=" flex-col outline-dashed outline-1 outline-offset-4 mr-2">
     
          <div> #: {selectedPokemon[0]?.order} </div>
          <div> H: {pokemonHeight} </div>
          <div> W: {pokemonWeight} </div>
        </div>
        
        <div className=" flex flex-col outline-dashed outline-1 outline-offset-4 items-center ml-2">
        
      <div className="flex flex-row items-center">
        <div className=" flex flex-col pr-3">
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
    </div>
  );
};
