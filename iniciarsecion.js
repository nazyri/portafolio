let nombreUsuario = document.getElementById("nombres")
let gmail = document.getElementById("correo")
let contraseña = document.getElementById("password")
let boton = document.getElementById("iniciar")

let credenciales = JSON.parse(localStorage.getItem("nombres")) || []

function  guardar() {
    
    let data = {
        
        nombres: nombreUsuario.value,
        correo: gmail.value,
        contraseña: contraseña.value,
        
    }
    
    credenciales.push(data)

    localStorage.setItem("nombres", JSON.stringify(credenciales))
}

iniciar.addEventListener("click"(), e=>{
    const User = JSON.parse(localStorage.getItem("nombres"))
    console.log(User[0].correo)
    console.log(gmail.value)
    if (gmail.value == User[0].correo && contraseña.value==User[0].password) {
    
    }
    
    if (validacionDeUsuario) {
        alert("Coinciden")
        
    }else {
        alert("Incorrectos")
    }
    
})



/*Guardardatos (){
    localStorage.setItem ("nombres".value)
    localStorage.setItem("correo".value)
    localStorage.setItem("password".value)
}
*/