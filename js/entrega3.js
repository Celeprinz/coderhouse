   

function guardarProductoEnLocalStorage (producto) {

    // Traigo en localStorage
    const productosEnLS = localStorage.getItem("productos");

    if(productosEnLS !== null) {

        // Parseo lo que tengo en localStorage
        const productos = JSON.parse(productosEnLS);

        // Encuentro el índice en donde se encuentra el elemento a buscar
        const indiceProductoEncontrado = productos.findIndex( (elemento) => {
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

if(productosStorage !== null) {
    productos = JSON.parse(productosStorage);
}
    
    const usuario = JSON.parse(localStorage.getItem("usuarios"))
    const formulario = document.getElementById("formularioTransacciones")
    const select = document.getElementById("selectTransaccion");
    const inputNombreProducto = document.getElementById("nombre_producto")
    const inputStockProducto = document.getElementById("stock_producto")

    // Listado de productos: se deberan sacar de un JSON y por cada uno

    /*/ const select_producto = document.getElementById("nombre_producto");

    for(JSON) {

        
        const option = document.createElement("option");

    
        option.innerHTML = `${}´

        select.append(option);

    
       }
       nombre_producto.innerHTML=""
       nombre_producto.append(option); /*/



    formulario.addEventListener("submit",function(e) {

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
        Stock: stockProducto 
        })

        localStorage.setItem("productos", JSON.stringify(productos));

        guardarProductoEnLocalStorage(productos);


        
        alert((transaccion) + " exitoso")
                
    })

    



 