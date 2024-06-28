import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import './DetalleProducto.css'
import { PedidosContext } from "../context/pedidos";

export const DetalleProducto = () => {

  const { id } = useParams();
  const [producto , setProducto] = useState([])

  const { verificarProducto, eliminarPedido, agregarPedido } = useContext(PedidosContext)

  const ProductoPedido = verificarProducto(id)

  useEffect(() => {
    fetch(`https://decidijc.com/?id=${id}`)
    .then(response => response.json())
    .then(data => {
      if(data[0] != null){
        setProducto(data[0])
      }
      else{
        location.pathname = '/'
      }
    })
  })

  return (
    <>
      <div className="cuerpo-detalle">
        <section className="imagen-producto-container row">
          <img src={producto.thumbnail} alt=""  className="imagen-producto"/>
        </section>
        <main className="detalles-producto">
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p>Precio: $ <strong>{producto.precio}</strong></p>
          <button className={ProductoPedido ? "btn btn-danger" : "btn btn-success"} onClick={() => ProductoPedido ? eliminarPedido(producto): agregarPedido(producto)}>{ProductoPedido ? "Eliminar Producto" : "Pedir Producto"}</button>
          <a href="/" className="btn btn-primary ms-3">Regresar a Tienda</a>
        </main>
      </div>
    </>
  );
};
