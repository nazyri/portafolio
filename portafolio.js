const nombre = document.getElementById("nombres")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("correo")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const btnRegistro = document.getElementById("Registrarme")
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


try {
    btnRegistro.addEventListener("click",e=>{
        e.preventDefault()
        let warnings = ""
        let entrar = false
        parrafo.innerHTML = ""
        if (nombres.value.length <4){
          parrafo.innerHTML += 'El nombre no es valido <br>'
          entrar=true
          console.log("dsad")
        }
        console.log(regexEmail.test(correo.value))
        if(!regexEmail.test(correo.value)){
          warnings += 'El correo no es valido <br>'
          entrar=true
        }
        if(password.value.length <8){
            warnings += 'La contraseña no es valido <br>'
            entrar=true
            console.log("dsad")
        }
        if(entrar){
            parrafo.innerHTML = warnings
        }else{
            parrafo.innerHTML = "enviado"
        }
        window.location.href="r.html"
    })
    
} catch (error) {
    console.error("El error fue ",error)    
}


























































