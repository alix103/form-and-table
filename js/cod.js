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


    agregarFila(nombre.value, apellido.value,telefono.value,correo.value);
 
    //limpiamos los valores del input
    correo.value = "";
    telefono.value ="";
    apellido.value ="";
    nombre.value ="";
    nombre.focus();
 
});

function agregarFila(nombre, apellido,telefono,correo) {
    // añadimos el alumno a la tabla crando el tr, td's y el botón para eliminarlo
    const tr=document.createElement("tr");
 
    const tdNombre=document.createElement("td");
    let txt=document.createTextNode(nombre);
    tdNombre.appendChild(txt);
    tdNombre.className="nombre";
 
    const tdApellido=document.createElement("td");
    txt=document.createTextNode(apellido);
    tdApellido.appendChild(txt);
    tdApellido.className="apellido";

    const tdTelefono=document.createElement("td");
    txt=document.createTextNode(telefono);
    tdTelefono.appendChild(txt);
    tdTelefono.className="telefono";

    const tdCorreo=document.createElement("td");
    txt=document.createTextNode(correo);
    tdCorreo.appendChild(txt);
    tdCorreo.className="correo";

    const tdRemove=document.createElement("td");
    const buttonRemove=document.createElement("img");
    buttonRemove.src="../images/borrar.png";
    buttonRemove.onclick=eliminarFila;
    tdRemove.appendChild(buttonRemove);

    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdTelefono);
    tr.appendChild(tdCorreo);
    tr.appendChild(tdRemove);

    const tbody=document.getElementById("registro").querySelector("tbody").appendChild(tr);

}

function eliminarFila(event) {

    this.closest("tr").remove();

    if (document.getElementById("registro").querySelector("tbody").querySelectorAll("tr").length===0) {
        document.getElementById("registro").classList.add("hide");
    }
 
}