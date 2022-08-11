import React from "react";
import { PokemonType } from "../types";
import { setPokemonTypeColour } from "../utils/setPokemonTypeColour";
interface PokemonTypeWrapperProps {
  type: PokemonType | "any";
}

export const PokemonTypeWrapper = (props: PokemonTypeWrapperProps) => {

    return (
      <div
        className="flex h-4 w-14 select-none items-center justify-center rounded-lg pl-[3px] pr-[3px]"
        style={{ backgroundColor: setPokemonTypeColour(props.type) }}
      >
        {props.type}
      </div>
    );

    };