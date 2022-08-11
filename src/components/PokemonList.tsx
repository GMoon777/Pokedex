import { PokemonListProps, PokemonType } from "../types";
import React, { useState } from "react";
import { PokemonTypeWrapper } from "./PokemonTypeWrapper";
import select from "../assets/select.mp3";
import useSound from "use-sound";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import * as Select from "@radix-ui/react-select";

export const PokemonList = (props: PokemonListProps) => {
  const [selectedTypes, setSelectedTypes] = useState('any');
  const [play] = useSound(select);
  const selectedPokemon = (id: number) => {
    play();
    props.onClick(id);
  };

  interface PokemonInputForm {
    name?: string;
    type?: PokemonType;
  }

  console.log(selectedTypes);

  const { register, handleSubmit, watch } = useForm<PokemonInputForm>();

  const nameInput = watch("name");
  const onSubmit: SubmitHandler<PokemonInputForm> = () => null;

  return (
    <div className="-mt-8">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-1 flex">
        <label htmlFor="name" aria-label="search pokemon name">
          <div className="ml-2 mt-1 mr-1 h-3 w-3 ">
            <FaSearch
              role="img"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </label>
        <input
        autoComplete="off"
        placeholder="Search Pokemon"
          id="name"
          {...register("name", { required: true })}
          className="mb-1 w-[50%] h-5 outline-1 outline-dashed pl-1.5 mr-1 placeholder:text-zinc-600 "
        />
        <Select.Root
          defaultValue="any"
          onValueChange={(value) => setSelectedTypes(value)}
        >
          <Select.Trigger className="flex items-center -mt-1 ml-3" >
            <Select.Value  />
            <Select.Icon/>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content >
              <Select.ScrollUpButton />
              <Select.Viewport className="bg-[#24796A] outline-dashed outline-1 p-1">
              
            <div className=" flex flex-wrap w-[130px] gap-1 items-center justify-center">

            <Select.Item key={"any"} value={"any"} className="mx-4">
                    <Select.ItemText>
                      <PokemonTypeWrapper type={"any"}/>
                        </Select.ItemText>
                  </Select.Item>

            {Object.values(PokemonType).map(type => {
                
                return (
                  <Select.Item key={type} value={type}>
                    <Select.ItemText>
                      <PokemonTypeWrapper type={type}/>
                        </Select.ItemText>
                  </Select.Item>
                )
              })}
            </div>
              
              </Select.Viewport>
              <Select.ScrollDownButton />
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </form>

      <ul>
        {props.data
      .filter(
        (pokemon) =>
        selectedTypes === "any" ||
        pokemon.type.includes(selectedTypes as PokemonType)
      )
      .filter(
        (pokemon) =>
             pokemon.name.includes(nameInput || "") ||
        pokemon.index.includes(nameInput || "") 
      )

                // pokemon.name.toLowerCase().includes(nameInput || "") ||
                // pokemon.index.toLowerCase().includes(nameInput || "") ||
                // (selectedTypes.toLowerCase() as PokemonType || "") 

          
          .map((pokemon) => (
            <li
              className=" items-left flex cursor-pointer select-none list-none flex-col pl-2 pr-2 pt-1 hover:bg-[#24796A]"
              key={pokemon.index}
            >
              <button onClick={() => selectedPokemon(pokemon.id)}>
                <div className="flex flex-row items-center">
                  {pokemon.index}
                  <img
                    className="mr-2 ml-2 h-[30px] w-[30px]"
                    src={pokemon.image}
                    alt={pokemon.name}
                  />
                  <div className="mr-1">
                  {pokemon.name}
                  </div>
                  <div className="mr-1">
                  <PokemonTypeWrapper type={pokemon.type[0]} />
                  </div>
                  {pokemon.type[1] && <PokemonTypeWrapper type={pokemon.type[1]} />}
                </div>

                <div className="mt-0 h-[0.5px] w-[100%] bg-zinc-800" />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
