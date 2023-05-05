import { useEffect, useState } from "react"
import UseFetch from "../../hooks/Usefetch"
import PokeCard from "./PokeCard"
import './Styles/PokeContainer.css'



const PokeContainer = ({formUrl}) => {
    const [pokemons, getAllPokemons] = UseFetch(formUrl)
    useEffect(() => {
        getAllPokemons()
    }, [formUrl])

    return (
        <> 
        <div className='pokeContainer'>
            {
                pokemons?.results
                ?(
                    pokemons?.results.map(pokemon => (
                        <PokeCard
                            key={pokemon.url}
                            url={pokemon.url}
                        />    ))
                )
                :(
                    pokemons?.pokemon.map(objPoke=>(
                        <PokeCard
                        key={objPoke.pokemon.url}
                        url={objPoke.pokemon.url}
                        />
                    ))
                )
            }
        </div>
        </>
    )
}

export default PokeContainer