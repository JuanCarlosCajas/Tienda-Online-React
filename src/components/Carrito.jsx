import "./Carrito.css";
import { useContext } from "react";
import { PedidosContext } from "../context/pedidos";

export const Carrito = () => {
  const { pedidos, agregarMas, eliminarTodo } = useContext(PedidosContext);

  let jsonStyle = {
    height: document.body.scrollHeight + 15,
  };
  let jsonCarrito = {
    top: document.querySelector(".header").scrollHeight,
  };

  return (
    <div className="background-carrito" style={jsonStyle}>
      <section className="carrito-contenedor container" style={jsonCarrito}>
        <table className="table table-striped table-hover align-middle">
          <thead>
            <tr>
              <th scope="col">Imagen</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td>
                  <img src={pedido.url} alt="" width={"60px"} />
                </td>
                <td>
                  <span>{pedido.nombre}</span>
                </td>
                <td>
                  $. <span>{pedido.precio}</span>
                </td>
                <td className="logica-carrito">
                  <button
                    className="btn btn-primary me-3"
                    onClick={() =>
                      agregarMas(pedido.cantidad, pedido.stock, pedido.id)
                    }
                  >
                    {" "}
                    +{" "}
                  </button>
                  <span>{pedido.cantidad}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="container border d-flex justify-content-center col-12">
          {pedidos[0] != null ? (
            <>
              <button className="btn btn-primary">Pedir Productos</button>{" "}
              <button className="btn btn-danger ms-4" onClick={() => eliminarTodo()}>Eliminar Todo</button>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
};
