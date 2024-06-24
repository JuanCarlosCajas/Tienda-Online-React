import { createContext } from "react";  
import { useState } from "react";

export const PedidosContext = createContext()

export function PedidosProvider ({children}) {

  const[pedidos, setPedidos] = useState([])

  return(
    <PedidosContext.Provider value={{pedidos, setPedidos}}>
      {children}
    </PedidosContext.Provider>
  )
}