export interface Pokemon {
    index: `#${number}${number}${number}`
    name: string;
    image: string;
    type: [PokemonType] | [PokemonType, PokemonType];
  }

  export interface PokemonListProps {
    data: Pokemon[];
    onClick: (id: number) => void;
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

  export interface PokemonFormResponse {
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

export interface PokemonFullResponse {
    height: number;
    id: number;
    is_default: boolean;
    name: string;
    order: number;
    weight: number;
    sprites: {
      front_default: string;
      versions: {
        "generation-i": {
          "red-blue": {
            back_default: string;
            back_gray: string;
            back_transparent: string;
            front_default: string;
            front_gray: string;
            front_transparent: string;
          };
          yellow: {
            back_default: string;
            back_gray: string;
            back_transparent: string;
            front_default: string;
            front_gray: string;
            front_transparent: string;
          };
        };
      };
    };
    stats: [
      {
        base_stat: number;
        effort: number;
        stat: {
          name: "hp";
          url: string;
        };
      },
      {
        base_stat: number;
        effort: number;
        stat: {
          name: "attack";
          url: string;
        };
      },
      {
        base_stat: number;
        effort: number;
        stat: {
          name: "defense";
          url: string;
        };
      },
      {
        base_stat: number;
        effort: number;
        stat: {
          name: "special-attack";
          url: string;
        };
      },
      {
        base_stat: number;
        effort: number;
        stat: {
          name: "special-defence";
          url: string;
        };
      },
      {
        base_stat: number;
        effort: number;
        stat: {
          name: "speed";
          url: string;
        };
      }
    ];
    types:
      | [
          {
            slot: 1;
            type: {
              name: PokemonType;
              url: string;
            };
          }
        ]
      | [
          {
            slot: 1;
            type: {
              name: PokemonType;
              url: string;
            };
          },
          {
            slot: 2;
            type: {
              name: PokemonType;
              url: string;
            };
          }
        ];
  }
  