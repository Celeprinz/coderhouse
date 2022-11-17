const contenedor = document.getElementById("contenedor");
const ul = document.createElement("ul");
const productos = JSON.parse(localStorage.getItem("productos"));
const usuario = JSON.parse(localStorage.getItem("usuarios"));



for (const producto of productos) {
  console.log(producto.Usuario.email , usuario.email)
  if(producto.Usuario.email === usuario.email) {
  const li = document.createElement("li");

  li.innerHTML = `<strong>Transaccion:</strong> ${producto.Transaccion}, <strong> realizada por </strong> ${producto.Usuario.email}, <strong>Producto:</strong> ${producto.Nombre}, <strong>Cantidad:</strong> ${producto.Stock}`;

  ul.append(li);

  contenedor.innerHTML = "";
  contenedor.append(ul);
}
}
