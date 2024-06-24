import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FiltroProvider } from "./context/filtros.jsx";
import { PedidosProvider } from "./context/pedidos.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PedidosProvider>
      <FiltroProvider>
        <App />
      </FiltroProvider>
    </PedidosProvider>
  </BrowserRouter>
);
