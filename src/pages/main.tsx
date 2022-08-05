import { PokemonType, Pokemon } from '../types'
export const Main = () => {

  const data: Pokemon[] = [
  {
    index: "#005",
      name: "Charmander",
      image: "https://i.imgur.com/SAF6rIy.png",
      type: [PokemonType.Fire],
    },
    {
      name: "Bulbasaur",
      index: "#001",
      image: "https://i.imgur.com/8B4FwL8.png",
      type: [PokemonType.Grass, PokemonType.Poison],
    },
    {
      index: "#007",
      name: "Squirtle",
      image: "https://i.imgur.com/vUOHirW.png",
      type: [PokemonType.Water],
    },
  ];
  return (
    <div className=" font-MunroSmall">
      {data.map((pokemon) => (
        <div className=" pl-2 flex flex-row items-center pt-2" key={pokemon.index}>
              <img 
          className="w-[20px] h-[20px] mr-2"
          src={pokemon.image}
          alt={pokemon.name} />
          {`${pokemon.index} ${pokemon.name} - ${pokemon.type[0]} ${(pokemon.type[1] !== undefined ? pokemon.type[1] : "")}`}
        
        </div>
      ))}
    </div>
  );
};
