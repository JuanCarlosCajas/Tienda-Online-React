import { createContext , useState } from "react";

export const FiltroContext = createContext()

export function FiltroProvider ({ children }) {

  const [filtro, setFiltro] = useState({
    minPrecio : 0,
    category : 'all'
  })

  return(
    <FiltroContext.Provider value={{filtro , setFiltro}}>
      {children}
    </FiltroContext.Provider>
  )
}