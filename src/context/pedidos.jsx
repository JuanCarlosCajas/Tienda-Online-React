import { createContext, useEffect } from "react";
import { useState } from "react";
import { actualizarStorage } from "../hooks/useLocalStorage";
import { ingresandoLocalStorage } from "../hooks/useLocalStorage";

export const PedidosContext = createContext();

export function PedidosProvider({ children }) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    console.log("Usando este useEffect")
    // Irá cambiando conforme se actualice el pedido
    actualizarStorage(pedidos)
  }, [pedidos])
  

  const agregarMas = (cantidad, stock, id) => {
    if (stock == cantidad) return;

    const posicionProducto = pedidos.findIndex((item) => item.id === id);

    const nuevoPedido = structuredClone(pedidos);
    nuevoPedido[posicionProducto].cantidad += 1;
    setPedidos(nuevoPedido);
  };

  const eliminarPedido = (producto) => {
    const nuevosPedidos = pedidos.filter(
      (pedido) => parseInt(pedido.id) !== parseInt(producto.id)
    );
    setPedidos(nuevosPedidos);
  };

  const verificarProducto = (id) => {
    return pedidos.some((item) => item.id === id);
  };

  const agregarPedido = (producto) => {
    
    const { ProductosPedidos } = ingresandoLocalStorage(
      producto.id,
      producto.nombre,
      producto.thumbnail,
      producto.precio,
      producto.stock
    );
    setPedidos(ProductosPedidos);
  };

  const eliminarTodo = () => {
    setPedidos([]);
  };

  return (
    <PedidosContext.Provider
      value={{
        pedidos,
        setPedidos,
        agregarMas,
        eliminarPedido,
        verificarProducto,
        agregarPedido,
        eliminarTodo,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
}
