import { PokemonTypeStyle } from "../constants/constants"

export const setPokemonTypeColour = (type: string | undefined) => { 
    switch (type) {
        case "normal":
        return PokemonTypeStyle.normal;
        case "fighting":
        return PokemonTypeStyle.fighting;
        case "flying":
        return PokemonTypeStyle.flying;
        case "poison":
        return PokemonTypeStyle.poison;
        case "ground":
        return PokemonTypeStyle.ground;
        case "rock":
        return PokemonTypeStyle.rock;
        case "bug":
        return PokemonTypeStyle.bug;
        case "ghost":
        return PokemonTypeStyle.ghost;
        case "steel":
        return PokemonTypeStyle.steel;
        case "fire":
        return PokemonTypeStyle.fire;
        case "water":
        return PokemonTypeStyle.water;
        case "grass":
        return PokemonTypeStyle.grass;
        case "electric":
        return PokemonTypeStyle.electric;
        case "psychic":
        return PokemonTypeStyle.psychic;
        case "ice":
        return PokemonTypeStyle.ice;
        case "dragon":
        return PokemonTypeStyle.dragon;
        case "dark":
        return PokemonTypeStyle.dark;
        case "fairy":
        return PokemonTypeStyle.fairy;
        default:
        return PokemonTypeStyle.blank;
    }
}