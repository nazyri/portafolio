let form = document.getElementById("form")
let usuario = document.getElementById("nombres")
let primerApellido = document.getElementById("apellido")
let gmail = document.getElementById("correo")
let contraseña = document.getElementById("password")

form.addEventListener("registar",e =>{
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usuarioValue = usuario.nodeValue.trim();
    const primerApellidovalue = primerApellido.value.trim();
    const gmailvalue = gmail.value.trim();
    const contraseñavalue = contraseña.value.trim();

    if(usuarioValue === ''){
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
    localStorage.setItem("password",contraseña.value)
}







































































































