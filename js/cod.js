const $formUser = document.getElementById('form1')
const $nombre = document.getElementById('input-nombre')
const $apellido = document.getElementById('input-apellido')
const $telefono = document.getElementById('input-telefono')
const $correo = document.getElementById('input-correo')
const $data = document.getElementById('table-body')

$formUser.addEventListener('submit', (event) =>{
    event.preventDefault()

    const nombre = $nombre.value
    const apellido = $apellido.value
    const telefono = $telefono.value
    const correo = $correo.value

    if (nombre.trim() === '' || nombre.trim() === undefined){
            return alert('ingrese el nombre')
    }

    if (apellido.trim() === '' || apellido.trim() === undefined){
        return alert('ingrese el apellido')
    }

    if (telefono.trim() === '' || telefono.trim() === undefined){
        return alert('ingrese el telefono')
    }

    if (correo.trim() === '' || correo.trim() === undefined){
        return alert('ingrese el correo')
    }

    const $tr = document.createElement('tr')

    const $tdNombre = document.createElement('td')
    const $divNombre = document.createElement('div')
    $divNombre.innerText = nombre
    $tdNombre.appendChild($divNombre)
    $tr.appendChild($tdNombre)

    const $tdApellido = document.createElement('td')
    const $divApellido = document.createElement('div')
    $divApellido.innerText = apellido
    $tdApellido.appendChild($divApellido)
    $tr.appendChild($tdApellido)

    const $tdTelefono = document.createElement('td')
    const $divTelefono = document.createElement('div')
    $divTelefono.innerText = telefono
    $tdTelefono.appendChild($divTelefono)
    $tr.appendChild($tdTelefono)

    const $tdCorreo = document.createElement('td')
    const $divCorreo = document.createElement('div')
    $divCorreo.innerText = correo
    $tdCorreo.appendChild($divCorreo)
    $tr.appendChild($tdCorreo)

    $data.appendChild($tr)

    $nombre.value = ''
    $apellido.value = ''
    $telefono.value = ''
    $correo.value = ''

    const tdRemove=document.createElement("td");
    const buttonRemove=document.createElement("text");
    buttonRemove="Eliminar";
})

buttonRemove.onclick=function () {
    // elimina la columna
    this.closest("tr").remove();
}