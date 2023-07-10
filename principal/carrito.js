
const ArrayDeProductos = [];
let ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];


let idUniversal = 1;

class Producto{
        constructor(id,nombre, precio, descripcion, categoria, url){
           this.id = id;
           this.nombre = nombre;
           this.precio = precio;           
           this.descripcion = descripcion;
           this.categoria  = categoria;
           this.url = url;
        }
}

const Escoba = new Producto(idUniversal++,"escoba sin pelos",300,"escoba para barrer pisos limpios","Escobas","../imagenes/escobas.jpeg");
ArrayDeProductos.push(Escoba);

const aerosol = new Producto(idUniversal++,"Aromatizador saphirus",1500,"aromatizador para hogar","aromatizacion","../imagenes/aerosol.jpeg");
ArrayDeProductos.push(aerosol);

const perfumina = new Producto(idUniversal++,"Perfumina saphirus",1500,"perfumina para ropa","aromatizacion","../imagenes/perfumina.jpeg");
ArrayDeProductos.push(perfumina);

const Mate = new Producto(idUniversal++,"Mate 3d",1500,"Mates personalizados","3d","../imagenes/Mas_mates 3d.jpeg");
ArrayDeProductos.push(Mate);



let productoEncontrado ={};
const app = document.querySelector("#app");
const buttonHeader = document.querySelector("#header_button");
const inputs= document.querySelector("#search")
//const busca= document.getElementById(button)



//buscar
inputs.addEventListener("input", (e)=>{
   productoEncontrado =  ArrayDeProductos.find(el => el.nombre=== e.target.value) 
    
})


input=addEventListener("keypress", (e) => { 
   (e.key==="Enter" && productoEncontrado) && console.log("para la proxima tendria que estar terminado")
    }),
    
buttonHeader.addEventListener("click", ()=>{
    app.innerHTML = ''
    ArrayCarrito.forEach(el => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML = ` 
                        <div class="tarjeta_image"><img src="${el.url}" alt=""/></div>
                        <div class="tarjeta_informacion">
                            <span class="tarjeta_nombre">${el.nombre}</span>
                            <span class="tarjeta_precio">$${el.precio}</span>
                        </div>
        `
        const buttonQuitar = document.createElement("button");
        buttonQuitar.innerText = "Quitar";
        buttonQuitar.addEventListener("click",(e) =>{      
       console.log(e)})
        tarjeta.appendChild(buttonQuitar);
        app.appendChild(tarjeta);
        

    })})

ArrayDeProductos.forEach((el)=>{
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = ` 
                    <div class="tarjeta_image"><img src="${el.url}" alt=""/></div>
                    <div class="tarjeta_informacion">
                        <span class="tarjeta_nombre">${el.nombre}</span>
                        <span class="tarjeta_precio">$${el.precio}</span>
                    </div>
    `
    const buttonAgregar = document.createElement("button");
    buttonAgregar.innerText = "Agregar";
    buttonAgregar.addEventListener("click",()=>{
        ArrayCarrito.push(el);
        localStorage.setItem("carrito",JSON.stringify(ArrayCarrito))
    })

    tarjeta.appendChild(buttonAgregar);
    app.appendChild(tarjeta);
})

