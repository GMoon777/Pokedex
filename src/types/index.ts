export interface Pokemon {
    index: `#${number}${number}${number}`
    name: string;
    image: string;
    type: [PokemonType] | [PokemonType, PokemonType];
  }

  export interface PokemonListProps {
    data: Pokemon[];
    onClick: any;
  }

  export enum PokemonType {
    Fire = 'fire',
    Grass = 'grass',
    Water = 'water',
    Electric = 'electric',
    Psychic = 'psychic',
    Normal = 'normal',
    Flying = 'flying',
    Fighting = 'fighting',
    Poison = 'poison',
    Ground = 'ground',
    Rock = 'rock',
    Bug = 'bug',
    Dragon = 'dragon',
    Ghost = 'ghost',
    Steel = 'steel',
    Fairy = 'fairy',
  }

  export interface PokemonResponse {
    "form_name": string,
    "form_names": string[],
    "form_order": number,
    "id": number,
    "is_battle_only": boolean,
    "is_default": boolean,
    "is_mega": boolean,
    "name": string,
    "names": string[],
    "order": number,
    "pokemon": {
        "name": string
        "url": string
    },
    "sprites": {
        "back_default": string
        "back_female": null,
        "back_shiny": string
        "back_shiny_female": null,
        "front_default": string
        "front_female": null,
        "front_shiny": string
        "front_shiny_female": null
    },
    "types": 
        {
            "slot": number,
            "type": {
                "name": PokemonType
                "url": string
            }
        }[]
    
    "version_group": {
        "name": string
        "url": string
    }
}