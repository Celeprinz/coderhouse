   

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
    
    const usuario = localStorage.getItem("usuarios")
    const formulario = document.getElementById("formularioTransacciones")
    const select = document.getElementById("selectTransaccion");
    const inputNombreProducto = document.getElementById("nombre_producto")
    const inputStockProducto = document.getElementById("stock_producto")

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

        
        const contenedor = document.getElementById("contenedor");
        const ul = document.createElement("ul");

        for(const producto of productos) {

        
         const li = document.createElement("li");

    
         li.innerHTML = `<strong>Transaccion:</strong> ${producto.Transaccion}, <strong> realizada por </strong> ${producto.Usuario}, <strong>Producto:</strong> ${producto.Nombre}, <strong>Cantidad:</strong> ${producto.Stock}`;

         ul.append(li);

     
        }
        contenedor.innerHTML=""
        contenedor.append(ul);
        
        alert((transaccion) + " exitoso")
                
    })

    



 