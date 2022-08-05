export interface Pokemon {
    index: `#${number}${number}${number}`
    name: string;
    image: string;
    type: [PokemonType] | [PokemonType, PokemonType];
  }

  export enum PokemonType {
    Fire = 'Fire',
    Grass = 'Grass',
    Water = 'Water',
    Electric = 'Electric',
    Psychic = 'Psychic',
    Normal = 'Normal',
    Flying = 'Flying',
    Fighting = 'Fighting',
    Poison = 'Poison',
    Ground = 'Ground',
    Rock = 'Rock',
    Bug = 'Bug',
    Dragon = 'Dragon',
    Ghost = 'Ghost',
    Steel = 'Steel',
    Fairy = 'Fairy',
  }