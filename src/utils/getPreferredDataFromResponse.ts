import {PokemonFullResponse, Pokemon} from '../types'

export const getPreferredDataFromResponse = (res: PokemonFullResponse) => {
  return {
    name: res.name,
    image: res.sprites.front_default,
    type: [
      res.types[0].type.name,
      ...(res.types[1] ? [res.types[1]?.type.name] : [])
    ],
    index: "#" + String(res.order).padStart(3, "0")
  } as Pokemon
};
