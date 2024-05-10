let nombreUsuario = document.getElementById("nombres")
let gmail = document.getElementById("correo")
let contraseña = document.getElementById("password")
let boton = document.getElementById("iniciar")

iniciar.addEventListener("click",() =>{
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




//Guardar datos
//localStorage.setItem ("nombres".value)
//localStorage.setItem("correo".value)
//localStorage.setItem("password".value)//