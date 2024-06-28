import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Inicio } from "./routes/Inicio";
import { DetalleProducto } from "./routes/DetalleProducto";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/producto/:id" element={<DetalleProducto />}></Route>
        <Route path="/*" element={<Inicio />}></Route>
      </Routes>
    </>
  );
}

export default App;
