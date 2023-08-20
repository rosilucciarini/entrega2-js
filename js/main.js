const productos = [
    {id:1, nombre: "remera", categoria: "indumentaria", precio: 4000 , stock: 5},
    {id:2, nombre: "short", categoria: "indumentaria", precio: 4000 , stock: 8},
    {id:3, nombre: "zapatillas", categoria: "calzado", precio: 34000 , stock: 6},
    {id:4, nombre: "campera", categoria: "indumentaria", precio: 6000 , stock: 4},
    {id:5, nombre: "joggin", categoria: "indumentaria", precio: 8000 , stock: 5},
    {id:6, nombre: "zapatillas 2", categoria: "calzado", precio: 50000, stock: 4},
    {id:7, nombre: "remera combinada", categoria: "indumentaria", precio: 8000, stock: 4},
    {id:8, nombre: "mochila", categoria: "accesorios", precio: 20000, stock: 3},
    {id:9, nombre: "par de medias", categoria: "accesorios", precio: 800, stock: 4} 
]

let carrito = []

let opciones = prompt(`Elegir una opcion en numero:\n
1- Lista de producto
2- Filtrar por categoria
3- Ordenar de manera ascendente por precio
4- Ordenar de manera descendente por precio
5- Agregar producto al carrito
6- Costo total de carrito
7- Salir`).trim()


while(opciones != "7"){
  switch(opciones){
    case "1":
      alert(lista(productos))
      break
    case "2":
      let prodPorCategoria = ""
      let filtrarCategoria = prompt("Ingrese la categoria indumentaria, calzado o accesorios").toLowerCase()
      let categoriaFiltrada = productos.filter(producto => producto.categoria.toLowerCase() === filtrarCategoria) 
      categoriaFiltrada.forEach(producto => prodPorCategoria = prodPorCategoria + producto.nombre + " " + "$" + producto.precio + "\n")
      alert(prodPorCategoria)
      break
      case "3":
        let preciosAscendente = ""
        let precioAsc = productos.sort((a, b) =>{
          if(a.precio < b.precio){
            return 1
          }
          if(a.precio > b.precio){
            return -1
          }
          return 0
        })
        precioAsc.forEach(producto => preciosAscendente = preciosAscendente + producto.nombre + " " + "$" + producto.precio + "\n")
      alert(preciosAscendente)
      break
      case "4":
        let preciosDescendente = ""
        let precioDesc = productos.sort((a, b) =>{
          if(a.precio > b.precio){
            return 1
          }
          if(a.precio < b.precio){
            return -1
          }
          return 0
        })
        precioDesc.forEach(producto => preciosDescendente = preciosDescendente + producto.nombre + " " + "$" + producto.precio + "\n")
      alert(preciosDescendente)
      break
      case "5":
        let id = Number(prompt("Ingrese id de producto\n" + lista(productos)))
    agregarAlCarrito(carrito, id)
       break 
       case "6":
        let totalCompra = carrito.reduce((acum, producto) => acum + producto.subtotal, 0)
    alert("El total de su compra es: $" + totalCompra)
    alert("Muchas gracias por su compra")
break
 default:
  alert("Opcion invalida")
    break

      }  
      opciones = prompt(`Elegir una opcion en numero:\n
      1- Lista de producto
      2- Filtrar por categoria
      3- Ordenar de manera ascendente por precio
      4- Ordenar de manera descendente por precio
      5- Agregar producto al carrito
      6- Costo total de carrito
      7- Salir`).trim() 
    }
    
    
      function lista(productos) {
        let mensaje = productos.map(producto => `ID: ${producto.id}  - Nombre: ${producto.nombre}  -Precio: $${producto.precio}`).join("\n")
      
        return mensaje
      }
     

      function agregarAlCarrito(carrito, id) {
        let productoBuscado = productos.find(producto => producto.id === id)
        let productoEnCarrito = carrito.find(producto => producto.id === id)
        if (productoEnCarrito) {
          productoEnCarrito.unidades++
          productoEnCarrito.subtotal = productoEnCarrito.precioUnitario * productoEnCarrito.unidades
        } else {
          carrito.push({
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            unidades: 1,
            precioUnitario: productoBuscado.precio,
            subtotal: productoBuscado.precio
          })
        }
        console.log(carrito)
      }