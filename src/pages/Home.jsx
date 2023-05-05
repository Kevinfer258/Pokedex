import React from 'react'
import FormNameUser from '../components/home/FormNameUser'
import './styles/PokedexHome.css'
const Home = () => {
    return (
        <div className='poke'>
          <img className='poke_img' src=".//pokedexx.png" alt="" />
            <h2 className='poke_title'>¡Hi Trainer!</h2>
            <p className='poke_parrafo'>Please give us your Trainer to start.</p>
           <FormNameUser />
           <footer className='poke_footer'>
            <div className='poke_footer_rojo'></div>
            <div className='poke_footer_negro'></div>
           </footer>
        </div>
    )
}

export default Home