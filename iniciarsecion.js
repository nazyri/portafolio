let nombreUsuario = document.getElementById("nombres")
let gmail = document.getElementById("correo")
let contraseña = document.getElementById("password")

function guardarDatos() {
    localStorage.setItem("nombres",nombreUsuario.value)
    localStorage.setItem("correo",correo.value)
    localStorage.setItem("password",contraseña.value)
}






//Guardar datos//
localStorage.setItem ("nombres".value)
localStorage.setItem("correo".value)
localStorage.setItem("password".value)