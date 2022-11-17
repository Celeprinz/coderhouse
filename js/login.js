
    const formulario_login = document.getElementById("formIniciarSesion");
    const inputEmail = document.getElementById("emailInicio");
    const inputContrasenia = document.getElementById("passwordInicio");
    


    formulario_login.addEventListener("submit",function(f_login) {

        f_login.preventDefault();
                       
        let usuarios = {email:inputEmail.value, contrasenia:inputContrasenia.value}


        // Limpiar inputs
        
        inputEmail.value = "";
        inputContrasenia.value = "";



        localStorage.setItem("usuarios", JSON.stringify(usuarios));

   
            Swal.fire ({
            text: `Iniciaste sesión como ${usuarios.email}`,
            padding: "2em",
            color: "#444",
            confirmButtonText: "OK",
            confirmButtonColor: "#227C9D",
        }).then((result) => {
            if (result.isConfirmed) {
        
         window.location.href = "pages/home.html";       
        
        }})
       
    })   
        
    
 