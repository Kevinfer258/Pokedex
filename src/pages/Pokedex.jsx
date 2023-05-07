import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './styles/pokedexWelcome.css'
import FormPoke from '../components/pokedex/FormPoke'
import PokeContainer from '../components/pokedex/PokeContainer'
import Paginacion from '../components/Paginacion'
import UseFetch from '../hooks/Usefetch'
import PokeCard from '../components/pokedex/PokeCard'

const Pokedex = () => {
  const [paginacion, setPaginacion] = useState(0)
  const urlBase = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${paginacion}`
  
  const [stateCategory, setStateCategory] = useState(0)
  const [state,  getData,  hasError]=UseFetch(urlBase)
  useEffect(() => {
    getData()
  }, [urlBase])
  
  const [formUrl, setFormUrl] = useState(urlBase)
  const { trainerName } = useSelector(state => state)

  return (
    <div >
      <header className='poq'>
        <div className='poq_rojo'></div>
             <img className='poq_img' src=".//pokedexx.png" alt="" />
               <div className='poq_negro'></div>
           </header>
        
         <p className='poq_p'><span className='poq_welcome'>Welcome {trainerName},</span><span className='poq_span'>here you can find your favorite pokemon</span></p>
         <FormPoke urlBase={urlBase} setFormUrl={setFormUrl} setStateCategory={setStateCategory} />
        {
          stateCategory == 0 ? <div className='pag_name'>
            <Paginacion setPaginacion={setPaginacion} paginacion={paginacion} />
        {
          state?.results.map(pokepag=>(
            <PokeCard url={pokepag.url}
            key={pokepag.url}/>
          ))
        }
          </div>
          :
           <div>
            <PokeContainer formUrl={formUrl} />
          </div>  
        }
        
    </div>
  )
}

export default Pokedex