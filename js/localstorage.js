let listaUsuario = [];

function añadirDatosLocalStorage(pnombre, papellido, ptelefono, pcorreo){
    let nuevoUsuario = {
        nombre : pnombre,
        apellido : papellido,
        telefono : ptelefono,
        correo : pcorreo
    };
    console.log(nuevoUsuario);
    listaUsuario.push(nuevoUsuario);
    localStorageListaUsuario(listaUsuario);
}

function ObtenerListaUsuario(){

    let storedList = localStorage.getItem('localListaUsu');

    if(storedList == null){
        listaUsuario = [];
    }else{
        listaUsuario = JSON.parse(storedList);
    }
    return listaUsuario;
}

function localStorageListaUsuario(plist){
    localStorage.setItem('localListaUsu', JSON.stringify(plist));
}