import { CartIcon } from "../iconos/CartIcon";
import './Header.css'

export function Header() {
  return (
    <>
      <header className="header d-flex col-12 mb-4 ps-3 pe-3 pt-3 pb-3 fixed-top">
        <section className="logo">
          <h1>Fake Store</h1>
        </section>
        <button type="button" className="carrito-boton btn btn-primary"><CartIcon/></button>
      </header>
    </>
  );
}
