
document.querySelector("input[type=submit]").addEventListener("click",function(event){

    event.preventDefault();

 
    const nombre=document.querySelector("input[name=nombre]");
    const apellido=document.querySelector("input[name=apellido]");
    const telefono=document.querySelector("input[name=telefono]");
    const correo=document.querySelector("input[name=correo]");

    addRow(nombre.value, apellido.value,telefono.value,correo.value);
    addInput(nombre.value, apellido.value, telefono.value,correo.value);
 

    correo.value = "";
    telefono.value ="";
    apellido.value ="";
    nombre.value ="";
    nombre.focus();

 
});



function addRow(nombre, apellido,telefono,correo) {

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

    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdTelefono);
    tr.appendChild(tdCorreo);

    const tbody=document.getElementById("registro").querySelector("tbody").appendChild(tr);

}