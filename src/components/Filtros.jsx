import { useContext } from 'react'
import './Filtros.css'
import { FiltroContext } from '../context/filtros'

export function Filtros () {  

  const { filtro, setFiltro } = useContext(FiltroContext)

  const handleFilterRange = (event) => {
    setFiltro(prevState => ({
      ...prevState,
      minPrecio: event.target.value
    }))
  }

  return(
    <>
      <div className="separador">
      </div>
      <section className='filtros ps-3'>
        <div>

        </div>
        <div className='col-6 d-flex gap-4 rango-contenedor'>
          <label htmlFor="rango" className='titulo-minimo'>Minimo Precio: </label>
          <input 
          id='rango'
          type="range"
          defaultValue="0"
          min="0"
          max="1000"
          className='form-range'
          onChange={(event) => handleFilterRange(event)}
          />
          <span className='muestra-rango'>{filtro.minPrecio}</span>
        </div>
      </section>
    </>
  )
}