import { useState } from "react";
import { useFetch } from "use-http";
import { Pokemon, PokemonFullResponse } from "../types";
import {API_URL} from '../constants/constants'
import {getPreferredDataFromResponse} from '../utils/getPreferredDataFromResponse'

interface BasePokemonResponse {
  name: string;
  url: string;
}
export const setPokemonGeneration = (generation: number) => {

  return generation;
}
 

export const useFetchAllPokemon = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  const [isIndividualPokemonLoading, setIsIndividualPokemonLoading] = useState(false);

  
  const [_request, _reponse, isAllPokemonLoading, _error] = useFetch(
    API_URL + "/pokemon?limit=151",
    {
      onNewData: async (currData, newData: {results: BasePokemonResponse[]}) => {
        interface BasePokemonResponse {
          name: string;
          url: string;
        }
        
        setIsIndividualPokemonLoading(true)
        // Promise.all only resolves once all of it's promises have resolved
        const eachPokemon = await Promise.all(newData.results.map((pokemon: BasePokemonResponse) => {
          // removes end "/"
          const url = pokemon.url.slice(0, pokemon.url.length - 1);
          // matches 1 or more digits at end ($) of string
          const matchedId = /\d+$/.exec(url)?.[0];

          return fetch(API_URL + "/pokemon/" + matchedId).then(res => res.json()) as Promise<PokemonFullResponse>;
        }))

        const data = eachPokemon.map(res => getPreferredDataFromResponse(res))      
        setPokemonData(data)
        setIsIndividualPokemonLoading(false);
      },
    },
    []
  );

  return [pokemonData, isIndividualPokemonLoading] as const;
}