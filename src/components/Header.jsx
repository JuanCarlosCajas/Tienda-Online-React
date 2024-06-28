import { useState, useEffect, useContext } from "react";

import { CartIcon } from "../iconos/CartIcon";
import './Header.css'
import { Carrito } from "./Carrito";
import { PedidosContext } from "../context/pedidos";

export function Header() {

  const { setPedidos } = useContext(PedidosContext)

  const [cargarCarrito, setCargarCarrito] = useState(false)

  const handleCarrito = () => {
    setCargarCarrito(!cargarCarrito)
  }

  useEffect(() => {
    if (localStorage.getItem("pedidos")) {
      setPedidos(JSON.parse(localStorage.getItem("pedidos")));
    } else {
      localStorage.setItem("pedidos", JSON.stringify([]));
    }
  },[setPedidos]);

  return (
    <>
      <header className="header d-flex col-12 mb-4 ps-3 pe-3 pt-3 pb-3 fixed-top">
        <section className="logo">
          <h1>Fake Store</h1>
        </section>
        <button type="button" className="carrito-boton btn btn-primary" onClick={() => handleCarrito()}><CartIcon/></button>
      </header>
      {cargarCarrito ? <Carrito/> : ""}
    </>
  );
}
