

const baseDato =[
    {
    usuario: "Marcos",
    contraseña: "1234",
},
{
    usuario: "juan",
    contraseña: "1357",
}

]
 const user =
{
    usuario : "",
    contraseña :""
    
}



const inputs = document.querySelectorAll("input");
const apps=document.querySelector("#logeo")

const redirigir=() =>  { 
    location.href= "principal/carrito.html"

}



inputs.forEach(el => { 
    el.addEventListener("input", (e)=>{
     
      
  if (e.target.name== "usuario" ) {
        user.usuario= e.target.value
    }
   
    if ( e.target.name== "contraseña"){
        user.contraseña=e.target.value
   }
   
    
})})

const loggeo= document.getElementById("enviar");
loggeo.addEventListener("click" , () =>{

   const usuarioEncontrado = baseDato.find (el=> el.usuario===user.usuario && el.contraseña===user.contraseña) 
   usuarioEncontrado ? redirigir (usuarioEncontrado) : alert ("no existe el usuario")
})

