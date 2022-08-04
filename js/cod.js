let guardarUsuarios = obtenerLocalStorage()

document.querySelector("input[type=submit]").addEventListener("click",function(e){
    e.preventDefault();
    let transactionFormData = new FormData(form1);
 
    const nombre=document.querySelector("input[name=nombre]");
    const apellido=document.querySelector("input[name=apellido]");
    const telefono=document.querySelector("input[name=telefono]");
    const correo=document.querySelector("input[name=correo]");


    if (!nombre.value) {
        nombre.classList.add("error");
        alert("Ingrese el nombre")
        return;
    }
    if (!apellido.value) {
        nombre.classList.add("error");
        alert("Ingrese el apellido")
        return;
    }
    if (!telefono.value) {
        nombre.classList.add("error");
        alert("Ingrese el telefono")
        return;
    }
    if (!correo.value) {
        nombre.classList.add("error");
        alert("Ingrese el correo")
        return;
    }


    let nuevoUsuario = {
        nombre : nombre.value,
        apellido : apellido.value,
        telefono : telefono.value,
        correo : correo.value
    }

    guardarUsuarios.push(nuevoUsuario)

    renderizarUsuario()
    actualizarLocalStorage()
    //limpiamos los valores del input
    correo.value = "";
    telefono.value ="";
    apellido.value ="";
    nombre.value ="";
    nombre.focus();
 
});


function renderizarUsuario(){
    let tbody = document.createElement("tbody");
    for(let i=0; i<guardarUsuarios.length; i++){
        let usuario = guardarUsuarios[i]
        const tr=document.createElement("tr");
 
        const tdNombre=document.createElement("td");
        let txt=document.createTextNode(usuario.nombre);
        tdNombre.appendChild(txt);
        tdNombre.className="nombre";
    
        const tdApellido=document.createElement("td");
        txt=document.createTextNode(usuario.apellido);
        tdApellido.appendChild(txt);
        tdApellido.className="apellido";

        const tdTelefono=document.createElement("td");
        txt=document.createTextNode(usuario.telefono);
        tdTelefono.appendChild(txt);
        tdTelefono.className="telefono";

        const tdCorreo=document.createElement("td");
        txt=document.createTextNode(usuario.correo);
        tdCorreo.appendChild(txt);
        tdCorreo.className="correo";

        const tdRemove=document.createElement("td");
        const buttonRemove=document.createElement("img");
        buttonRemove.src="../images/borrar.png";
        buttonRemove.onclick=() =>{
            guardarUsuarios.splice(i,1)
            renderizarUsuario()
            actualizarLocalStorage()
        };
        tdRemove.appendChild(buttonRemove);

        tr.appendChild(tdNombre);
        tr.appendChild(tdApellido);
        tr.appendChild(tdTelefono);
        tr.appendChild(tdCorreo);
        tr.appendChild(tdRemove);

        tbody.appendChild(tr);
    }

    document.querySelector("#registro tbody").remove()
    document.querySelector("#registro").appendChild(tbody)

    
}

function actualizarLocalStorage(){
    localStorage.setItem("usuario", JSON.stringify(guardarUsuarios))
}

function obtenerLocalStorage(){
    let usuario = localStorage.getItem("usuario")
    if(usuario){
        return JSON.parse(usuario)
    }else{
        return []
    }
}

/*Funcion de Capturar, Almacenar datos y Limpiar campos*/
$(document).ready(function(){    
    $('submit').click(function(){        
        /*Captura de datos escrito en los inputs*/        
        let nom = document.getElementById("nombre").value;
        let apel = document.getElementById("apellido").value;
        let tel = document.getElementById("telefono").value;
        let corr = document.getElementById("correo").value;


        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("Nombre", nom);
        localStorage.setItem("Apellido", apel);
        localStorage.setItem("Telefono", tel);
        localStorage.setItem("Telefono", corr);
        /*Limpiando los campos o inputs*/
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("correo").value = "";
    });   
});

/*Funcion Cargar y Mostrar datos*/
$(document).ready(function(){    
    $('submit').click(function(){                       
        /*Obtener datos almacenados*/
        let nombre = localStorage.getItem("Nombre");
        let apellido = localStorage.getItem("Apellido");
        let telefono = localStorage.getItem("Telefono");
        var correo = localStorage.getItem("Correo");
        /*Mostrar datos almacenados*/      
        document.getElementById("nombre").innerHTML = nombre;
        document.getElementById("apellido").innerHTML = apellido; 
        document.getElementById("telefono").innerHTML = telefono; 
        document.getElementById("correo").innerHTML = correo; 
    });   
});


renderizarUsuario()