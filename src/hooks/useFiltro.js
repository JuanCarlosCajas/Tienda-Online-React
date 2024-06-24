import { useContext } from "react"
import { FiltroContext } from "../context/filtros"

export function useFiltro (data) {

  const { filtro } = useContext(FiltroContext)

  const nuevosElementos = data.filter(item => parseInt(item.precio) > filtro.minPrecio)

  return { nuevosElementos }
}