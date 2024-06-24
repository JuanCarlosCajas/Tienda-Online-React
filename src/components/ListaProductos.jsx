import { useEffect, useState } from "react"
import './ListaProductos.css'
import { useFiltro } from "../hooks/useFiltro"

export function ListaProductos () {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  //const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://decidijc.com/?resultado=20&pagina=1', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setData(data)
        setLoading(false)
        console.log("fetching")
      })
  }, [])

  const { nuevosElementos } = useFiltro(data)

  return(
    <>
      <ul className="lista-productos">
        {loading ? 
        <p>Cargando..</p> : 
        nuevosElementos.map(item => 
          <li key={item.id} className="card producto">
            <img src={item.thumbnail} alt={item.nombre} className="thumbnail-producto card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">$. <strong>{item.precio}</strong></p>
              <div className="d-flex justify-content-evenly">
                <button className="btn btn-success">Pedir</button>
                <a href={ `/producto/${item.id}` } className="btn btn-info">Detalle</a>
              </div>
            </div>
          </li>)}
      </ul>
    </>
  )
}