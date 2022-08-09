import { useState } from "react";
import useFetch from "use-http";
import { API_URL } from "../constants/constants";
import { PokemonFullResponse } from "../types";

export const useFetchSelectedPokemon = (id: string | undefined) => {
  const [selectedPokemonData, setSelectedPokemonData] =
    useState<PokemonFullResponse>();
  const URL = id ? API_URL + "/pokemon/" + encodeURIComponent(id) : "";
  const [request, response, loading, error] = useFetch(
    URL,
    {
      onNewData: (currData, newData) => {
        setSelectedPokemonData(newData);
      },
    },
    [id]
  );
  return [selectedPokemonData, loading] as const;
};
