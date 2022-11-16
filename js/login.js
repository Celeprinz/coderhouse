
// function guardarUsuarioEnLocalStorage (usuarios) {

//     // Traigo en localStorage
//     const usuarioEnLS = localStorage.getItem("usuarios");

//     if(usuarioEnLS !== null) {

//         // Parseo lo que tengo en localStorage
//         const usuarios = JSON.parse(usuarioEnLS);

//         // Encuentro el índice en donde se encuentra el elemento a buscar
//         const indiceUsuarioEncontrado = usuarios.findIndex( (elemento) => {
//             return elemento.email === usuarios.email;
//         });

//         // Utilizo el índice buscado para pisar el stock por el que tiene el nuevo producto
//         usuarios[indiceUsuarioEncontrado].email = usuarios.email;

//         usuarios[indiceUsuarioEncontrado].contrasenia = usuarios.contrasenia;

//         // Vuelvo a cambiar el localStorage
//         localStorage.setItem("usuarios", JSON.stringify(usuarios));

//           }
// }
// let usuarios = [];

// // Chequeo si tengo usuarios en localStorage
// const usuariosStorage = localStorage.getItem("usuarios");

// if(usuariosStorage !== null) {
//     usuarios = JSON.parse(usuariosStorage);
// }


    const formulario_login = document.getElementById("formIniciarSesion");
    const inputEmail = document.getElementById("emailInicio");
    const inputContrasenia = document.getElementById("passwordInicio");
    

    formulario_login.addEventListener("submit",function(f_login) {

        f_login.preventDefault();
                       
        let usuarios = {email:inputEmail.value, contrasenia:inputContrasenia.value}

        // const email = inputEmail.value;
        // const contrasenia = inputContrasenia.value;

        // Limpiar inputs
        
        inputEmail.value = "";
        inputContrasenia.value = "";

        // usuarios.push({
        // Email : email,
        // Contrasenia : contrasenia,
        // }) 

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // guardarUsuarioEnLocalStorage (usuarios);

       //IF ok --
        Swal.fire ({
            text: `Ya iniciaste sesión como ${usuarios.email}`,
            padding: "2em",
            color: "#444",
            confirmButtonText: "OK",
            confirmButtonColor: "#227C9D",
        });  
        
        //else 
        
    })
       
        
        
    
    