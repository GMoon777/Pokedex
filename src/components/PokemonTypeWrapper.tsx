import  React  from 'react'
import { PokemonType } from '../types'
import { setPokemonTypeColour } from '../utils/setPokemonTypeColour'
export const PokemonTypeWrapper = (props: any) => {
    
    if (props.type) {
    return (
    <div
    className="flex ml-1 rounded-lg pl-[3px] pr-[3px] h-4 items-center justify-center w-14 select-none" 
    style={{backgroundColor: setPokemonTypeColour(props.type)}}> 
    {props.type}
     </div>
    )
    }
    else {
        return (
            <div></div>
        )
    }
}
