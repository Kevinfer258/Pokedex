import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './styles/pokedexWelcome.css'
import FormPoke from '../components/pokedex/FormPoke'
import PokeContainer from '../components/pokedex/PokeContainer'

const Pokedex = () => {
  const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
  
  const [formUrl, setFormUrl] = useState(urlBase)
  const { trainerName }=useSelector(state=>state)


  return (
    <div >
      <header className='poq'>
        <div className='poq_rojo'></div>
        <img className='poq_img' src=".//pokedexx.png" alt="" />
        <div className='poq_negro'></div>

      </header>
      <p className='poq_p'><span className='poq_welcome'>Welcome {trainerName},</span><span> here you can find your favorite pokemon</span></p>
      <FormPoke  urlBase={urlBase} setFormUrl={setFormUrl}/>
      <PokeContainer formUrl={formUrl} />
    </div>
  )
}

export default Pokedex