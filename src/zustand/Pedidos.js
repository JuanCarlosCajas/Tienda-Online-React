import { create } from "zustand";

export const usePedido = create((set) => ({
  pedidos: [],
  agregarPedido : (id, nombre, url, precio, stock) => set((state) => ({ pedidos: [
    ...state.pedidos,
    { id: id, nombre: nombre, url: url, precio: precio, stock: stock}
  ] })),
  quitarPedido : ({nombre}) => set((state) => state.splice(item => item.nombre == nombre))
}))