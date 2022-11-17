function guardarProductoEnLocalStorage(producto) {
  // Traigo en localStorage
  const productosEnLS = localStorage.getItem("productos");

  if (productosEnLS !== null) {
    // Parseo lo que tengo en localStorage
    const productos = JSON.parse(productosEnLS);

    // Encuentro el índice en donde se encuentra el elemento a buscar
    const indiceProductoEncontrado = productos.findIndex((elemento) => {
      return elemento.nombre === producto.nombre;
    });

    // Utilizo el índice buscado para pisar el stock por el que tiene el nuevo producto
    productos[indiceProductoEncontrado].stock = producto.stock;

    productos[indiceProductoEncontrado].transaccion = producto.transaccion;

    // Vuelvo a cambiar el localStorage
    localStorage.setItem("productos", JSON.stringify(productos));
  }
}
let productos = [];

// Chequeo si tengo productos en localStorage
const productosStorage = localStorage.getItem("productos");

if (productosStorage !== null) {
  productos = JSON.parse(productosStorage);
}

const usuario = JSON.parse(localStorage.getItem("usuarios"));
const formulario = document.getElementById("formularioTransacciones");
const select = document.getElementById("selectTransaccion");
const inputNombreProducto = document.getElementById("nombre_producto");
const inputStockProducto = document.getElementById("stock_producto");

// Listado de productos: se deberan sacar de un JSON

let frutas = [];

fetch(`/frutas.json`)
  .then((Response) => {
    return Response.json();
  })
  .then((frutasJSON) => {
    for (const fruta of frutasJSON) {
      frutas.push(fruta.fruta);
    }
    agregar_option()
  })

console.log(frutas);

 

//Se agrega a un option
const select_producto = document.getElementById("nombre_producto");

function agregar_option(){
for (const fruta of frutas) {

const option = document.createElement("option");
 
option.innerHTML = fruta ;
option.value = fruta ; 
  
select_producto.append(option);

}}

console.log(frutas)

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const transaccion = select.value;
  const nombreProducto = inputNombreProducto.value;
  const stockProducto = inputStockProducto.value;

  // Limpiar inputs
  select.value = "";
  inputNombreProducto.value = "";
  inputStockProducto.value = "";

  productos.push({
    Usuario: usuario,
    Transaccion: transaccion,
    Nombre: nombreProducto,
    Stock: stockProducto,
  });

  localStorage.setItem("productos", JSON.stringify(productos));

  guardarProductoEnLocalStorage(productos);

  Swal.fire({
    text: `${transaccion} realizada con exito `,
    padding: "2em",
    color: "#444",
    confirmButtonText: "OK",
    confirmButtonColor: "#227C9D",
  });
});

