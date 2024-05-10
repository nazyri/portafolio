
let usuario = document.getElementById("nombres")
let primerApellido = document.getElementById("apellido")
let gmail = document.getElementById("correo")
let contraseña = document.getElementById("password")
let boton = document.getElementById("resgistrarme")

let credenciales = JSON.parse(localStorage.getItem("nombres"))||[]

function  usuario2() {
    
    let datos = {
        
        nombres: usuario.value,
        apellido: primerApellido.value,
        correo: gmail.value,
        password: boton.value,
    }
    

    credenciales.push(datos)
    localStorage.setItem("nombres", JSON.stringify(usuario2))
}

contraseña.addEventListener("click", function () {
    usuario2()
})

let correoLocal = localStorage.getItem ("correo")
let apellidoLocal = localStorage.getItem ("apellido")
let contraseñaLocal = localStorage.getItem ("password")












































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







function guardarDatos() {
    localStorage.setItem("nombres",nombreUsuario.value)
    localStorage.setItem("apellido",primerApellido.value)
    localStorage.setItem("correo",correo.value)
    localStorage.setItem("password",contraseña.value)*/








































































































