
const usuario = document.getElementById("nombres")
const primerApellido = document.getElementById("apellido")
const gmail = document.getElementById("correo")
const contraseña = document.getElementById("password")
const boton = document.getElementById("resgistrarme")


let credenciales = JSON.parse(localStorage.getItem("nombres"))||[]

function  guuardar() {
    
    let datos = {
        
        nombres: usuario.value,
        apellido: primerApellido.value,
        correo: gmail.value,
        password: contraseña.value,
    }
    
    credenciales.push(datos)
    localStorage.setItem("nombres", JSON.stringify(usuario))
}

contraseña.addEventListener("click", function () {
    guuardar()

})

let correoLocal = localStorage.getItem ("correo")
let apellidoLocal = localStorage.getItem ("apellido")
let contraseñaLocal = localStorage.getItem ("password")





/*
function guardarDatos() {
    localStorage.setItem("nombres",nombreUsuario.value)
    localStorage.setItem("apellido",primerApellido.value)
    localStorage.setItem("correo",correo.value)
    localStorage.setItem("password",contraseña.value)
}
*/





































/*form.addEventListener("registar",e =>{
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usuariovalue = usuario.value.trim();
    const primerApellidovalue = primerApellido.value.trim();
    const gmailvalue = gmail.value.trim();
    const contraseñavalue = contraseña.value.trim();

    if(usuariovalue === ''){
        setErrorfor()
    }
}

function setErrorfor(input, massage) {
    const formCostrol = input.parentElement;
    const small = formCostrol.querySelector('small');
    formCostrol.classNa
}
*/














































































































