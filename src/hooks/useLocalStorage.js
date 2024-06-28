
export const ingresandoLocalStorage = (id, nombre, url, precio, stock) => {

  let ProductosPedidos

  if(localStorage.getItem('pedidos')){
    ProductosPedidos = JSON.parse(localStorage.getItem('pedidos'))
  }
  else{
    // Posibilidad que borren el pedidos en el storage lo pasamos vacio así no se rompe la aplicación
    ProductosPedidos = []
  }

  const productoPedido = {
    id: id,
    nombre: nombre,
    url: url,
    precio: precio,
    stock: stock,
    cantidad: 1
  }

  ProductosPedidos = [
    ...ProductosPedidos,
    productoPedido
  ]
  localStorage.setItem('pedidos', JSON.stringify(ProductosPedidos))

  return { ProductosPedidos }
}

export const actualizarStorage = (pedidos) => {
  localStorage.setItem('pedidos', JSON.stringify(pedidos))
}

