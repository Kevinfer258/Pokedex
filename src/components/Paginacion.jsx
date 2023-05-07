import React from 'react'
import './styles/paginacion.css'
const Paginacion =({setPaginacion , paginacion}) => {
    const handlePlus=()=>{
        setPaginacion(paginacion +1)
       
    }
    const handleMinus=()=>{
        if(paginacion === 0){
            setPaginacion(0)
        }else{
            setPaginacion(paginacion-1)
        }
    }
  return (
    <div className='pag-dex'>
        <button onClick={handleMinus} className='btn-minus'>-</button>
        <span className='pag-span'>{paginacion}</span>
        <button onClick={handlePlus} className='btn-plus'>+</button>
    </div>
  )
}

export default Paginacion